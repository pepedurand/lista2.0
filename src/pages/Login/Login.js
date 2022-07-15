import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { baseUrl } from "../../constants/baseUrl";
import { TaskListContext } from "../../context/taskListContext";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { FormsDiv, FormsBox, ImageDiv } from "../../layouts/styled";
import { goToTasks } from "../../router/coordinator";

export const Login = () => {
  useUnprotectedPage();
  const { setLoggedUser } = React.useContext(TaskListContext);

  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    cleanFields();
    login();
  };

  const users = useRequestData([], `${baseUrl}/users`);

  const login = () => {
    let logged = false;
    if (
      users.filter(
        (user) => user.email === form.email && user.password === form.password
      ).length > 0
    ) {
      logged = true;
    }
    if (logged === true) {
      const loggedUser = users.find((user) => user.email === form.email);
      const userId = loggedUser.id;
      localStorage.setItem("token", `${form.email}${form.password}`);
      localStorage.setItem("userId", `${userId}`);
      alert("logado");
      setLoggedUser(userId);
      goToTasks(navigate);
    } else {
      alert("revise seus dados ou crie uma conta");
    }
  };

  return (
    <FormsBox>
      <ImageDiv>
        <Image
          opacity="0.2"
          objectFit="cover"
          width="100%"
          height="100%"
          src="https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </ImageDiv>
      <FormsDiv>
        <Box textAlign="center">
          <Heading>Lista de Tarefas</Heading>
          <Text color="grey" fontWeight="light">
            Seja mais produtivo com a lista de tarefas online, totalmente
            gratuito.
          </Text>
          <form onSubmit={onSubmitForm}>
            <FormControl isRequired marginTop="6">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
              />
            </FormControl>
            <FormControl isRequired marginTop="6">
              <PasswordInput
                label="Senha"
                name="password"
                value={form.password}
                onChange={onChange}
              />
            </FormControl>

            <Button
              marginTop="8"
              marginBottom="4"
              width="full"
              colorScheme="blue"
              type="submit"
            >
              Entrar
            </Button>
          </form>
          <Link to="/criar-conta"> Não tem uma conta? Cadastre-se.</Link>
        </Box>
      </FormsDiv>
    </FormsBox>
  );
};
