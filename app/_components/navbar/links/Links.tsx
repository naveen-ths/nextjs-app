"use client";

import NavLink from "../navLinks/navLink";
import styles from "./links.module.css";

import { useState } from "react";
import Image from "next/image";

export default function Links() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink path={link.path} title={link.title} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink path="/dashboard" title="Admin" />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink path="/login" title="Login" />
      )}
      <Image className={styles.menuButton} src="/menu.png" alt="menu" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div className={styles.mobileLinks} >
          {
            links.map((link) => (
              <NavLink path={link.path} title={link.title} />
            ))
          }
        </div>
      )}
    </div>
  );
}
