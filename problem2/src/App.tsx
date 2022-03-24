import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	VStack,
	ChakraProvider,
	theme,
	Heading,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useState } from "react";
import { isAddress } from "web3-utils";
import SendButton from "./SendButton";
export const App = () => {
	const [isTouched, setIsTouched] = useState<boolean>(false);
	return (
		<ChakraProvider theme={theme}>
			<Flex
				bg="white"
				flexDir="column"
				align="center"
				justify="center"
				minW={[300, 450, 600, 800]}
			>
				<VStack mt={100} bg="grey.100" h="100vh" minW={[300, 400, 500, 600]}>
					<Heading>Fancy Form</Heading>
					<Box bg="white" p={6} rounded="md">
						<Formik
							initialValues={{
								address: "",
								amount: "",
								otp: "",
							}}
							onSubmit={(values) => {}}
						>
							{({ handleSubmit, errors, touched, values }) => (
								<form onSubmit={handleSubmit}>
									<VStack spacing={4} align="flex-start">
										<FormControl
											isInvalid={!!errors.address!! && touched.address}
										>
											<FormLabel htmlFor="input-address">ETH Address</FormLabel>
											<Field
												as={Input}
												id="input-address"
												name="address"
												type="text"
												variant="filled"
												validate={(value: string) => {
													setIsTouched(true);
													let error;
													if (!isAddress(value)) {
														error = "Enter a valid Ethereum address";
													}
													return error;
												}}
											/>
											<FormErrorMessage>{errors.address}</FormErrorMessage>
										</FormControl>
										<FormControl
											isInvalid={!!errors.amount!! && touched.amount}
										>
											<FormLabel htmlFor="input-amount">Amount</FormLabel>
											<Field
												as={Input}
												id="input-amount"
												name="amount"
												type="number"
												variant="filled"
												validate={(value: number) => {
													setIsTouched(true);
													let error;
													if (value <= 0) {
														error = "Enter a valid amount";
													}
													return error;
												}}
											/>
											<FormErrorMessage>{errors.amount}</FormErrorMessage>
										</FormControl>
										<FormControl isInvalid={!!errors.otp!! && touched.otp}>
											<FormLabel htmlFor="input-otp">OTP</FormLabel>
											<Field
												as={Input}
												id="intput-otp"
												name="otp"
												type="number"
												variant="filled"
												validate={(value: number) => {
													setIsTouched(true);
													let error;
													if (value.toString().length !== 6 || value < 0) {
														error = "Enter a valid OTP";
													}
													return error;
												}}
											/>
											<FormErrorMessage>{errors.otp}</FormErrorMessage>
										</FormControl>
										<SendButton
											isValid={
												isTouched
													? !errors.address && !errors.amount && !errors.otp
													: false
											}
											address={values.address}
										/>
									</VStack>
								</form>
							)}
						</Formik>
					</Box>
				</VStack>
			</Flex>
			{/* <form onSubmit={() => "return 1"}>
					<label htmlFor="input-address">ETH Address</label>
					<input id="input-address" />

					<label htmlFor="input-amount">Amount to send</label>
					<input id="input-amount" />

					<label htmlFor="input-otp">OTP Authentication</label>
					<input type="number" id="input-otp" />

					<button>SEND TOKENS</button>
				</form> */}
		</ChakraProvider>
	);
};
