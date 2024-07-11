import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const EntryCard = ({ entry, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{entry.title}</Text>
        <Text>{entry.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EntryCard;
