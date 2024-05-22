import { useParams } from "react-router-dom";
import styles from "./NewsPost.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchNews } from "../../store/reducers/ActionCreators";
import Comment from "../Comment";
import StatsTable from "../StatsTable";

const NewsPost = () => {
  const dispatch = useAppDispatch();
  const { newsPosts, allSymbolsCount, count } = useAppSelector(
    (state) => state.newsReducer
  );

  useEffect(() => {
    dispatch(fetchNews());
  });

  const id = useParams().id;
  const newsPostData = newsPosts.find((post) => post.id === id);

  if (!newsPostData) {
    return <div className={styles.wrapper}>News post not found</div>;
  }

  const comments = newsPostData.comments.map((comment) => (
    <Comment
      key={comment.id + "-" + comment.content.slice(0, 10).split(" ").join("")}
      comment={comment}
    />
  ));

  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{newsPostData.title}</h1>
        <p className={styles.content}>{newsPostData.content}</p>

        <div className={styles.comments}>
          <h2>Комментарии</h2>

          <div className={styles.commentsForm}>
            <input
              type="text"
              placeholder="Ваш комментарий"
              className={styles.commentsInput}
            />
            <button type="submit">Отправить</button>
          </div>

          {comments}
        </div>
      </div>

      <StatsTable
        postsCount={count}
        allSymbolsCount={allSymbolsCount}
        commentsCount={newsPostData.comments.length}
      />
    </div>
  );
};

export default NewsPost;
