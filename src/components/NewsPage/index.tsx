import { FC, useEffect } from "react";
import styles from "./NewsPage.module.scss";
import NewsCard from "./NewsCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchNews } from "../../store/reducers/ActionCreators";
import Header from "../Header";

type Props = {};

const NewsPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { newsPosts, error } = useAppSelector((state) => state.newsReducer);

  useEffect(() => {
    dispatch(fetchNews());
  });

  const newsPostsElem = newsPosts.map((post, index) => {
    return (
      <NewsCard
        id={post.id}
        title={post.title}
        shortContent={post.shortContent}
        commentsCount={post.comments.length}
        key={index + post.title.split(" ").join("")}
      />
    );
  });

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        {error && <h1>{error}</h1>}
        {newsPostsElem.reverse()}
      </main>
    </>
  );
};

export default NewsPage;
