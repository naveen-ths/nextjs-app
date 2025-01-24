import Image from "next/image";
import Form from 'next/form'

import styles from "./contact.module.css";

export const metadata = {
  title: "contact Page",
  description: "Contact Description"
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact Image" width={500} height={500} className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <Form action="/" formMethod="POST" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button type="button">Submit</button>
        </Form>
      </div>
    </div>
  );
}
