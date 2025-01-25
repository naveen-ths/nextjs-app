import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            width={500}
            height={500}
            alt="Post Image"
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2025</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
}
