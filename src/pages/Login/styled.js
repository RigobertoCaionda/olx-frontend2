import styled from 'styled-components';

export const PageContainer = styled.div`
	width: 1000px;
	margin: auto;
	padding-bottom: 15px;
	form {
		box-shadow: 0px 0px 3px #999;
		padding: 25px;
		border-radius: 5px;
		background-color: #fff;
		.area {
			max-width: 500px;
			label {
				display: flex;
				align-items: center;
				.area--title {
					margin-right: 15px;
					width: 200px;
					font-size: 0.9rem;
					font-weight: bold;
					text-align: right;
				}
				.area--input {
					flex: 1;
					margin-bottom: 10px;
					input {
						width: 100%;
						padding: 5px;
						border:1px solid #ddd;
						font-size: 14px;
						border-radius:3px;
						outline:0;
						transtion: all ease .4s;
						&:focus {
							border:1px solid #333;
							color:#333;
						}
					}
					button {
						background-color: #0089ff;
						border:0;
						outline:0;
						padding:5px 10px;
						border-radius:4px;
						color:#fff;
						font-size:15px;
						cursor:pointer;
						&:hover {
							background-color:#006fce;
						}
					}
				}
			}
		}
	}
`;