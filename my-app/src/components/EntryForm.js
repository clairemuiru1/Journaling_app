import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const EntryForm = ({ onSubmit, initialValues = { title: '', content: '' } }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
      <Button title="Save" onPress={() => onSubmit({ title, content })} />
    </View>
  );
};

export default EntryForm;
