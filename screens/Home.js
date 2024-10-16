import { View, Text } from "react-native"
import React from "react"
import { useTheme } from "../context/useTheme"
import styles from "../styles"

export default function Home() {
    const {isDarkMode} = useTheme()
    console.log(isDarkMode)
    return (
        <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
            <Text style={isDarkMode ? styles.dark : styles.light}>Home screen</Text>
        </View>
    )
}