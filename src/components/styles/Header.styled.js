import { styled } from "styled-components";

export const StyledHeader = styled.header`
	background-color: ${props => props.theme.colors.header};
	padding: 40px 0;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;

	@media (max-width: ${({ theme }) => theme.screen.mobile}) {
		flex-direction: column;
		gap: 4rem;
	}
`;

export const Logo = styled.img``;

export const Image = styled.img`
	width: 375px;
	margin-left: 40px;

	@media (max-width: ${({ theme }) => theme.screen.mobile}) {
		margin: 40px 0 30px;
	}
`;
