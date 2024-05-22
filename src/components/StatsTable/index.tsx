import { FC } from "react";
import styles from "./StatsTable.module.scss";

type Props = {
  postsCount: number;
  allSymbolsCount: number;
  commentsCount: number;
};

const StatsTable: FC<Props> = (props) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <th colSpan={2}>Статистика</th>
        </thead>
        <tbody>
          <tr>
            <th>Количество статей</th>
            <td>{props.postsCount}</td>
          </tr>
          <tr>
            <th>Общее количество символов</th>
            <td>{props.allSymbolsCount}</td>
          </tr>
          <tr>
            <th>Количество комментариев</th>
            <td>{props.commentsCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
