import React, { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

function AddMovie({getData}) {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [ newMovie, setNewMovie ] = useState({
		title: '',
		description: '',
		posterUrl: '',
		rating: 0,

	});

	const handleChange = (e) => {
     console.log(e)
     setNewMovie({...newMovie , [e.target.name] : e.target.value})
  };

  const handleSubmit=()=>{
       getData(newMovie)
       handleClose()
  }
  
	return (
		<div style={{ margin: '10px' }}>
			<Button variant="primary" onClick={handleShow}>
				Add a new movie
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Movie</Modal.Title>
				</Modal.Header>
				{/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
				<label>Title : </label>
				<FormControl type="text" placeholder="enter title" name="title" onChange={handleChange} />
				<label>Description : </label>
				<FormControl type="text" placeholder="enter description" name="description" onChange={handleChange} />
				<label>Poster : </label>
				<FormControl type="text" placeholder="enter url" name="posterUrl" onChange={handleChange} />
				<label>Rating : </label>
				<FormControl
					type="number"
					min="1"
					max="5"
					placeholder="enter rating"
					name="rating"
					onChange={handleChange}
				/>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default AddMovie;
