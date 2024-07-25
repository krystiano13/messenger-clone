import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <span className={styles.loader}></span>;
    </div>
  );
}
