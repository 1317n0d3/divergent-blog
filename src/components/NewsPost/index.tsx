import { useParams } from "react-router-dom";
import styles from "./NewsPost.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchNews } from "../../store/reducers/ActionCreators";

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
    return <div>News post not found</div>;
  }

  return (
    <div>
      <h1>{newsPostData.title}</h1>
      <p>{newsPostData.content}</p>

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
