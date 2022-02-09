import { BasicInputProps } from "@src/Common/Type";
import Container from "./styles";

const Input = (props: BasicInputProps) => {
  const { inputRef } = props;
  return <Container {...props} ref={inputRef} />;
};

Input.defaultProps = {
  width: "150px",
  height: "50px",
  borderColor: "#ffffff",
  margin: "0",
  padding: "0",
  background: "#ffffff",
  type: "text",
};

export default Input;
