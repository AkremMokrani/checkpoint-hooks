import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./MovieCard.css"
const MovieCard = ({ movie }) => {
	return (
		<div className="my-card">
			<Card style={{ width: '18rem' , height: '45rem' }}>
				<Card.Img variant="top" src={movie.posterUrl} style={{ width: '18rem', height: '20rem' }} />
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>{movie.description}</Card.Text>
					<Card.Title>{"⭐".repeat(movie.rating)} </Card.Title>
					<Button variant="primary">See trailer</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MovieCard;
