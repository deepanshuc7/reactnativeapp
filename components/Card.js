import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions  } from 'react-native';

const Card = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 6,
    overflow: 'hidden',
    // width: "100%",
    width: width - 32,
    alignSelf: 'center',
     color: '#fff'
  },
  content: {
    padding: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaa',
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 4,
  },
});

export default Card;
