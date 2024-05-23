import { RefObject, useRef } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { newsSlice } from "../../store/reducers/NewsSlice";
import Header from "../Header";
import styles from "./CreatePostPage.module.scss";
import { useNavigate } from "react-router-dom";
import sliceString from "../../utils/sliceString";

const CreatePostPage = () => {
  const dispatch = useAppDispatch();
  const postName: RefObject<HTMLInputElement> = useRef(null);
  const postContent: RefObject<HTMLTextAreaElement> = useRef(null);
  const navigate = useNavigate();

  const createPost = () => {
    if (!postName.current || !postContent.current) return;
    if (!postName.current.value || !postContent.current.value) return;

    dispatch(
      newsSlice.actions.addNewsPost({
        id: Date.now().toString(),
        title: postName.current.value,
        content: postContent.current.value,
        shortContent: sliceString(postContent.current.value, 100),
        comments: [],
      })
    );

    navigate("/divergent-blog");
  };

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Создание поста</h1>
          <div className={styles.form}>
            <input
              ref={postName}
              className={styles.input}
              type="text"
              placeholder="Название поста"
            />
            <textarea
              ref={postContent}
              className={styles.textarea}
              placeholder="Текст поста"
            ></textarea>
            <button className={styles.button} onClick={createPost}>
              Создать
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostPage;
