import { Input } from "@chakra-ui/react";

const InputBar = ({ onChange, name }: any) => {
  const handleChange = (e: any) => {
    onChange(name, e.target.value);
  };

  return (
    <Input
      onChange={handleChange}
      margin="10px"
      variant="filled"
      size="lg"
      width="auto"
      placeholder="Enter the Task"
    />
  );
};

export default InputBar;
