import React from 'react';
import { Navbar, Container, Nav , FormControl } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
// import './NavBar.css'

function MainNavbar({ handleTitle, handleStar }) {
	const ratingChanged = (newRating) => {
		handleStar(newRating);
	};

	const handleChange = (e) => {
		handleTitle(e.target.value);
	};

	return (
		<div className="my-nav">
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">MoviesApp</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Services</Nav.Link>
					</Nav>
          <FormControl type="text" placeholder="Enter your search" onChange={handleChange}/>
				</Container>
				<ReactStars count={5} onChange={ratingChanged} size={35} activeColor="#ffd700" />
			</Navbar>
		</div>
	);
}

export default MainNavbar;
