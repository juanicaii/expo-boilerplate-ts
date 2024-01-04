import { Dimensions, Text } from "react-native";
import React from "react";
import tw from "../config/tw";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<Text>Hello Boilerplate</Text>
		</SafeAreaView>
	);
}
