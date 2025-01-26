import Forms from "../_components/form/forms";
import styles from "./createpost.module.css";
export default function Home() {
  return (
    <div className="min-h-screen relative ">
      <div className="flex justify-around flex-col items-center h-1/2 ">
        <h1 className="text-4xl font-bold mt-12 mb-12">Create Post Page</h1>
        <Forms />
      </div>
    </div>
  );
}
