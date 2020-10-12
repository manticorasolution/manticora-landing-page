import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.1fr 1fr 1.5fr 1.2fr 0.8fr;
	grid-template-areas: "manticora"
												"mainTitle"
												"mainImage"
												"mainInfo"
												"aboutUs"
												"madeWith";

	header { 
		grid-area: manticora;
		background: #4a51b6;
		height: 10vh;
		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 600;
		color: #fefefe;

		padding-top: 25px;

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
			height: 25vh;

			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 0.2fr;

			font-weight: 800;
			color: #fefefe;

			padding-bottom: 30px;
			
			h1 {
				display: flex;
				align-items: flex-end;
				justify-content: center;
				padding: 10px;
			}

			p {
				display: flex;
				align-items: flex-start;
				justify-content: center;
				font-weight: 200;
				font-size: 0.8rem
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
		 }

		.main-info { 
			grid-area: mainInfo;
			height: 35vh;

			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			max-width: 70vw;
			grid-template-areas: "title1 title2 title3"
														"desc1 desc2 desc3"
														"button1 button2 button 3";

			margin: auto;
			padding-top: 10vh;

			.app, .ecommerce, .dash {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-end;

				text-align: center;
				padding: 20px;
				margin: 15px;
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

		.about-us { 
			grid-area: aboutUs;
			height: 20vh;

			display: flex;
			justify-content: center;
			align-items: center;

			div {
				margin: 10px;
			}
		 }
	}

	footer {  
		grid-area: madeWith;		height: 10vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}

`;

export default Container;