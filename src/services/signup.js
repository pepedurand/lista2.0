import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const signup = async (props) => {
  await axios
    .post(`${baseUrl}/users`, props)
    .then((res) => {
      alert("conta criada com sucess");
    })
    .catch(() => alert("Erro no SignUp"));
};
