import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Todo} from '../types';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, text: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  todoList,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      {todoList?.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
  },
});

export default ToDoList;
