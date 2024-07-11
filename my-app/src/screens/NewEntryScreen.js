import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const NewEntryScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // Save the new entry (this is where you would add the logic to save to your backend or local storage)
    navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default NewEntryScreen;
