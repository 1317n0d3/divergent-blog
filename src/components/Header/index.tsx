import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/divergent-blog" className={styles.link}>
          Divergent blog
        </Link>
        <div className={styles.search}>
          <SearchBox />
          <Link to="/divergent-blog/create" className={styles.buttonLink}>
            Создать пост
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
