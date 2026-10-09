/** Browser downloads: a file the operator keeps, built in the page with no server round-trip. */

const save = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    // the object URL holds the blob alive until it is revoked
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

/** A spreadsheet-friendly CSV. The BOM is what makes Excel read Arabic correctly. */
export function downloadCsv(filename: string, headers: string[], rows: (string | number)[][]) {
    const cell = (value: string | number) => {
        const text = String(value ?? "");
        return /[",\n;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
    };
    const csv = [headers, ...rows].map((row) => row.map(cell).join(",")).join("\r\n");
    // U+FEFF, built rather than typed so no stray character sits in the source
    const bom = String.fromCharCode(0xfeff);
    save(new Blob([bom + csv], { type: "text/csv;charset=utf-8" }), filename);
}

/** The SVG a chart library rendered, as a PNG at twice the size so it stays sharp. */
export async function chartToPng(container: HTMLElement, scale = 2): Promise<string | null> {
    const svg = container.querySelector("svg");
    if (!svg) return null;

    const rect = svg.getBoundingClientRect();
    const width = Math.max(Math.round(rect.width), 1);
    const height = Math.max(Math.round(rect.height), 1);

    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", String(width));
    clone.setAttribute("height", String(height));
    // the page's font and the surface behind the marks travel with the image
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = `text { font-family: ${getComputedStyle(document.body).fontFamily}; }`;
    clone.prepend(style);

    const source = new XMLSerializer().serializeToString(clone);
    const image = new Image();
    image.crossOrigin = "anonymous";
    const loaded = new Promise<boolean>((resolve) => {
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
    });
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
    if (!(await loaded)) return null;

    const canvas = document.createElement("canvas");
    canvas.width = width * scale;
    canvas.height = height * scale;
    const context = canvas.getContext("2d");
    if (!context) return null;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
}

/** Save a chart as a PNG; returns false when the chart has not rendered yet. */
export async function downloadChartPng(container: HTMLElement, filename: string) {
    const dataUrl = await chartToPng(container);
    if (!dataUrl) return false;
    const binary = atob(dataUrl.split(",")[1]);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    save(new Blob([bytes], { type: "image/png" }), filename);
    return true;
}

/**
 * Hand a finished HTML document to the browser's own print dialog, where the
 * operator saves it as a PDF. A print window rather than a PDF library: the page
 * already knows the fonts, the direction and the numbers, and nothing is uploaded.
 */
export function printDocument(html: string, title: string) {
    const frame = document.createElement("iframe");
    frame.setAttribute("aria-hidden", "true");
    frame.style.cssText = "position:fixed;inset:0;width:0;height:0;border:0;opacity:0";
    document.body.append(frame);
    const doc = frame.contentDocument;
    if (!doc || !frame.contentWindow) {
        frame.remove();
        return false;
    }
    doc.open();
    doc.write(html);
    doc.close();
    doc.title = title;
    const run = () => {
        frame.contentWindow?.focus();
        frame.contentWindow?.print();
        // Safari needs the frame to outlive the dialog
        setTimeout(() => frame.remove(), 60_000);
    };
    if (doc.readyState === "complete") run();
    else frame.onload = run;
    return true;
}
