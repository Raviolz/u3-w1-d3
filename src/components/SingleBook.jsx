import { Component } from "react"
import { Col, Card, Button } from "react-bootstrap"

//const SingleBook = ({ book }) => (
//<Card className="h-100">
//<Card.Img variant="top" src={book.img} className="book-img" />
//<Card.Body>
// <Card.Title>{book.title}</Card.Title>
//</Card.Body>
//</Card>
//)

// export default SingleBook

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card className={`h-100 ${this.props.isSelected ? "border-5 border-danger" : ""}`} onClick={this.props.onSelect}>
          <Card.Img variant="top" src={this.props.book.img} className="book-img" />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="primary" className="mt-auto">
              Vai al libro
            </Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
