import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const RecipeGrid = ({ books }) => {
  return (
    <>
      <Container className="recipegrid mt-3">
      <h2 className='text-success text-center mb-4'>Our Recipes </h2>
      <hr />
        <Row >         
            {books.map((book) => (
                 <Col sm={6} md={4}>
              <Card 
                style={{
                  width: "20rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className=" mt-3"
              >
                <Card.Img
                  variant="top"
                  src={book.fields.image.fields.file.url}
                  alt="RecipeImage"
                  height="200px"
                />
                <Card.Body>
                  <Card.Title className="text-success">{book.fields.title}</Card.Title>
                  <Card.Text>
                    <h5 className="text-warning">Author:{book.fields.author}</h5>
                    <p>{book.fields.comments}</p>
                  </Card.Text>
                  {/* <Button variant="primary">Recipe</Button> */}
                </Card.Body>
              </Card>
              </Col>
            ))}
         
        </Row>
      </Container>
    </>
  );
};

export default RecipeGrid;
