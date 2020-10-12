import React from 'react';
import GlobalStyle from '../styles/global';
import Container from './styles';
import logo from '../imgs/manticora-material-black-inverted-semfundo.png';
import hero from '../imgs/manticora-img-landing.png';
import Button from '../components/Button';
import { FaMobile, FaDesktop, FaShoppingCart } from 'react-icons/fa';

const Landing = () => {
	return (
		<Container>
			<GlobalStyle />
			<header className="bg-blue">
				<img alt="manticora-logo" src={logo} />
				<p>Manticora</p>
			</header>
			<main>
				<div className="main-title">
					<h1>Gerencie seu negócio do começo ao fim.</h1>
					<p>Ajudamos pequenos varejistas a realizarem
					suas tarefas de maneira simples e
					intuitiva, unindo as melhores ferramentas
					e processos, para que eles vendam mais
					e com mais lucratividade.
					</p>
				</div>
				<div className="main-logo" id="bg-blue">
					<img alt="Dispositivos acessando ferramentas da Manticora" src={hero} />
				</div>
				<div className="main-info">
					<div className="app">
						<div className="title">
							<FaMobile size="2rem" color="inherit" />
							<h2>Aplicativo</h2>
						</div>
						<p>Cadastre seu carregamento de maneira fácil escaneando os códigos de barra com o App da Manticora.</p>
						<Button className="button" icon="android" text="Acesso antecipado" redirectTo="https://drive.google.com/file/d/11EnRFxK9rbXM7cBWFE8XT6OjR_d9a6oe/view?usp=sharing" />
					</div>
					<div className="dash">
						<div className="title">
							<FaDesktop size="2rem" color="inherit" />
							<h2>Painel inteligente</h2>
						</div>
						<p>Controle faturamento, estoque, pedidos e receba indicações personalizadas 	com o Painel inteligente da Manticora.</p>
						<Button className="button" icon="link" text="Acesso antecipado" redirectTo="https://painelinteligente.manticora.app" />
					</div>
					<div className="ecommerce">
						<div className="title">
							<FaShoppingCart size="2rem" color="inherit" />
							<h2>Loja virtual</h2>
						</div>
						<p>Venda seus produtos de maneira fácil e rápida com a Loja virtual da Manticora. E o mais importante: sem contato!</p>
						<Button className="button" icon="link" text="Acesso antecipado" redirectTo="https://lojavirtual.manticora.app" />
					</div>
				</div>
			</main>
		</Container>
	);
}

export default Landing;