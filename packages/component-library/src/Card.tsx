import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.card}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10, margin: 10 },
});