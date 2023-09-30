import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
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

const StyledFormIntro = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 400px;
	text-align: left;


	
	p{
		font-size: 20px;
	}

	span{
		color: #EA4335;
	}
	`
const StyledFormWrapper = styled.form`
	width: 100%;
`

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');

	input{
		width: 100%;
		padding: .5rem;
		border-radius: 8px;
		font-family: 'Montserrat', sans-serif;
	}

	button{
		width: 100%;
		margin: 2rem 0 0 0;
		padding: .5rem;
		border-radius: 8px;
		font-family: 'Montserrat', sans-serif;
	}
	`

const StyledFormContainer = styled.div`
	display: flex;
	gap: 2rem;
	padding: 8rem;
	border-radius: 30px;
	background-color: rgba(47, 47, 138, 0.6);
`

const StyledButton = styled.button`
color: #ffffff;
	width: 160px;
	border-radius: 10px;
	border: none;
	padding: 0.5rem;
	background: hsla(21, 100%, 39%, 1);
	background: linear-gradient(0deg, #ec2f1ed7 30%, #4f33c9ad 83%);

	&:hover {
		cursor: pointer;
	}
`

const StyledMessage = styled.textarea`
	height: 100px;
	width: 100%;
	resize: none;
	border-radius: 8px;
	padding: .5rem;
	font-family: 'Montserrat', sans-serif;
`



const About = () => {
	const emailRef = useRef();
	const [email, setEmail]= useState('');
	const [message, setMessage]= useState('');
	const [formStatus, setFormStatus] = useState(null);
	


	const handleSubmit = (e) => {
		e.preventDefault();
		
		const data = {
			email: email,
			message: message,
		};
	
		fetch('https://formspree.io/f/xzbqveew', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					setEmail('');
					setMessage('');
					setFormStatus('Mensagge sent');
				} else {
					throw new Error("There's an error, we cannot send your message. Please, try again later");
				}
			})
			.catch((error) => {
				setFormStatus(error.message);
			});
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handleMessageChange = (event) => {
		setMessage(event.target.value)
	}

	return(
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
						<StyledFormWrapper onSubmit={handleSubmit}>
							<StyledForm>
								<input
									value={email}
									onChange={handleEmailChange}
									ref={emailRef}
									placeholder="youremail@emailservice.com"
									type="email"
									title="Please, make sure your email matches"
									required
									/>
									<StyledMessage
									type="text"
									value={message}
									onChange={handleMessageChange}
									wrap="hard"
									placeholder="Your message"
									required
									/>
									<StyledButton type="submit">Send message</StyledButton>
									{formStatus && <div>{formStatus}</div>}
							</StyledForm>
						</StyledFormWrapper>
				</StyledFormContainer>
		</StyledWrapper>
		)
	}


export default About;