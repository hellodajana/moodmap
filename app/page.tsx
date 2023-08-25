import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.centerContent}>
          <h1 className={styles.title}>
            Track your emotions and visualize your journey
          </h1>
          <p>
            Our journal application uses AI to help you track and understand
            your emotions. With your intuitive interface, you can easily record
            your daily experiences and gain valuable insights into your
            emotional well-being.
          </p>
          <div className={styles.buttonWrapper}>
            <button className={styles.blackButton}>Sign up</button>
            <button className={styles.whiteButton}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
