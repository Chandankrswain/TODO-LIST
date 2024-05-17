import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  myTodoType: string[];
  onChange: (name: any, type: any) => void;
  name: string;
}

const TodoTypeMenu = ({ myTodoType, onChange, name }: Props) => {
  const [todoType, setselectedTodoType] = useState("");

  const handleClick = (type: any) => {
    setselectedTodoType(type);
    onChange(name, type);
  };

  return (
    <>
      <Menu>
        <MenuButton width="200px" as={Button} rightIcon={<ChevronDownIcon />}>
          {todoType || "Todo Type"}
        </MenuButton>
        <MenuList>
          {myTodoType.map((type, id) => (
            <MenuItem
              onClick={() => handleClick(type)}
              onSubmit={() => handleClick(type)}
              key={id}
            >
              {type}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default TodoTypeMenu;
