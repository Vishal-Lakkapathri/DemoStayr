import React, { useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
// @ts-ignore
import { NavigationState, NavigationScreenProp } from "react-navigation";
// @ts-ignore
import renderIf from "render-if";

import { HomeLogo } from "./components/Logo";
import { Fields, ErrorBox } from "./components/Fields";
import { Button } from "./components/LoginButton";

import { validateEmail, validatePassword, mockCredentials } from "./helpers";

import styles from "./styles";

interface LoginScreenProps {
	navigation: NavigationScreenProp<NavigationState>;
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
	const [userName, setUserName] = useState("" as string);
	const [password, setPassword] = useState("" as string);
	const [isError, setError] = useState(false as boolean);

	const handleOnChange = (text: string, inputType: string) => {
		if (inputType === "userName") setUserName(text);
		if (inputType === "password") setPassword(text);
		setError(false);
	};

	const handleOnPress = () => {
		if (!(validateEmail(userName) && validatePassword(password))) {
			setError(true);
		} else navigation.navigate("Home");
	};

	const renderIfError = renderIf(isError);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<HomeLogo />
			<Fields onChangeText={handleOnChange} />
			{renderIfError(
				<View style={{ alignItems: "center", paddingBottom: 10 }}>
					<ErrorBox message="Please enter valid credentials" />
				</View>
			)}
			<Button
				title="Login"
				onPress={handleOnPress}
				disabled={!(userName && password)}
			/>
		</SafeAreaView>
	);
};
