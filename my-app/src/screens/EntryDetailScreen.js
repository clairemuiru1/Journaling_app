import React from 'react';
import { View, Text } from 'react-native';

const EntryDetailScreen = ({ route }) => {
  const { entry } = route.params;

  return (
    <View>
      <Text>{entry.title}</Text>
      <Text>{entry.content}</Text>
    </View>
  );
};

export default EntryDetailScreen;
