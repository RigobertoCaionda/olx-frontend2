import React, {useState, useEffect} from 'react';
import {PageContainer} from './styled';
import {PageTitle, ErrorMessage} from '../../components/MainComponents';
import useAPI from '../../helpers/OLXAPI';
import {doLogin} from '../../helpers/AuthHandler';
const Page = () => {
	const api = useAPI();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const [name, setName] = useState('');
	const [stateLoc, setStateLoc] = useState();
	const [confirmPassword, setConfirmPassword] = useState('');
	const [stateList, setStateList] = useState([]);
	useEffect(()=>{
		const getStates = async ()=>{
			const sList = await api.getStates();
			setStateList(sList);
		}
		getStates();
	},[api]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisabled(true);
		setError('');
		if (password !== confirmPassword) {
			setError('As senhas nao batem!');
			setDisabled(false);
			return;
		}
		const json = await api.register(name, email, password, stateLoc);
		if (json.error) {
			setError(json.error);
		}else {
			doLogin(json.token);
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
						<div className="area--title">Nome Completo</div>
						<div className="area--input">
							<input type="text" value={name} 
							onChange = {e=>setName(e.target.value)} required disabled = {disabled}/>
						</div>
						</label>
					</div>

					<div className="area">
					<label>
						<div className="area--title">Estado</div>
						<div className="area--input">
							<select disabled = {disabled} required value={stateLoc} 
							onChange={e=>setStateLoc(e.target.value)}>
								<option></option>
								{stateList.map((i,k)=>
										<option value={i.id} key = {k}>{i.name}</option>
									)}
							</select>
						</div>
						</label>
					</div>


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
						<div className="area--title">Confirmar Senha</div>
						<div className="area--input">
							<input type="password" value = {confirmPassword} 
							onChange = {e=>setConfirmPassword(e.target.value)} disabled = {disabled} />
						</div>
						</label>
					</div>

					<div className="area">
					<label>
						<div className="area--title"></div>
						<div className="area--input">
							<button disabled = {disabled}>Fazer Cadastro</button>
						</div>
						</label>
					</div>
				</form>
			</PageContainer>
		);
}

export default Page;