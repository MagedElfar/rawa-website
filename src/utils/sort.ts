/** Split a toolbar's "field.dir" sort token into the API's sortBy/sortDir params. */
export const splitSort = <T extends { sort?: string | null }>({ sort, ...rest }: T) => {
    const [sortBy, sortDir] = (sort ?? "").split(".");
    return {
        ...rest,
        sortBy: sortBy || undefined,
        sortDir: (sortDir as "asc" | "desc") || undefined,
    };
};
