import React, {useState} from 'react';
import {PageContainer} from './styled';
import {PageTitle, ErrorMessage} from '../../components/MainComponents';
import useAPI from '../../helpers/OLXAPI';
import {doLogin} from '../../helpers/AuthHandler';
const Page = () => {
	const api = useAPI();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberPassword, setRememberPassword] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisabled(true);
		setError('');
		const json = await api.login(email, password);
		if (json.error) {
			setError(json.error);
		}else {
			doLogin(json.token, rememberPassword);
			window.location.href = '/';
		}
		setDisabled(false);
	}
	return (
			<PageContainer>
				<PageTitle>Login</PageTitle>
				{error &&
					<ErrorMessage>{error}</ErrorMessage>
				}
				<form onSubmit = {handleSubmit}>
					<div className="area">
					<label>
						<div className="area--title">Email</div>
						<div className="area--input">
							<input type="email" value={email} 
							onChange = {e=>setEmail(e.target.value)} required disabled = {disabled}/>
						</div>
						</label>
					</div>

					<div className="area">
					<label>
						<div className="area--title">Senha</div>
						<div className="area--input">
							<input type="password" value = {password} 
							onChange = {e=>setPassword(e.target.value)} required disabled = {disabled} />
						</div>
						</label>
					</div>

					<div className="area">
					<label>
						<div className="area--title">Lembrar Senha</div>
						<div className="area--input" style={ {position: 'relative', marginLeft: -280} }>
							<input type="checkbox" checked = {rememberPassword} 
							onChange = {e=>setRememberPassword(!rememberPassword)} disabled = {disabled} />
						</div>
						</label>
					</div>

					<div className="area">
					<label>
						<div className="area--title"></div>
						<div className="area--input">
							<button disabled = {disabled}>Fazer Login</button>
						</div>
						</label>
					</div>
				</form>
			</PageContainer>
		);
}

export default Page;