import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomBackground from "./CustomBackground";
import { extendTheme, ThemeProvider } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
	base: "0px",
	sm: "320px",
	md: "768px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const Skill = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Flex flexDirection='column'>
					<Text
						ml={44}
						mt={16}
						fontSize={20}
						fontWeight={400}
						letterSpacing={2}
						color='#ff014f'>
						Skills
					</Text>
					<Text ml={44} fontSize={40} fontWeight={600}>
						{" "}
						What I do{" "}
					</Text>
					<Flex
						flexDirection={{ base: "column", md: "row" }}
						gap={4} // optional, adjust the spacing between items
					>
						<CustomBackground
							icon={undefined}
							title='Frontend Developer'
							description='HTML/HTML5, Javascript, Reactjs, Responsive Design'
						/>
						<CustomBackground
							icon={undefined}
							title='Intermediate Developer'
							description='Problem-Solving, Code Optimization, Programming Languages'
						/>
						<CustomBackground
							icon={undefined}
							title='IoT Developer'
							description='Embedded Systems, IoT Protocols, Data Management, Integration'
						/>
					</Flex>
				</Flex>
			</div>
		</ThemeProvider>
	);
};

export default Skill;
