import { useForm } from "react-hook-form";
import Back from "../../ui/Back";
import { Header } from "../../ui/Stylers";
import { useNavigate } from "react-router-dom";
import Form from "../../ui/Form";
import { Input } from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { Button, ButtonRow } from "../../ui/Button";
import { useRegisterUser } from "./useAdmin";
import LoadingScreen from "../../ui/LoadingScreen";

const message = "The above field is required";
const minLength = {
  value: 8,
  message: "Password needs minimum of 8 characters",
};

export default function RegisterUser() {
  const { handleSubmit, formState, register, reset } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { registerUser, isLoading } = useRegisterUser();
  const navigate = useNavigate();

  function onSubmit(data) {
    registerUser(data, {
      onSettled: () => reset(),
    });
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <div>
      <Back onClick={() => navigate("/")} />
      <Header>REGISTER EMPLOYEE</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          key="vtu_id"
          label="Enter VTU Id:*"
          error={errors?.vtu_id?.message}
        >
          <Input
            type="text"
            id="vtu_id"
            {...register("vtu_id", { required: message })}
          />
        </FormRow>
        <FormRow
          key="password"
          label="Enter password:*"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: message,
              minLength: minLength,
            })}
          />
        </FormRow>
        <ButtonRow>
          <Button>Register</Button>
        </ButtonRow>
      </Form>
    </div>
  );
}
