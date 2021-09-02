import LikeHand from "../UI/LikeHand";
import Name from "./Name";
import classes from "./CommentHeader.module.css";

const CommentHeader = ({ firstName, lastName, like }) => {
  return (
    <div className={classes.comment_header}>
      <Name firstName={firstName} lastName={lastName} />
      <LikeHand like={like} />
    </div>
  );
};

export default CommentHeader;
