import CommentHeader from "./CommentHeader";
import Comment from "./Comment";
import classes from "./CommentDetails.module.css";

const CommentDetails = ({ firstName, lastName, like, comment }) => {
  return (
    <div className={classes.comment_details}>
      <CommentHeader firstName={firstName} lastName={lastName} like={like} />
      <Comment comment={comment} />
    </div>
  );
};

export default CommentDetails;
