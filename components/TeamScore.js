import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onAdd, onRemove }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={onAdd} />
        <Button title="-" onPress={onRemove} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    alignItems: 'center',
    width: '100%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 10,
  }
});

export default TeamScore;
