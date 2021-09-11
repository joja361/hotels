import CommentHeader from "./CommentHeader";

const CommentDetails = ({ firstName, lastName, like, comment }) => {
  return (
    <div className="d-flex flex-column">
      <CommentHeader firstName={firstName} lastName={lastName} like={like} />
      <p>{comment}</p>
    </div>
  );
};

export default CommentDetails;
