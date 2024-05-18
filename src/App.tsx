import { Grid, GridItem, HStack, VStack, Box } from "@chakra-ui/react";
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
  completed?: boolean;
  deleted?: boolean;
}

const headStyle = {
  fontSize: "100px",
  fontWeight: "800",
  color: "#9a9a9a",
  marginLeft: "5%", // Adjusted for smaller screens
};

function App() {
  const [data, setData] = useState<TodoData>({});
  const [cardData, setCardData] = useState<TodoData[]>([]);

  const handleChange = (key: keyof TodoData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (data.inputBar && data.todoType && data.Category && data.dateAndTime) {
      setCardData((prev) => [
        ...prev,
        { ...data, completed: false, deleted: false },
      ]);
      setData({});
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
      <h1 style={headStyle}>Stuff I need to do</h1>
      <Grid
        templateColumns={{ base: "1fr", lg: "400px 1fr" }} // Responsive layout
        gap={4}
        marginX={{ base: "1%", lg: "auto" }} // Centered on larger screens
        maxWidth="1960px"
        paddingX={4}
      >
        <GridItem>
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
            <SubmitButton handleClick={handleSubmit} />
          </VStack>
        </GridItem>
        <GridItem>
          <Box borderRadius={19} bg="#212529" minHeight="600px" padding="1px">
            <TodoCards data={cardData} setCardData={setCardData} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
