import React from 'react';
import {HeaderArea, PageContainer} from './styled';
import {Link} from 'react-router-dom';
import {isLogged} from '../../../helpers/AuthHandler';
const Header = () => {
	const logged = isLogged();
	return (
			<HeaderArea>
				<PageContainer>
				<Link to="/">
					<div className="logo">
						<span className="logo-1">O</span>
						<span className="logo-2">L</span>
						<span className="logo-3">X</span>
					</div>
					</Link>
					<div className="menu">
						<nav>
							<ul>
								{!logged &&
									<>
										<li><Link to="/signin">Login</Link></li>
										<li><Link to="/signup">Cadastrar</Link></li>
										<li className="post-an-ad"><Link to="/signin">Post um anúncio</Link></li>
										</>
								}

								{logged &&
									<>
										<li><Link to="/my-account">Minha Conta</Link></li>
										<li><button>Sair</button></li>
										<li className="post-an-ad"><Link to="post-an-ad">Post um anúncio</Link></li>
										</>
								}
								
							</ul>
						</nav>
					</div>
				</PageContainer>
			</HeaderArea>
		);
}
export default Header;