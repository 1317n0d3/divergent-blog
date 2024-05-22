import { FC } from "react";
import styles from "./NewsCard.module.scss";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  shortContent: string;
  commentsCount: number;
};

const NewsCard: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.content}>{props.shortContent}</p>
      <div className={styles.bottom}>
        <Link to={`/divergent-blog/${props.id}`} className={styles.link}>
          Подробнее
        </Link>
        <p className={styles.commentsCount}>
          Количество комментариев: {props.commentsCount}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
