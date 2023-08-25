import { UserButton } from "@clerk/nextjs";
import styles from "./layout.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sideMenu}>Journey</aside>
      <div className={styles.content}>
        <header>
          <nav>
            <ul className={styles.navBar}>
              <li>Journal</li>
              <li>Insights</li>
              <li className={styles.user}>
                <UserButton />
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
