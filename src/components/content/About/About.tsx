import { extendTheme, Flex, Text, ThemeProvider } from "@chakra-ui/react";
import React from "react";
import Font from "./Font";
import AnimationB from "./AnimationB/AnimationB";

const theme = extendTheme({
	fontSizes: {
		base: "32px",
		sm: "32px",
		md: "32px",
		lg: "48px",
	},
});

const About = () => {
	return (
		<div>
			<Flex mx={12} mt={40}>
				<Flex style={{ display: "flex", flexDirection: "column" }}>
					<Text ml={10} fontWeight={500} fontSize={20} letterSpacing={3}>
						Welcome to my World{" "}
					</Text>

					<ThemeProvider theme={theme}>
						<Text
							style={{ display: "flex" }}
							ml={5}
							mt={6}
							fontSize={{ base: "base", sm: "sm", md: "md", lg: "lg" }}
							fontWeight='600'>
							Hi, I am{"  "}
							<Font />
						</Text>
						<Flex flexDirection='row'>
							<Text
								ml={5}
								mt={6}
								fontSize={{ base: "base", sm: "sm", md: "md", lg: "lg" }}
								fontWeight='600'>
								{" "}
								a
							</Text>
							<AnimationB />
						</Flex>
					</ThemeProvider>

					<Text ml={5} mt={5} fontSize={16} fontWeight={400} color='#4d4f52'>
						I’m Themba Makhohlisa, a Frontend Developer, Intermediate Coder, and
						IoT Developer with <br />
						nearly a year of experience. I enjoy creating user-friendly websites
						and working on exciting IoT projects. <br />
						I'm always learning new things to improve my skills and stay updated
						with the latest technology.
					</Text>

					<Text ml={5} mt={20} fontSize={20} fontWeight={500} letterSpacing={2}>
						{" "}
						Find Me With the
					</Text>
				</Flex>
			</Flex>
		</div>
	);
};

export default About;
