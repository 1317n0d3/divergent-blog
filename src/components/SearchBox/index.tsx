import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styles from "./SearchBox.module.scss";
import { fetchNews } from "../../store/reducers/ActionCreators";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const { newsPosts } = useAppSelector((state) => state.newsReducer);
  const input: RefObject<HTMLInputElement> = useRef(null);
  const [results, setResults] = useState<ReactElement[]>([]);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const search = () => {
    if (!input.current) return;
    if (!input.current.value) {
      setResults([]);
      return;
    }
    const value = input.current.value;

    const matches = newsPosts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    const resultsElem: ReactElement[] = matches.map((post, index) => (
      <Link
        to={`/divergent-blog/${post.id}`}
        key={index + post.title}
        className={styles.resultItem}
        onClick={clearResults}
      >
        <span className={styles.title}>{post.title}</span>
      </Link>
    ));

    setResults(resultsElem);
  };

  const clearResults = () => {
    setResults([]);
    if (input.current) input.current.value = "";
  };

  return (
    <div className={styles.searchBox}>
      <input
        ref={input}
        type="text"
        placeholder="Поиск"
        className={styles.input}
        onChange={search}
      />

      {results.length !== 0 && <div className={styles.results}>{results}</div>}
    </div>
  );
};

export default SearchBox;
