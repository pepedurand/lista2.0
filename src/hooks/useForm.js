import { useState } from "react";

export const useForm = (intialState) => {
  const [form, setForm] = useState(intialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(intialState);
  };
  return { form, onChange, cleanFields };
};
