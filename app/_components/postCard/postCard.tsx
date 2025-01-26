import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

interface PostItem {
  _id: string;
  title: string;
  description: string;
}
//https://nabendu82.medium.com/nextjs-14-blog-app-79a7c81fc0ed
export default function PostCard({ _id, title, description }: PostItem) {
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
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{description}</p>
        <Link className={styles.link} href={`blog/${_id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
