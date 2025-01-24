"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

interface Item {
  title: string;
  path: string;
}

export default function NavLink({title, path}: Item) {

  const pathName = usePathname();

  return (
    <Link href={path}
      className={`${styles.container} ${pathName === path && styles.active}`} >
      {title}
    </Link>
  )
}