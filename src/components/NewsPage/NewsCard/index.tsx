import { FC } from "react";
import styles from "./NewsCard.module.scss";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  shortContent: string;
};

const NewsCard: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p>{props.title}</p>
      <p>{props.shortContent}</p>
      <Link to={`/divergent-blog/${props.id}`}>Подробнее</Link>
    </div>
  );
};

export default NewsCard;
