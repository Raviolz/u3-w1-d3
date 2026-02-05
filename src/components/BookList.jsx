import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import { Component } from "react"
import CommentsArea from "./CommentsArea"

class BookList extends Component {
  state = { selectedAsin: null }

  render() {
    return (
      <Container>
        <Row className="align-items-start">
          {this.props.books.map((book) => {
            const isSelected = this.state.selectedAsin === book.asin

            return (
              <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-3">
                <SingleBook
                  book={book}
                  isSelected={isSelected}
                  onSelect={() =>
                    this.setState((prev) => ({
                      selectedAsin: prev.selectedAsin === book.asin ? null : book.asin,
                    }))
                  }
                />

                {isSelected && <div style={{ position: "sticky", top: "1rem" }} className="mt-2"></div>}
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default BookList
