/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from './src/components/Input';
import {Todo} from './src/types';
import ToDoList from './src/components/ToDoList';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const onDeleteTodo = (id: string) => {
    const newTodoList = todoList?.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onToggleTodo = (id: string) => {
    setTodoList(pre =>
      pre?.map(todo =>
        todo?.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const onEditTodo = (id: string, text: string) => {
    setTodoList(pre =>
      pre?.map(todo =>
        todo?.id === id
          ? {
              ...todo,
              text,
            }
          : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To Do App</Text>
      <Input onAddTodo={addTodo} />
      <ToDoList
        todoList={todoList}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onEditTodo={onEditTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
