import {
  Avatar,
  Button,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { baseUrl } from "../../constants/baseUrl";
import { useRequestData } from "../../hooks/useRequestData";
import { useAppNavigate } from "../../router/coordinator";
import { UserInfoDiv } from "./styled";

export const UserInfo = () => {
  const { goToLogin } = useAppNavigate();
  const user = useRequestData(
    [],
    `${baseUrl}/users/${localStorage.getItem("userId")}`
  );
  const color = useColorModeValue("gray.700", "gray.400");
  return (
    <UserInfoDiv>
      <Avatar src={user.picture} />
      <Grid templateRows="auto auto">
        <Text fontSize="md">{user.name}</Text>
        <Text color={color} fontSize="sm">
          {user.email}
        </Text>
      </Grid>
      <Button
        colorScheme="blue"
        size="xs"
        opacity="80%"
        onClick={() => {
          localStorage.removeItem("token");
          goToLogin();
        }}
      >
        Logout
      </Button>
    </UserInfoDiv>
  );
};
