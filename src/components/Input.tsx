import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface InputProps {
  onAddTodo: (text: string) => void;
}

const Input: React.FC<InputProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text?.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a todo"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Input;
