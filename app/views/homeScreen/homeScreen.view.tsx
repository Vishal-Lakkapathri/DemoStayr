import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import { ViewHeader } from "./components/ViewHeader";
import { ItemSeparator } from "./components/ItemSeparator";
import { RowItem } from "./components/RowItem";

import { getCharactersService } from "./homeScreen.services";

import resultsType from "./homeScreen.types";

export const HomeScreen = () => {
	const [charachtersList, setCharacters] = useState([] as Array<resultsType>);

	const getCharachtersList = () => {
		getCharactersService()
			.then((results: Array<resultsType>) => setCharacters(results))
			.catch((error) => console.log("Error from getCharactersService", error));
	};

	useEffect(() => {
		getCharachtersList();
	}, []);

	const renderItem = ({ item }: { item: resultsType }) => {
		const { title, height, mass, gender, birth_year: birthYear } = item;
		return (
			<RowItem
				name={title}
				height={height}
				mass={mass}
				gender={gender}
				birthYear={birthYear}
			/>
		);
	};

	const totalActiveUsers: number = charachtersList.length;
	return (
		<View style={styles.container}>
			<ViewHeader title={`Total Active Users: ${totalActiveUsers}`} />
			<FlatList
				data={charachtersList}
				renderItem={renderItem}
				ItemSeparatorComponent={() => <ItemSeparator />}
				keyExtractor={(item: resultsType) => item.id.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
