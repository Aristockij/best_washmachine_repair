"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Index() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ymId = process.env.NEXT_PUBLIC_YA_ID;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    window.ym(ymId, "hit", url);
  }, [pathname, searchParams]);

  return null;
}
