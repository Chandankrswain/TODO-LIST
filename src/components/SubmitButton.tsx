import { Button } from "@chakra-ui/react";

const SubmitButton = ({ handleClick }: any) => {
  return (
    <>
      <Button
        onClick={handleClick}
        width="100px"
        margin="10px"
        colorScheme="green"
      >
        Submit
      </Button>
    </>
  );
};

export default SubmitButton;
