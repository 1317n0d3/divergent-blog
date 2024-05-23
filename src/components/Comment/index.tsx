import { FC } from "react";
import styles from "./Comment.module.scss";

type Props = {
  comment: TComment;
};

const Comment: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>{props.comment.content}</p>
    </div>
  );
};

export default Comment;
