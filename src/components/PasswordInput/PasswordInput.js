import {
  InputGroup,
  InputRightElement,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";

export const PasswordInput = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <FormLabel htmlFor="password">{props.label}</FormLabel>
      <InputGroup size="md">
        {props.texto}
        <Input
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          required
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
