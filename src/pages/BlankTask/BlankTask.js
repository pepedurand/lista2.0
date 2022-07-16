import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const BlankTask = () => {
  useProtectedPage();
  return (
    <Grid templateColumns="minmax(auto, 300px) 1fr">
      <Sidebar />
      <Flex flexFlow="column" alignItems="center" padding="8">
        <Heading fontWeight="thin">Selecione sua lista de tarefas</Heading>
        <Box
          marginTop="8"
          as="iframe"
          width="80%"
          height="80%"
          maxW="300px"
          maxH="300px"
          title="Busca Vazia"
          borderRadius="50%"
          src="https://embed.lottiefiles.com/animation/8021"
        />
      </Flex>
    </Grid>
  );
};
