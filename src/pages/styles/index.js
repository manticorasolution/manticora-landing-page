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

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			div {
				text-align: justify;
				margin: 15px;
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
		grid-area: madeWith;
		height: 10vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}

`;

export default Container;