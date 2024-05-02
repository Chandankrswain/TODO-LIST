import { Input } from "@chakra-ui/react";

const DateAndTime = () => {
  return (
    <>
      <Input
        margin="0px 10px "
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        width="auto"
      />
    </>
  );
};

export default DateAndTime;
