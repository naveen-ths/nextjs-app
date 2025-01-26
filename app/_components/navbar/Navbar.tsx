import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css"
//https://nabendu82.medium.com/nextjs-14-blog-app-79a7c81fc0ed
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
