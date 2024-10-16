import {View, Text} from 'react-native'
import React from 'react'
import { useTheme } from '../context/useTheme'
import styles from '../styles'
import ThemeSwitchButton from '../components/ThemeSwitchButton'

export default function Settings() {
    const {isDarkMode} = useTheme()
    return (
        <View style={[styles.buttoncontainer, isDarkMode ? styles.dark : styles.light]}>
            <Text style={isDarkMode ? styles.dark : styles.light}>Switch theme</Text>
            <ThemeSwitchButton />
        </View>
    )
}