import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Expose locale-aware navigation helpers
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
