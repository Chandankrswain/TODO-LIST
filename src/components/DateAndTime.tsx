import { Input } from "@chakra-ui/react";

const DateAndTime = ({ onChange, name }: any) => {
  const handleChange = (e: any) => {
    onChange(name, e.target.value);
  };

  return (
    <>
      <Input
        onChange={handleChange}
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
