import Container from "@/components/styles/Container.styled";
import Header from "@/components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./GlobalStyles";
import { useEffect, useState } from "react";
import data from "./data";
import Loader from "./components/Loader";
import Card from "./components/Card";
import Footer from "./components/Footer";

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
					content.map(item => <Card key={item.id} item={item} />)
				) : (
					<Loader />
				)}
			</Container>
			<Footer />
		</ThemeProvider>
	);
};
export default App;
