import React, {useState, useEffect} from 'react';
import {SearchArea, PageContainer, SearchBox} from './styled';
import useAPI from '../../helpers/OLXAPI';
import {Link} from 'react-router-dom';
const Page = () =>{
	const api = useAPI();
	const [stateList, setStateList] = useState([]);
	const [categories, setCategories] = useState([]);
	useEffect(()=>{
		const getStates = async ()=> {
			const sList = await api.getStates();
			setStateList(sList);
		}
		getStates();
	},[api]);
	useEffect(()=>{
		const getCategories = async () => {
			const cats = await api.getCategories();
			setCategories(cats);
		}
		getCategories();
	},[api]);
	return(
			<>
				<SearchArea>
					<PageContainer>
						<SearchBox>
							<form method="GET" action="/ads">
								<input type="text" placeholder="O que você procura?" name="q"/>
								<select name="state">
									{stateList.map((i, k)=>
											<option key={k} value = {i.name}>{i.name}</option>
										)
									}
								</select>
								<button>Pesquisar</button>
							</form>
						</SearchBox>
						<div className="categoryList">
							{categories.map((i, k)=>
									<Link to={`/ads?cats=${i.slug}`} key = {k} className="categoryItem">
										<img src={i.img} alt="" />
										<span>{i.name}</span>
									</Link>
								)}
						</div>
					</PageContainer>
				</SearchArea>
			</>
		);
}
export default Page;