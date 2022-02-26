import { Heading } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {
  Stack,
  HStack,
  VStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const [todos, settodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(newTodos);
  }

  function addTodo(todo) {
    settodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={8}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      ></IconButton>{" "}
      <Heading
        mb={4}
        padding="3"
        size="2xl"
        fontWeight="extrabold"
        bgGradient="linear-gradient(90deg, rgba(36,0,0,1) 0%,
        rgba(40, 179, 39, 0.5441526952577906) 55 % ,
        rgba(29, 183, 195, 1) 100 % )
    "
        bgClip="text"
      >
        Todo Aplication{" "}
      </Heading>{" "}
      <TodoList todos={todos} deleteTodo={deleteTodo} />{" "}
      <AddTodo addTodo={addTodo} />{" "}
    </VStack>
  );
}
export default App;
