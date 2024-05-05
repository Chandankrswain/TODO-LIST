import { Card, CardBody, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import Category from "./Category";

interface Props {}

const TodoCards = () => {
  return (
    <>
      <Card margin={3} bgColor="#333333">
        <CardBody>
          <HStack justifyContent="space-between">
            <VStack alignItems="flex-start">
              <Text color="grey" fontSize={25}>
                Going to study at the library
              </Text>
              <HStack>
                <Text color="grey"># Lifestyle</Text>
                <Text color="grey"># Home</Text>
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
    </>
  );
};

export default TodoCards;
