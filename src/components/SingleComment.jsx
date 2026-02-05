import { ListGroup } from "react-bootstrap"

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    <div>{comment.comment}</div>
    <small className="text-muted">Voto: {comment.rate}</small>
  </ListGroup.Item>
)

export default SingleComment
