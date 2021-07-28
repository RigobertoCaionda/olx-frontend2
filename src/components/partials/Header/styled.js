import styled from 'styled-components';

export const HeaderArea = styled.header`
	height: 70px;
	background-color: #fff;
`;
export const PageContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	margin:auto;
	height: 100%;
	a {
		text-decoration: none;
	}
	.logo {
		font-size: 27px;
		font-weight: bold;
		.logo-1 {
			color: red;
		}
		.logo-2 {
			color: #00ff00;
		}
		.logo-3 {
			color: #0000ff;
		}
	}
	.menu nav ul {
		display: flex;
		align-items: center;
		list-style: none;
		button {
			border: 0;
			background: none;
			cursor: pointer;
			&:hover {
				color: #999999;
			}
		}
		li {
			margin-right: 50px;
		}
		.post-an-ad {
			background-color: #ff8100;
			padding: 5px 10px;
			border-radius: 5px;
			&:hover {
				background-color: #e57706;
			}
			a {
				color: #fff;
				&:hover {
					color: #fff;
				}
			}
		}
	}
	.menu nav ul li a{
		font-size: 0.9rem;
		color: #000;
		text-decoration: none;
		&:hover {
			color: #999999;
		}
	}
`;