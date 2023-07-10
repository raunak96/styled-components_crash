import Container from "@/components/styles/Container.styled";
import Header from "@/components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./GlobalStyles";
import { useEffect, useState } from "react";
import data from "./data";
import Loader from "./components/Loader";

const App = () => {
	const [content, setContent] = useState([]);

	useEffect(() => {
		const getContent = async () => {
			const res = await new Promise(resolve => {
				setTimeout(() => resolve(data), 2000);
			});
			setContent(res);
		};
		getContent();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container $maxspace={true}>
				{content.length ? (
					content.map(item => <p key={item.id}>{item.title}</p>)
				) : (
					<Loader />
				)}
			</Container>
		</ThemeProvider>
	);
};
export default App;
