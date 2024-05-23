import { useParams } from "react-router-dom";
import styles from "./NewsPost.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RefObject, useEffect, useRef } from "react";
import { fetchNews } from "../../store/reducers/ActionCreators";
import Comment from "../Comment";
import StatsTable from "../StatsTable";
import { newsSlice } from "../../store/reducers/NewsSlice";

const NewsPost = () => {
  const dispatch = useAppDispatch();
  const { newsPosts, allSymbolsCount, count } = useAppSelector(
    (state) => state.newsReducer
  );
  const input: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

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

  const addNewComment = (id: string) => {
    if (!input.current) return;
    if (!input.current.value) return;

    const content: string = input.current.value;
    const comment: TComment = {
      id: Date.now().toString(),
      content,
    };
    dispatch(newsSlice.actions.addNewComment({ id, comment }));

    input.current.value = "";
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{newsPostData.title}</h1>
        <p className={styles.content}>{newsPostData.content}</p>

        <div className={styles.comments}>
          <h2>Комментарии</h2>

          <div className={styles.commentsForm}>
            <input
              ref={input}
              type="text"
              placeholder="Ваш комментарий"
              className={styles.commentsInput}
            />
            <button
              type="submit"
              onClick={() => addNewComment(newsPostData.id)}
            >
              Отправить
            </button>
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
