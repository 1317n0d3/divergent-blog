import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/divergent-blog" className={styles.link}>
          Divergent blog
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Поиск" className={styles.input} />
          <Link to="/divergent-blog/create" className={styles.buttonLink}>
            Создать пост
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
