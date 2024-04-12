import { TextInput, TextInputProps } from "react-admin";

export const TextAreaInput = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      multiline
      InputProps={{ minRows: 4, maxRows: 4, ...props.InputProps }}
    />
  );
};
