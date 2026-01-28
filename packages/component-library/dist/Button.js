import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export const Button = ({ title, onPress }) => (<TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>);
const styles = StyleSheet.create({
    button: { padding: 10, backgroundColor: 'blue', borderRadius: 5 },
    text: { color: 'white', textAlign: 'center' },
});
