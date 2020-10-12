import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@200;300;400;500;600&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;

	}

	body {
		font-family: 'Commissioner', sans-serif;
		background: #ecedef;
		color: #45454b;
		-webkit-font-smoothing: antialiased !important;
	}

`;