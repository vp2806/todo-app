import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Todo} from '../types';

interface ToDoEditProps {
  todo: Todo;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onEditTodo: (id: string, text: string) => void;
}

const ToDoEdit: React.FC<ToDoEditProps> = ({todo, setIsEdit, onEditTodo}) => {
  const [text, setText] = useState(todo?.text);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          disabled={todo?.completed}
          onPress={() => {
            onEditTodo(todo?.id, text);
            setIsEdit(false);
          }}>
          <Text style={styles.editBtn}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsEdit(false);
          }}>
          <Text style={styles.deleteBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  editBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'white',
  },
  deleteBtn: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'white',
  },
});

export default ToDoEdit;
