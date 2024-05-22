import { FC, useEffect } from "react";
import styles from "NewsPage.module.scss";
import NewsCard from "./NewsCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchNews } from "../../store/reducers/ActionCreators";

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
    <main>
      {error && <h1>{error}</h1>}
      {newsPostsElem}
    </main>
  );
};

export default NewsPage;
