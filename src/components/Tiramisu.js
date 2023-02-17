import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Richtext from './Richtext';

const Tiramisu = ({books}) => {
       return ( <>
     {books.map((book) => (
      <div>
        <Card style={{ width: '35rem',marginLeft:'auto',marginRight:'auto' }} className="mt-3">
        <Card.Img variant="top" src={book.fields.image.fields.file.url} alt="RecipeImage" />
        <Card.Body>
          <Card.Title className="text-success">{book.fields.title}</Card.Title>
          <Card.Text>
          <h5>Author:{book.fields.author}</h5>
          <p>{book.fields.comments}</p>
          </Card.Text>
          {/* <Button variant="primary">Recipe</Button> */}
        </Card.Body>
      </Card>
      <Richtext content={book.fields.recipe} />
      </div>
       
      
      
      ))}
    

     
     
      
      
      </> );
}
 
export default Tiramisu;