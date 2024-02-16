import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import { Header, Footer } from "../../ui/Stylers";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useLoginData from "./useLoginData";
import useLogin from "./useLogin";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  /* Add space between each child */
  & > * {
    margin-bottom: 5px; /* Adjust the value as needed */
    position: relative;
  }

  /* Remove margin from the last child to avoid extra space */
  & > :last-child {
    margin-bottom: 0;
  }

  /* Apply spacing between text field and text of the element below */
  input + p {
    margin-top: 5px; /* Adjust the value as needed */
  }
  /* Add a line between each field */
  /* & > *:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #939393; /* Adjust line style as needed 
  } */
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  width: auto;
  opacity: 50%;

  &:hover {
    opacity: 100%;
    background-color: #cccccc;
  }
`;

export default function LoginForm() {
  const { handleSubmit, register, formState, setValue } = useForm({
    defaultValues: { username: "", password: "" },
  });
  const { errors } = formState;
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  if (isLoading) return null;

  function onSubmit(data, event) {
    login(data);
    navigate("/employee/part-a");
  }

  return (
    <>
      <Header>Login</Header>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Enter username:"
          key="username"
          errorm={errors?.username?.message}
        >
          <Input
            id="username"
            type="text"
            onChange={(e) => setValue("username", e.target.value)}
            disabled={isLoading}
            {...register("username", { required: "Please provide username" })}
          />
        </FormRow>
        <FormRow
          label="Enter password:"
          key="password"
          errorm={errors?.password?.message}
        >
          <Input
            id="password"
            type="text"
            onChange={(e) => setValue("password", e.target.value)}
            disabled={isLoading}
            {...register("password", { required: "Please provide password" })}
          />
        </FormRow>
        <StyledLink to="forgot-password">Forgot Password</StyledLink>
        <Button>Submit</Button>
      </StyledLoginForm>
      <Footer>@Copyright2024</Footer>
    </>
  );
}
