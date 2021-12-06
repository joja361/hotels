import CommentHeader from "./CommentHeader";

const CommentDetails = ({ firstName, lastName, like, comment }) => {
  return (
    <div className="d-flex flex-column comment-detail-wrapper ps-3 pt-2 mt-2">
      <CommentHeader firstName={firstName} lastName={lastName} like={like} />
      <p className="comment">{comment}</p>
    </div>
  );
};

export default CommentDetails;
