import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Back from "../../ui/Back";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import { Header } from "../../ui/Stylers";
import CustomButton, { ButtonRow, Button } from "../../ui/Button";
import { useForgotPassword } from "./editPassword";
import LoadingScreen from "../../ui/LoadingScreen";

const message = "The above field is required";
const minLength = {
  value: 8,
  message: "Password needs minimum of 8 characters",
};

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const { forgotPassword, isLoading } = useForgotPassword();
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  if (isLoading) return <LoadingScreen />;

  function onSubmit(data) {
    forgotPassword(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <div>
      <Back onClick={() => navigate("/profile/settings")} />
      <Header>FORGOT PASSWORD</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          key="vtu_id"
          label="Enter VTU Id:*"
          error={errors?.vtu_id?.message}
        >
          <Input
            type="text"
            id="vtu_id"
            disabled={isLoading}
            {...register("vtu_id", { required: message })}
          />
        </FormRow>
        <FormRow
          key="pan_number"
          label="Enter PAN Number:*"
          error={errors?.pan_number?.message}
        >
          <Input
            type="text"
            id="pan_number"
            disabled={isLoading}
            {...register("pan_number", { required: message })}
          />
        </FormRow>
        <FormRow
          key="password"
          label="Enter new password:*"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: message,
              minLength: minLength,
            })}
          />
        </FormRow>
        <ButtonRow>
          <Button type="reset">Cancel</Button>
          <CustomButton>Submit</CustomButton>
        </ButtonRow>
      </Form>
    </div>
  );
}
