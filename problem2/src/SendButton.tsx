import React from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
	VStack,
	Text,
} from "@chakra-ui/react";

type SendButtonProps = {
	address: string;
	isValid: boolean;
};

const SendButton = ({ isValid, address }: SendButtonProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	return (
		<>
			<Button
				type="submit"
				colorScheme="purple"
				onClick={() => {
					if (isValid) {
						onOpen();
					}
				}}
				isFullWidth
			>
				Send
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef as any}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Send tokens
						</AlertDialogHeader>

						<AlertDialogBody>
							<VStack>
								<>
									Are you sure you want to send to this address? You can't undo
									this action afterwards.
								</>
								<>
									<Text size={"md"}>
										<b>Address: </b>
										<u>{address}</u>
									</Text>
								</>
							</VStack>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef as any} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="green" onClick={onClose} ml={3}>
								Proceed
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default SendButton;
