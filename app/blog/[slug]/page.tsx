import Image from "next/image";
import styles from "./singlePost.module.css";


export default async function SinglePostPage() {
// const dada = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="SAdsa"
          width={500}
          height={500}
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Post 1</h1>
        <div className={styles.detail}>
          <Image
            src={"/contact.png"}
            width={150}
            height={150}
            alt="author image"
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Naveen Kumar</span>
          </div>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2025</span>
        </div>
        <div className={styles.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </div>
      </div>
    </div>
  );
}
