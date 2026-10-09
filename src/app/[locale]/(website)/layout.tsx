import { ReactNode } from "react";

import Header from "@/components/layout/Header";

interface Props {
  children: ReactNode,
}

export default async function MainLayout({
  children,
}: Props) {



  return (
    <div className="relative">
      <Header />

      <main>
        {children}
      </main>

    </div>
  );
}
