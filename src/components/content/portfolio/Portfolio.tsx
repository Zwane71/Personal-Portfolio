import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomBackground from "./CustomBackground";

const Portfolio = () => {
	return (
		<div>
			<Flex mt={7} bg={"#ecf0f3"} p={32}>
				<Flex flexDirection={"column"}>
					<Text
						textAlign={"center"}
						color={"#f96392"}
						fontSize={16}
						fontWeight={500}>
						VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
					</Text>
					<Text mt={10} fontWeight={600} fontSize={36}>
						My Portfolio
					</Text>
					<Flex
						flexDirection={{ base: "column", md: "row" }} // Responsive direction
						gap={4} // Adjust the gap between items
					>
						<CustomBackground
							title='Crpto Tracking-app'
							description='It is a crypto managing app'
							url='https://bit-tracker-f6xd.vercel.app/'
						/>
						<CustomBackground
							title='Agrivista'
							description='It is a landing page of an agricultural culture'
							url='https://agrivista.vercel.app/'
						/>
						<CustomBackground
							title='Imagen-Wall-Art'
							description='It is a page in progress for a business that offers printing, branding, and many more services'
							url='https://imagen-wall-art.vercel.app/'
						/>
					</Flex>
				</Flex>
			</Flex>
		</div>
	);
};

export default Portfolio;
