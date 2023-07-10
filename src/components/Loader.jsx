import { styled } from "styled-components";

const Spinner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Loader = () => {
	return (
		<Spinner>
			<img src="./images/loader.svg" width={200} height={200} />
		</Spinner>
	);
};
export default Loader;
