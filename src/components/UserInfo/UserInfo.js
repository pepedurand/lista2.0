import { Avatar, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { baseUrl } from "../../constants/baseUrl";
import { useRequestData } from "../../hooks/useRequestData";

export const UserInfo = () => {
  const user = useRequestData(
    [],
    `${baseUrl}/users/${localStorage.getItem("userId")}`
  );
  const color = useColorModeValue("gray.700", "gray.400");
  return (
    <Grid gap={4} templateColumns="auto 1fr" padding="4">
      <Avatar src={user.picture} />
      <Grid templateRows="auto auto">
        <Text fontSize="md">{user.name}</Text>
        <Text color={color} fontSize="sm">
          {user.email}
        </Text>
      </Grid>
    </Grid>
  );
};
