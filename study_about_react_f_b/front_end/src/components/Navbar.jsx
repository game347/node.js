import { Button, Center, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}  // Fixed
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}  // Fixed
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          <Link to={"/"}>PRODUCT STORE</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>  {/* Fixed */}
          <Link to={"/Create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
            <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoMoon /> : <LuSun size="20"/>}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
