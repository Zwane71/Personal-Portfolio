import {
	Button,
	Flex,
	Link,
	List,
	ListItem,
	useBreakpointValue,
	useDisclosure,
	IconButton,
} from "@chakra-ui/react";
import { MenuProps } from "./Navbar";
import { HamburgerIcon } from "@chakra-ui/icons";

type RightContentProps = {
	items: MenuProps[];
};

export default function RightContent({ items }: RightContentProps) {
	const { isOpen, onToggle } = useDisclosure();

	// Determine responsive display values
	const displayList = useBreakpointValue({ base: "none", md: "flex" });
	const displayHamburger = useBreakpointValue({
		base: "flex",
		md: "flex",
		lg: "none",
		xl: "none",
	});

	return (
		<Flex
			gap={1}
			justify='center'
			direction={{ base: "column", md: "row" }} // Adjust flex direction for mobile vs desktop
			align='center'>
			{/* Hamburger Icon */}
			{displayHamburger === "flex" && (
				<IconButton
					aria-label='Open menu'
					icon={<HamburgerIcon />}
					onClick={onToggle}
					variant='outline'
					mr={2}
				/>
			)}

			{/* List of items */}
			<List
				gap={3}
				flexDirection={{ base: "column", md: "row" }} // Adjust flex direction for mobile vs desktop
				position={{ base: "absolute", md: "static" }}
				bg={{ base: "white", md: "transparent" }}
				top={{ base: "50px", md: "auto" }}
				left={{ base: "0", md: "auto" }}
				width={{ base: "100%", md: "auto" }}
				boxShadow={{ base: "0px 4px 4px rgba(0, 0, 0, 0.1)", md: "none" }}
				display={isOpen ? "flex" : displayList} // Toggle display based on menu state
			>
				{items.map((item) => (
					<ListItem key={item.label}>
						<Button
							as={Link}
							href={item.uri}
							fontSize={item.label}
							colorScheme='#5f6265' // Use a predefined color scheme or a custom one
							fontWeight={200}
							variant='ghost'
							_hover={{ textDecoration: "none", bg: "gray.50" }}
							_active={{ bg: "gray.100" }}>
							{item.label}
						</Button>
					</ListItem>
				))}
			</List>
		</Flex>
	);
}
