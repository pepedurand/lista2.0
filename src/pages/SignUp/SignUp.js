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
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { useForm } from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { FormsDiv, FormsBox, ImageDiv } from "../../layouts/styled";
import { useAppNavigate } from "../../router/coordinator";
import { signup } from "../../services/signup";

export const SignUp = () => {
  useUnprotectedPage();
  const { goToLogin } = useAppNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    signup(form);
    cleanFields();
    goToLogin();
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
          <Heading>Cadastre-se</Heading>
          <Text color="grey" fontWeight="light">
            Cadastre-se na Lista de Tarefas para ter acesso as suas tarefas.
          </Text>
          <form onSubmit={onSubmitForm}>
            <FormControl isRequired marginTop="6">
              <FormLabel htmlFor="email">Nome</FormLabel>
              <Input
                id="nome"
                name="name"
                value={form.name}
                onChange={onChange}
              />
            </FormControl>
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
              Cadastrar
            </Button>
          </form>
          <Link to="">Já tem uma conta? Faça o login.</Link>
        </Box>
      </FormsDiv>
    </FormsBox>
  );
};
