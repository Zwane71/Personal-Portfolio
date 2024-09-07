import * as React from "react";

import Navbar from "./components/navbar/Navbar";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";

import Portfolio from "./components/content/portfolio/Portfolio";
import Skill from "./components/content/skill/Skill";
import About from "./components/content/About/About";
import Contact from "./components/contact/contact";

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#ecf0f3",
	},
};

const theme = extendTheme({ colors });

export const App = () => (
	<ChakraProvider theme={theme}>
		<Flex bg='#ecf0f3' flexDirection='column'>
			<Navbar />
			<section id='home'>
				{/* Home content */}
				<About />
			</section>

			<section id='skill'>
				<Skill />
			</section>
			{/* <section id='experience'>
				<Experience />
			</section> */}

			<section id='portfolio'>
				<Portfolio />
			</section>
			<section id='contact'>
				<Contact />
			</section>
		</Flex>
	</ChakraProvider>
);
