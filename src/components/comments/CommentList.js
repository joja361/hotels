import CommentItem from "./CommentItem";
import classes from "./CommentList.module.css";

const CommentList = ({ comments = [], id }) => {
  const commentsList = comments.map((comment, i) => (
    <CommentItem key={`${id}${i}`} comment={comment} />
  ));
  return <div className={classes.comments}>{commentsList}</div>;
};

export default CommentList;
