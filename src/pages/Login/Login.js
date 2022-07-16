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
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { AuthContext } from "../../context/authContext";
import { useForm } from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { FormsDiv, FormsBox, ImageDiv } from "../../layouts/styled";

export const Login = () => {
  useUnprotectedPage();
  const { login } = React.useContext(AuthContext);

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form);
    cleanFields();
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
