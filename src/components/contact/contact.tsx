import React from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	FormHelperText,
	useToast,
	Text,
} from "@chakra-ui/react";

function Contact() {
	const toast = useToast();

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);

		formData.append("access_key", "95abddb5-6fe1-49e5-8b47-86599f726d81");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			}).then((res) => res.json());

			if (res.success) {
				toast({
					title: "Success",
					description: "Your message has been sent.",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
			} else {
				toast({
					title: "Error",
					description: "There was an issue sending your message.",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "There was an error sending your message.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	return (
		<div>
			<Text m={"auto"} textAlign={"center"}>
				{" "}
				Contact Me{" "}
			</Text>
			<Box
				bg={"#f0f3f5"}
				boxShadow={"xl"}
				w={500}
				mb={32}
				mx='auto'
				p={4}
				outline={1}>
				<form onSubmit={onSubmit}>
					<FormControl isRequired mb={4}>
						<FormLabel>Name</FormLabel>
						<Input
							type='text'
							name='name'
							placeholder='Your name'
							variant='outline'
							borderColor='gray.300'
							_focus={{ borderColor: "teal.500" }}
						/>
						<FormHelperText>Enter your full name.</FormHelperText>
					</FormControl>

					<FormControl isRequired mb={4}>
						<FormLabel>Email address</FormLabel>
						<Input
							type='email'
							name='email'
							placeholder='Your email address'
							variant='outline'
							borderColor='gray.300'
							_focus={{ borderColor: "teal.500" }}
						/>
						<FormHelperText>We'll never share your email.</FormHelperText>
					</FormControl>

					<FormControl isRequired mb={4}>
						<FormLabel>Message</FormLabel>
						<Textarea
							name='message'
							placeholder='Your message'
							variant='outline'
							borderColor='gray.300'
							_focus={{ borderColor: "teal.500" }}
						/>
						<FormHelperText>Enter your message here.</FormHelperText>
					</FormControl>

					<Button colorScheme='teal' type='submit'>
						Submit Form
					</Button>
				</form>
			</Box>
		</div>
	);
}

export default Contact;
