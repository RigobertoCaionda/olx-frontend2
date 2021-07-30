import styled from 'styled-components';

export const SearchArea = styled.div`
	background-color: #ddd;
	border-bottom: 1px solid #ccc;
	padding:20px 0;
`;
export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	margin:auto;
	height: 100%;
	.categoryList {
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		.categoryItem {
			display: flex;
			align-items: center;
			text-decoration: none;
			color: #000;
			img {
				margin-right: 10px;
			}
		}

	}
`;
export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	background-color: #9bb83c;
	width: 100%;
	padding: 15px;
	border-radius: 5px;
	input, select, button {
		border-radius: 5px;
		border: none;
		outline: 0;
		margin-right: 20px;
		font-size: 15px;
		color: #000;
	}
	select {
		padding: 12px;
		width: 100px;
		height: 40px;
	}
	form {
		flex: 1;
		display: flex;
	}
	input {
		padding: 12px;
		flex: 1;
		height: 40px;
	}
	button {
		background-color: #49aeef;
		color: #fff;
		padding: 12px 25px;
		cursor: pointer;

	}
`;