"use client";

import { useEffect } from "react";
import { startPageMotion } from "../lib/motion";

export default function PageMotion() {
  useEffect(() => startPageMotion(), []);
  return null;
}
