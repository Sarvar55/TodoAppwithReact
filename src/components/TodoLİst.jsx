import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
export default function TodoList({ todos, deleteTodo }) {

    if(!todos.length){
        return(
            <Badge p={4} borderRadius="lg" colorScheme="cyan">
                NO Todos Hey!!!
            </Badge>
        )
    }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.300"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="40%"
      maxW={{ base: "90wv", sm: "80wv", lg: "50wv", xl: "40wv" }}
      alignItems="stretch"
    >
      {todos.map((item) => (
        <HStack key={item.id}>
          <Text>{item.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(item.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
}
