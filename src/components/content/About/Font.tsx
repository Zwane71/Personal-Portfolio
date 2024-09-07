import { Text, ThemeProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

// 2. Define custom font sizes in the theme
const theme = extendTheme({
	fontSizes: {
		base: "32px",
		sm: "32px",
		md: "32px",
		lg: "48px",
	},
});

const Font = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Text
					ml={4}
					fontWeight='600'
					color='#ff014f'
					fontSize={{ base: "base", sm: "sm", md: "md", lg: "lg" }}>
					{"  "}Themba Makhohlisa
				</Text>
			</div>
		</ThemeProvider>
	);
};

export default Font;
