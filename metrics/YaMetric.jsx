"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

export default function Index() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const ymId = locale === "en" ? 104088537 : 104088523;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    window.ym(ymId, "hit", url);
  }, [pathname, searchParams]);

  return null;
}
