import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentsList = ({ comments }) => (
  <ListGroup className="mt-2">
    {comments.map((c) => (
      <SingleComment key={c._id} comment={c} />
    ))}
  </ListGroup>
)

export default CommentsList
