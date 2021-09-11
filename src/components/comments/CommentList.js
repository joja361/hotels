import CommentItem from "./CommentItem";

const CommentList = ({ comments = [], id }) => {
  const commentsList = comments.map((comment, i) => (
    <CommentItem key={`${id}${i}`} comment={comment} />
  ));
  return <div className="my-4">{commentsList}</div>;
};

export default CommentList;
