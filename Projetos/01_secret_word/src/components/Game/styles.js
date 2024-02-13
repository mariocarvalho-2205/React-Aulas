import styled from "styled-components";

export const Game = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const H1 = styled.h1`
	font-size: 2.5em;
`;

export const PointsSpan = styled.span`
	font-weight: bold;
`;

export const TipSpan = styled.span`
	color: #ecfa00;
`;

export const WordContainer = styled.div`
	margin: 1.5em;
	padding: 1.5em;
	border: 20px solid #ecfa00;
	display: flex;

	.letter, .blankSquare  {
		font-size: 70px;
        line-height: 1.5;
        border: 3px solid #000;
        width: 100px;
        height: 100px;
        text-transform: uppercase;
        text-align: center;
        background: #fff;
        color: #000;
        font-weight: bold;
	}
`;

export const LetterContainer = styled.div`
    p {
        margin-bottom: 1.2em;
    }
    form {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        height: 50px;
        width: 50px;
        font-size: 2em;
        text-align: center;
        margin-right: 1em;
        color: #000;
    }
`;

export const WrongContainer = styled.div`
    margin: 1em;

    p {
        margin-bottom: 1.2em;
    }
`;
