type TComment = {
  id: string;
  content: string;
};

type TData = {
  id: string;
  title: string;
  content: string;
  shortContent: string;
  comments: TComment[];
};
