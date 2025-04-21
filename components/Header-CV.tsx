"use client";
import { useState, useEffect } from "react";
import useIsMobile from "./CheckNarrow";
import HeaderDesktop from "./HeaderWide";
import HeaderMobile from "./HeaderNarrow";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile(690);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
