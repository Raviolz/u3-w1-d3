import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = ({ books }) => {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-5">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
