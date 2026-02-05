//Your access token for Token Based Authentication is:

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczNDk0OTg1ZTNiMTAwMTViNWVlMTAiLCJpYXQiOjE3NzAzMDIyMTgsImV4cCI6MTc3MTUxMTgxOH0._ly49N0jk7aB-nHwhutGhQQOQVrO_j13U-Z5HNr4mj8

//You can use it in your request setting the headers in this way:

//fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//headers: {
//"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczNDk0OTg1ZTNiMTAwMTViNWVlMTAiLCJpYXQiOjE3NzAzMDIyMTgsImV4cCI6MTc3MTUxMTgxOH0._ly49N0jk7aB-nHwhutGhQQOQVrO_j13U-Z5HNr4mj8"
//}
//})

const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/"

import { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentsArea extends Component {
  state = { comments: [] }
  getComments = () => {
    fetch(commentsURL + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczNDk0OTg1ZTNiMTAwMTViNWVlMTAiLCJpYXQiOjE3NzAzMDIyMTgsImV4cCI6MTc3MTUxMTgxOH0._ly49N0jk7aB-nHwhutGhQQOQVrO_j13U-Z5HNr4mj8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dei commenti")
        }
      })
      .then((comment) => {
        console.log("COMMENTS RECUPERATI", comment)

        this.setState({
          comments: comment,
        })
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }
  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <>
        <p className="text-muted mb-2">
          Commenti del libro: <strong>{this.props.asin}</strong>
        </p>

        <ListGroup>
          {this.state.comments.map((c) => (
            <ListGroup.Item key={c._id}>
              <div>{c.comment}</div>
              <small className="text-muted">Voto: {c.rate}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    )
  }
}
export default CommentsArea
