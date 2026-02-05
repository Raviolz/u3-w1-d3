//Your access token for Token Based Authentication is:

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczNDk0OTg1ZTNiMTAwMTViNWVlMTAiLCJpYXQiOjE3NzAzMDIyMTgsImV4cCI6MTc3MTUxMTgxOH0._ly49N0jk7aB-nHwhutGhQQOQVrO_j13U-Z5HNr4mj8

//You can use it in your request setting the headers in this way:

//fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//headers: {
//"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczNDk0OTg1ZTNiMTAwMTViNWVlMTAiLCJpYXQiOjE3NzAzMDIyMTgsImV4cCI6MTc3MTUxMTgxOH0._ly49N0jk7aB-nHwhutGhQQOQVrO_j13U-Z5HNr4mj8"
//}
//})

import { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentsArea extends Component {
  state = { comments: [] }
  render() {
    return (
      <>
        {" "}
        <p className="text-muted mb-2">
          Commenti del libro: <strong>{this.props.asin}</strong>
        </p>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}
export default CommentsArea
