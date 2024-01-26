import styled from 'styled-components'


export const Button = styled.button`
	height: 50px;
	padding: 0 45px;
    font-size: 1.2em;
    text-transform: uppercase;
	font-weight: bold;
	border-radius: 25px;
	background: #1646a0;
	border: 2px solid #fff;
    transition: .4s;

	&:hover {
		background-color: #0923af;
		cursor: pointer;
	}
`;
