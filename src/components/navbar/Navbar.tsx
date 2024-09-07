import React from "react";
import RightContent from "./RightContain";
import LeftContent from "./LeftContain";
import { Flex } from "@chakra-ui/react";

export interface MenuProps {
	label: string;
	uri: string;
}

const menuItems: MenuProps[] = [
	{ label: "Home", uri: "#home" },
	{ label: "Portfolio", uri: "#portfolio" },
	{ label: "Skill", uri: "#skill" },
	// { label: "Experience", uri: "#experience" },
	{ label: "Contact", uri: "#contact" },
	// More items...
];

export default function Navbar() {
	return (
		<nav>
			<Flex
				justify='space-between'
				align='center'
				bg='#ecf0f3'
				boxShadow='xl'
				position='sticky'
				top={0}
				p={3}>
				<LeftContent />
				{/* Other Navbar content */}
				<RightContent items={menuItems} />
			</Flex>
		</nav>
	);
}
