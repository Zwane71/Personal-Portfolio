import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

interface CustomBackgroundProps {
	icon?: string; // URL for the icon image, can be undefined
	title?: string; // Title text, can be undefined
	description?: string; // Description text, can be undefined
}

const CustomBackground: React.FC<CustomBackgroundProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<Flex
			direction='column'
			align='center'
			justify='center'
			backgroundColor='#e7ecf0' // Default background color
			_hover={{
				backgroundColor: "linear-gradient(45deg, #ff0000, #ff7f7f)", // Red background on hover
			}}
			p={5}
			borderRadius='md'
			boxShadow='xl'
			minHeight='200px'
			ml={20}
			w={256}
			textAlign='center'
			transition='background-color 0.3s ease' // Smooth transition
		>
			{icon && (
				<Box mb={4}>
					<Image src={icon} alt='icon' boxSize='50px' />
				</Box>
			)}
			{title && (
				<Text fontSize='xl' fontWeight='bold' mb={2}>
					{title}
				</Text>
			)}
			{description && (
				<Text fontSize='20' color='gray.600'>
					{description}
				</Text>
			)}
		</Flex>
	);
};

export default CustomBackground;
