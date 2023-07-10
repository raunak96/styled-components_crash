import { styled } from "styled-components";

const Container = styled.div`
	width: 1000px;
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;
	flex: ${({ $maxspace }) => ($maxspace ? 1 : 0)};
`;

export default Container;
