import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { React, useState } from "react";
import { nanoid } from "nanoid";

export default function AddTodo({ addTodo }) {
  const toast = useToast();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!content) errorMessage();
    else {
      const todo = {
        id: nanoid(),
        body: content,
      };

      addTodo(todo);
      setContent("");
    }
  };

  function errorMessage() {
    return toast({
      title: "No content",
      description: "Place Enter something in the input",
      status: "error",  
      duration: 1000,
      isClosable: true,
    });
  }

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          variant="filled"
          placeholder="Add your todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          color="azure"
          px={8}
          type="submit"
          colorScheme="whatsapp"
          onClick={(e) => handleSubmit(e)}
        >
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}
