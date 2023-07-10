import Container from "@/components/styles/Container.styled";
import Header from "@/components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./GlobalStyles";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				<h1>Hello</h1>
			</Container>
		</ThemeProvider>
	);
};
export default App;
