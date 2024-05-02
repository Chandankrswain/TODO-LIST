import { Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import InputBar from "./components/InputBar";
import TodoTypeMenu from "./components/TodoTypeMenu";
import DateAndTime from "./components/DateAndTime";
import Category from "./components/Category";
import SubmitButton from "./components/SubmitButton";

const headStyle = {
  fontSize: "100px",
  fontWeight: "800",
  color: "#9a9a9a",
  marginLeft: "190px",
};

function App() {
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
            <InputBar />
            <HStack margin="0px 10px 10px 10px">
              <TodoTypeMenu />
              <Category />
            </HStack>
            <DateAndTime />
            <VStack alignItems="end">
              <SubmitButton />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem width="100%" bg="#212529"></GridItem>
      </Grid>
    </>
  );
}

export default App;
