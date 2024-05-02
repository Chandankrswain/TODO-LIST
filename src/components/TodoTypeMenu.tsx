import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const TodoTypeMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton width="200px" as={Button} rightIcon={<ChevronDownIcon />}>
          Todo Type
        </MenuButton>
        <MenuList>
          <MenuItem>Hobby</MenuItem>
          <MenuItem>Personal</MenuItem>
          <MenuItem>LifeStyle</MenuItem>
          <MenuItem>Basics</MenuItem>
          <MenuItem>No list</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default TodoTypeMenu;
