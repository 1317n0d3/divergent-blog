import { FC } from "react";
import styles from "NewsPage.module.scss";
import NewsCard from "./NewsCard";

const data: { newsPosts: TData[] } = require("../../assets/data/index.json");

type Props = {};

const NewsPage: FC<Props> = () => {
  const newsPosts = data.newsPosts.map((post, index) => {
    return (
      <NewsCard
        id={post.id}
        title={post.title}
        shortContent={post.shortContent}
        key={index + post.title.split(" ").join("")}
      />
    );
  });

  return (
    <main>
      <h1>News Page</h1>
      {newsPosts}
    </main>
  );
};

export default NewsPage;
