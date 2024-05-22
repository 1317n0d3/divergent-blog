import { useParams } from "react-router-dom";
import styles from "./NewsPost.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchNews } from "../../store/reducers/ActionCreators";
import Comment from "../Comment";

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
    <div className={styles.wrapper}>
      <h1>{newsPostData.title}</h1>
      <p>{newsPostData.content}</p>

      <div className={styles.comments}>
        <h2>Комментарии</h2>
        <input
          type="text"
          placeholder="Ваш комментарий"
          className={styles.commentsInput}
        />
        <button type="submit">Отправить</button>

        {comments}
      </div>

      <h2>Статистика</h2>

      <table>
        <tbody>
          <tr>
            <th>Количество статей</th>
            <td>{count}</td>
          </tr>
          <tr>
            <th>Общее количество символов</th>
            <td>{allSymbolsCount}</td>
          </tr>
          <tr>
            <th>Количество комментариев</th>
            <td>{newsPostData.comments.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewsPost;
