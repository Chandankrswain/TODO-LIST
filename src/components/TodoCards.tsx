import { Card, CardBody, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import DateAndTime from "./DateAndTime";

const TodoCards = ({ data }: any) => {
  return (
    <>
      {data.map((item: any, index: any) => (
        <Card margin={3} bgColor="#333333">
          <CardBody>
            <HStack justifyContent="space-between">
              <VStack alignItems="flex-start">
                <Text color="grey" fontSize={25}>
                  {item.inputBar}
                </Text>
                <HStack>
                  <Text color="grey">{item.todoType}</Text>
                  <Text color="grey">{item.Category}</Text>
                  <Text color="grey">{item.dateAndTime}</Text>
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
                  <Button width="100px">Complete</Button>
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
