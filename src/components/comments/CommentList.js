import AddComment from "./AddComment";
import CommentItem from "./CommentItem";
import { userRole } from "../../store/authSlice";
import { useSelector } from "react-redux";

const CommentList = ({ comments = [], id }) => {
  const role = useSelector(userRole);
  const commentsList = comments.map((comment, i) => (
    <CommentItem key={`${id}${i}`} comment={comment} />
  ));
  return (
    <div className="my-4">
      {commentsList}
      {role === "user" && <AddComment />}
    </div>
  );
};

export default CommentList;
