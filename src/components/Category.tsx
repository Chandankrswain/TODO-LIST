import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const Category = () => {
  return (
    <>
      <Menu>
        <MenuButton width="200px" as={Button} rightIcon={<ChevronDownIcon />}>
          Category
        </MenuButton>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Work</MenuItem>
          <MenuItem>Others</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Category;
