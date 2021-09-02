import CircleImage from "../UI/CircleImage";
import CommentDetails from "./CommentDetails";
import classes from "./CommentItem.module.css";

const CommentItem = ({ comment }) => {
  return (
    <div className={classes.comment}>
      <CircleImage image={comment.avatar} />
      <CommentDetails
        firstName={comment.name}
        lastName={comment.lastName}
        like={comment.like}
        comment={comment.comment}
      />
    </div>
  );
};

export default CommentItem;
