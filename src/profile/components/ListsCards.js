import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListsCard() {

    return (
        <CardGroup>
        <Card  bg="success" variant="Success" text='white' style={{ width: '18rem' }} className="mb-2">
          <Card.Body>
            <Card.Title>Liked List</Card.Title>
            <Card.Text>
              All the books you liked are stored here.
            </Card.Text>
            <Button variant="light">Check out</Button>
          </Card.Body>
        </Card>
        
        <Card bg="secondary" variant="Secondary" text='white' style={{ width: '18rem', marginLeft: '30px' }} className="mb-2">
          <Card.Body>
            <Card.Title>Blocked List</Card.Title>
            <Card.Text>
              All the books you disliked are stored here.
            </Card.Text>
            <Button variant="light">Check out</Button>
          </Card.Body>
        </Card>
        
      </CardGroup>
    )
}