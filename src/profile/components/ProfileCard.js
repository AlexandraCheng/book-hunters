import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProfileCard({
    stored,
    startEditCallback
}) {

    return (
    <Card style={{ width: '36rem'}}>
        <Card.Header className="text-muted">Welcome back, book lover!</Card.Header>
        <Card.Body>
            <Card.Title>AlexandraCheng's Profile</Card.Title>
            <Card.Text>Email: yscenery.chng@gmail.com</Card.Text>
            <Card.Text>Phone number: 9292320812</Card.Text>
            <Card.Text>Gender: Female</Card.Text>
            <Card.Text>Age: 18-25</Card.Text>
            <Card.Text>Location: New York City</Card.Text>
            <Card.Text>Interests: Food, Travel</Card.Text>
            <Button variant="primary">Edit profile</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Tip: you can help improve personalization by adding books to your lists.</Card.Footer>
    </Card>
    )
}