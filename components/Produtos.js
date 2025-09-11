import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function Produto() {
    return (
        <View style={styles.container}>
            <Text>Produto Screen</Text>
            <Button
                title="Ir para Home"
                onPress={() => navigation.navigate('Home')}
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
