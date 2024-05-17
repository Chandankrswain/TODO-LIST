import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  myCategory: string[];
  onChange: (name: any, cat: any) => void;
  name: string;
}

const Category = ({ myCategory, onChange, name }: Props) => {
  const [category, setCategory] = useState("");

  const handleClick = (cat: any) => {
    setCategory(cat);
    onChange(name, cat);
  };

  return (
    <>
      <Menu>
        <MenuButton width="200px" as={Button} rightIcon={<ChevronDownIcon />}>
          {category || "Category"}
        </MenuButton>
        <MenuList>
          {myCategory.map((cat: any, id) => (
            <MenuItem
              onClick={() => {
                handleClick(cat);
              }}
              onSubmit={() => handleClick(cat)}
              key={id}
            >
              {cat}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Category;
