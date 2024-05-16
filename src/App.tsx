import { Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import InputBar from "./components/InputBar";
import TodoTypeMenu from "./components/TodoTypeMenu";
import DateAndTime from "./components/DateAndTime";
import Category from "./components/Category";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";
import TodoCards from "./components/TodoCards";

interface TodoData {
  inputBar?: string;
  todoType?: string;
  Category?: string;
  dateAndTime?: string;
}

const headStyle = {
  fontSize: "100px",
  fontWeight: "800",
  color: "#9a9a9a",
  marginLeft: "190px",
};

function App() {
  const [data, setData] = useState<TodoData>({});
  const [cardData, setCardData] = useState<TodoData[]>([]);

  const handleChange = (key: keyof TodoData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setCardData((prev) => [...prev, data]);
    setData({}); // Clear the form data after submission
  };

  return (
    <>
      <h1 style={headStyle}>Stuff I need to do</h1>
      <Grid
        marginLeft="10%"
        marginTop="10px"
        h="600px"
        width="80%"
        templateColumns="400px 1fr"
      >
        <GridItem justifyContent="center" width="400px" bg="#212529">
          <VStack alignItems="right">
            <InputBar name={"inputBar"} onChange={handleChange} />
            <HStack margin="0px 10px 10px 10px">
              <TodoTypeMenu
                onChange={handleChange}
                name={"todoType"}
                myTodoType={[
                  "Hobby",
                  "Personal",
                  "Lifestyle",
                  "Basics",
                  "No list",
                ]}
              />
              <Category
                onChange={handleChange}
                name={"Category"}
                myCategory={["Home", "Work", "Others"]}
              />
            </HStack>
            <DateAndTime name={"dateAndTime"} onChange={handleChange} />
            <VStack alignItems="end">
              <SubmitButton handleClick={handleSubmit} />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem width="100%" bg="#212529">
          <TodoCards data={cardData} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
