import { Card, CardBody, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const TodoCards = ({ data, setCardData }: any) => {
  const handleClick = (index: number) => {
    setCardData((prevData: any) =>
      prevData.map((item: any, i: number) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      {data.map((item: any, index: any) => (
        <Card
          key={index}
          margin={3}
          bgColor="#333333"
          border="2px solid"
          borderColor={item.completed ? "#B5E550" : "transparent"}
          borderRadius={15}
        >
          <CardBody>
            <HStack justifyContent="space-between">
              <VStack alignItems="flex-start">
                <Text
                  textDecoration={item.completed ? "line-through" : "none"}
                  color="#cccccc"
                  fontWeight="bold"
                  fontSize={32}
                >
                  {item.inputBar}
                </Text>
                <HStack>
                  <Text fontSize={15} color="#fbff12">
                    #{item.todoType}
                  </Text>
                  <Text fontSize={15} color="#ff206e">
                    #{item.Category}
                  </Text>
                  <Text fontSize={15} color="#41ead4">
                    #{item.dateAndTime}
                  </Text>
                </HStack>
              </VStack>
              <HStack>
                <VStack>
                  <Button>
                    <ArrowUpIcon />
                  </Button>
                  <Button>
                    <ArrowDownIcon />
                  </Button>
                </VStack>
                <VStack>
                  <Button onClick={() => handleClick(index)} width="100px">
                    {item.completed ? "Undo" : "Complete"}
                  </Button>
                  <Button width="100px">Delete</Button>
                </VStack>
              </HStack>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default TodoCards;
