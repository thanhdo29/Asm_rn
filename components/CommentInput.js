import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Text } from 'react-native';

const CommentInput = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nhập bình luận của bạn"
        value={comment}
        onChangeText={(txt)=>{setComment(txt)}}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleCommentSubmit}>
        <Text style={styles.buttonText}>Gửi</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CommentInput;
