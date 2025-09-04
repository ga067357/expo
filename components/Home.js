import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Ir para Produto"
                onPress={() => navigation.navigate('Produto')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});