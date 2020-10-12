import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.1fr 1fr 1.5fr 1.2fr;
	grid-template-areas: "manticora"
												"mainTitle"
												"mainImage"
												"mainInfo";
	header { 
		grid-area: manticora;
		background: #4a51b6;
		height: 20vh;
		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 600;
		color: #fefefe;

		padding-top: 35px;

		@media (max-width: 600px) {
			width: 100%;
		}

		img {
			height: 8vh;
			width: 8vh;
			padding: 2px;
			margin-bottom: 10px;
		}

		p {
			padding: 5px;
			font-size: 1.5rem;
		}

	 }

	main {		
		.main-title { 
			grid-area: mainTitle;
			background: #4a51b6;
			height: 20vh;

			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 0.2fr;

			font-weight: 800;
			color: #fefefe;
			
			h1 {
				display: flex;
				align-items: flex-end;
				justify-content: center;
				padding: 10px;
				text-align: center;
			}

			p {
				display: flex;
				padding: 0 30vw;
				align-items: flex-start;
				justify-content: center;
				text-align: center;
				font-weight: 200;
				font-size: 0.8rem;
			}

			@media (max-width: 1100px) {
				width: 100%;
				 
				p {
					padding: 0 25vw;
				}
			}

			@media(max-width: 600px) {

				h1 {
					width: 100%;
					padding: 20px 5vw
				}
				p {
					width: 100%;
					padding: 0 10vw;
				}
			}

		 }

		.main-logo { 
			grid-area: mainImage;
			background: #4a51b6;
			height: 40vh;

			display: flex;
			justify-content: center;
			align-items: center;

			img {
				display: flex;
				justify-content: center;
				align-items: flex-end;
				height: 50vh;
				padding-top: 10px;
				margin-top: 80px;
			}
			
			@media(max-width: 600px) {
				height: 30vh;
				margin: 0;
				border: 0;

				img {
					height: 85%;
				}
			}

		 }

		.main-info { 
			grid-area: mainInfo;
			height: 35vh;
			width: 100%;

			padding: 20vw;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-areas: "title1 title2 title3"
														"desc1 desc2 desc3"
														"button1 button2 button 3";

			margin: auto;
			padding-top: 15vh;

			.app, .ecommerce, .dash {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-end;

				text-align: center;
				
			}

			.app {

				h2 {
					grid-area: title1
				}

				p {
					grid-area: desc1;
					padding: 30px 15px;
				}

				button {
					grid-area: button1
				}
			}

			.dash {
				h2 {
					grid-area: title2
				}

				p {
					grid-area: desc2;
					padding: 30px 15px;
				}

				button {
					grid-area: button2
				}
			}
			.ecommerce {

				h2 {
					grid-area: title3
				}

				p {
					grid-area: desc3;
					padding: 30px 15px;
				}

				button {
					grid-area: button3
				}
			}

		 }

		 @media(max-width: 1100px) {			 
			 .app, .ecommerce, .dash {
			 		width: 100%;
			 }
		 }

		 @media(max-width: 1000px) {			 
			 .main-info {
			 		width: 100%;
					padding: 60px 10px;
					margin: none;
			 }
		 }

		 @media(max-width: 600px) {	

			 .app, .ecommerce, .dash {
			 		display:grid;
					 grid-template-columns: 1fr;
					 width: 100%;
					 margin-top: 10vh;

			 }

			 .main-info {
			 		display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: 1fr 1fr 1fr;

					p {
						padding: 0 20vw
					}
			 }
		 }
	}

`;

export default Container;