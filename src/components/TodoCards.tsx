import { Card, CardBody, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const TodoCards = ({ data, setCardData }: any) => {
  const handleClick = (index: number) => {
    setCardData((prevData: any) =>
      prevData.map((item: any, i: number) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const handleDeleteClick = (index: number) => {
    setCardData(
      (prevData: any) => prevData.filter((_: any, i: number) => i !== index) // so this logic will provide us the new array that is not equal to the index which we were passing as an argument
    );
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      setCardData((prevData: any) => {
        const newData = [...prevData];
        [newData[index], newData[index - 1]] = [
          newData[index - 1],
          newData[index],
        ];
        return newData;
      });
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < data.length - 1) {
      setCardData((prevData: any) => {
        const newData = [...prevData];
        [newData[index], newData[index + 1]] = [
          newData[index + 1],
          newData[index],
        ];
        return newData;
      });
    }
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
          borderRadius={16}
        >
          <CardBody>
            <HStack justifyContent="space-between">
              <VStack alignItems="flex-start">
                <Text
                  textDecoration={item.completed ? "line-through" : "none"}
                  color="#cccccc"
                  fontWeight="bold"
                  fontSize={33}
                >
                  {item.inputBar}
                </Text>
                <HStack gap={3}>
                  <Text fontSize={15} color="#fbff12">
                    #{item.todoType}
                  </Text>
                  <Text fontSize={14} color="#ff206e">
                    #{item.Category}
                  </Text>
                  <Text fontSize={12} color="#41ead4">
                    #{item.dateAndTime}
                  </Text>
                </HStack>
              </VStack>
              <HStack>
                <VStack>
                  <Button
                    onClick={() => handleMoveUp(index)}
                    isDisabled={index === 0}
                  >
                    <ArrowUpIcon />
                  </Button>
                  <Button
                    onClick={() => handleMoveDown(index)}
                    isDisabled={index === data.length - 1}
                  >
                    <ArrowDownIcon />
                  </Button>
                </VStack>
                <VStack>
                  <Button onClick={() => handleClick(index)} width="100px">
                    {item.completed ? "Undo" : "Complete"}
                  </Button>
                  <Button
                    onClick={() => handleDeleteClick(index)}
                    width="100px"
                  >
                    Delete
                  </Button>
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
