"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoader } from "../_context/LoaderContext";

export default function RouteLoader() {
  const pathname = usePathname();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();

    const timer = setTimeout(() => {
      hideLoader();
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}