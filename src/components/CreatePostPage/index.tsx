import Header from "../Header";
import styles from "./CreatePostPage.module.scss";

const CreatePostPage = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Создание поста</h1>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Название поста"
            />
            <textarea
              className={styles.textarea}
              placeholder="Текст поста"
            ></textarea>
            <button className={styles.button}>Создать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostPage;
