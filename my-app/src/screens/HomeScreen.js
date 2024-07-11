import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Dummy data
  const entries = [
    { id: '1', title: 'First Entry', content: 'This is my first journal entry' },
    { id: '2', title: 'Second Entry', content: 'This is my second journal entry' },
  ];

  return (
    <View>
      <Button title="New Entry" onPress={() => navigation.navigate('NewEntry')} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="View"
              onPress={() => navigation.navigate('EntryDetail', { entry: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
