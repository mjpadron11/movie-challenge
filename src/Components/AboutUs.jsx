import React, { useState } from 'react';
import styled from 'styled-components'

const StyledWrapper = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	width: 100%;
	padding: 10rem 0 0 0;
	gap: 3rem;
`

const StyledIntro = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	text-align: left;
	width: 500px;

	p{
		font-size: 20px;
	}
`


const StyledFormContainer = styled.div`
	display: flex;
	gap: 2rem;
	width: 700px;
	background-color:  rgba(61, 56, 155, 0.438);
	padding: 2rem;
	border-radius: 8px;
	`

const StyledFormIntro = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 300px;
	text-align: left;


	
	p{
		font-size: 20px;
	}

	span{
		color: #EA4335;
	}
	`


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;

	input{
		width: 100%;
		padding: .5rem;
		border-radius: 8px;
	}

	button{
		width: 100%;
		margin: 2rem 0 0 0;
		padding: .5rem;
		border-radius: 8px;
	}
	`
	const StyledMessageContainer = styled.textarea`
		height: 100px;
		width: 100%;
		resize: none;
		border-radius: 8px;
		padding: .5rem;
	`

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledWrapper>
			<StyledIntro>
				<h2>About us!</h2>
				<p>
					Welcome to our film webpage! We're delighted to have you here. Our mission is to provide you with comprehensive information about a wide range of movies using the TMDB API. Whether you're a dedicated cinephile or just looking for some casual movie recommendations, you've come to the right place!
				</p>
				<p>
					Please note that our website is primarily an informational platform and not a streaming service. You won't find any movie streams here, but you'll discover a treasure trove of details about your favorite films, including rating, reviews, and more.
				</p>
			</StyledIntro>
			<StyledFormContainer>
				<StyledFormIntro>
					<h3>Contact Us</h3>
					<p>If you have any questions or feedback, or want to collaborate feel free to reach out to us via the form attached.</p>
					<p>We will be more than happy to <span>hear from you!</span></p>
				</StyledFormIntro>
				<StyledForm onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name"></label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder='Name'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email"></label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder='email address'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message"></label>
						<StyledMessageContainer
							id="message"
							name="message"
							placeholder='Write your message here!'
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>

					<button type="submit">Submit</button>
				</StyledForm>
			</StyledFormContainer>
    </StyledWrapper>
  );
};

export default About;