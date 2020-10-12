import React from 'react';
import GlobalStyle from '../styles/global';
import Container from './styles';
import logo from '../imgs/manticora-material-black-inverted-semfundo.png';
import hero from '../imgs/manticora-img-landing.png';

const Landing = () => {
	return (
		<Container>
			<GlobalStyle />
			<header>
				<img alt="manticora-logo" src={logo} />
				<p>Manticora</p>
			</header>
			<main>
				<div className="main-title">
					<h1>Gerencie seu negócio do começo ao fim.</h1>
					<p>A maneira mais simples e completa de controlar seu micro e pequeno negócio.</p>
				</div>
				<div className="main-logo">
					<img alt="Dispositivos acessando ferramentas da Manticora" src={hero} />
				</div>
				<div className="main-info">
					{/* <div>
						<h2>App</h2>
						<p>descrição</p>
						<button>botao download</button>
					</div>
					<div>
						<h2>Dash</h2>
						<p>descrição</p>
						<button>botao download</button>
					</div>
					<div>
						<h2>Loja virtual</h2>
						<p>descrição</p>
						<button>botao download</button>
					</div> */}
				</div>
				<div className="about-us"></div>
			</main>
			<footer></footer>
		</Container>
	);
}

export default Landing;