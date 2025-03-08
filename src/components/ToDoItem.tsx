import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../types';
import ToDoEdit from './ToDoEdit';

interface ToDoItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, text: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return (
      <ToDoEdit todo={todo} setIsEdit={setIsEdit} onEditTodo={onEditTodo} />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.todoText}
        onPress={() => onToggleTodo(todo?.id)}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo?.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          disabled={todo?.completed}
          onPress={() => setIsEdit(true)}>
          <Text style={styles.editBtn}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeleteTodo(todo?.id)}>
          <Text style={styles.deleteBtn}>Delete</Text>
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
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
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

export default ToDoItem;
