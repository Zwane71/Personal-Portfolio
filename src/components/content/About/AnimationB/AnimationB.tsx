import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const WordSwitcher = () => {
	const words = ["Frontend Developer.", "Intermediate Coder.", "IoT Developer"];
	const [index, setIndex] = useState(0); // Keeps track of the current word
	const [typedWord, setTypedWord] = useState(""); // Holds the currently typed portion of the word
	const [isDeleting, setIsDeleting] = useState(false); // Flag to track typing or deleting state

	// Typing speed and delay
	const typingSpeed = 150; // Speed at which characters are typed
	const deletingSpeed = 100; // Speed at which characters are deleted
	const pauseDuration = 2000; // Pause between switching to the next word

	useEffect(() => {
		let typingTimeout: NodeJS.Timeout;

		if (!isDeleting && typedWord === words[index]) {
			// Pause after completing the word before starting to delete
			typingTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
		} else if (isDeleting && typedWord === "") {
			// Move to the next word after deleting
			setIsDeleting(false);
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		} else {
			// Typing or deleting characters
			typingTimeout = setTimeout(
				() => {
					const updatedWord = isDeleting
						? words[index].substring(0, typedWord.length - 1)
						: words[index].substring(0, typedWord.length + 1);

					setTypedWord(updatedWord);
				},
				isDeleting ? deletingSpeed : typingSpeed
			);
		}

		// Cleanup timeout on component unmount
		return () => clearTimeout(typingTimeout);
	}, [typedWord, isDeleting, index]);

	// Responsive font size
	const fontSize = useBreakpointValue({
		base: "32px",
		sm: "32px",
		md: "32px",
		lg: "48px",
	});

	return (
		<Box overflow='hidden' width='fit-content' ml={10} mt={6}>
			<Text fontSize={fontSize} fontWeight='bold'>
				{typedWord}
				{/* Optional blinking cursor */}
				<Box
					as='span'
					borderRight='2px solid'
					display='inline-block'
					animation='blink 0.75s step-end infinite'
				/>
			</Text>
		</Box>
	);
};

// CSS for the blinking cursor
const styles = {
	"@keyframes blink": {
		from: { borderRightColor: "black" },
		to: { borderRightColor: "transparent" },
	},
};

export default WordSwitcher;
