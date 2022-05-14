import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecsList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<Row lg={4} className="g-4">
			
		{props.movies.map((movie, index) => (
        <Col><Card bg="outline-success" variant="Success" id={index}>
			<Card.Img variant="top" src={movie.image} />
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>
						All the books you liked are stored here.
					</Card.Text>
					<Button variant="primary" onClick={() => props.handleFavouritesClick(movie)}><FavouriteComponent /></Button>
					<Button variant="secondary" onClick={() => props.handleBlockedClick(movie)}>Add to blocked list</Button>
				</Card.Body>
			</Card>
			</Col>
				
			))}
		
		</Row>
		
	);
};

export default RecsList;