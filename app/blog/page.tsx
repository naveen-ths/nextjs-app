import Post from "@/models/postModel";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      return (
        <h1 className="text-red-400 font-bold text-xl">You have no Posts</h1>
      );
    } else {
      const deadLineToDate = (createdAt: any) => {
        const deadlineDate = new Date(createdAt);

        // Extracting day, month, and year components from the Date object
        const day = deadlineDate.getDate();
        const month = deadlineDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = deadlineDate.getFullYear();

        // Formatting the date as MM/DD/YYYY
        return `${day}.${month}.${year}`;
      };
      return (
        <div className={styles.container}>
          {posts.map(({ _id, title, description, createdAt }: any) => (
            <div className={styles.post} key={_id}>
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
                  <span className={styles.date}>
                    {deadLineToDate(createdAt)}
                  </span>
                </div>
                <div className={styles.bottom}>
                  <h1 className={styles.title}>{title}</h1>
                  <p className={styles.desc}>{description}</p>
                  <Link className={styles.link} href={`blog/${_id.toString()}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
