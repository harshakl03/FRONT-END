import { useNavigate } from "react-router-dom";
import Back from "../../ui/Back";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { Header } from "../../ui/Stylers";
import CustomButton, { ButtonRow, Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import Form from "../../ui/Form";
import LoadingScreen from "../../ui/LoadingScreen";
import { useChangePassword } from "./editPassword";

const message = "The above field is required";
const minLength = {
  value: 8,
  message: "Password needs minimum of 8 characters",
};
const validate = "Password need to match";

export default function ChangePasswordForm() {
  const navigate = useNavigate();
  const { changePassword, isLoading } = useChangePassword();
  const { handleSubmit, register, formState, getValues, reset } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  if (isLoading) return <LoadingScreen />;

  function onSubmit(data) {
    changePassword(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <div>
      <Back onClick={() => navigate("/profile/settings")} />
      <Header>CHANGE PASSWORD</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          key="oldPassword"
          label="Enter old password:*"
          error={errors?.oldPassword?.message}
        >
          <Input
            type="password"
            id="oldPassword"
            disabled={isLoading}
            {...register("oldPassword", {
              required: message,
              minLength: minLength,
            })}
          />
        </FormRow>
        <FormRow
          key="confirmOld"
          label="Confirm old password:*"
          error={errors?.confirmOld?.message}
        >
          <Input
            type="password"
            id="confirmOld"
            disabled={isLoading}
            {...register("confirmOld", {
              required: message,
              minLength: minLength,
              validate: (value) =>
                value === getValues().oldPassword || validate,
            })}
          />
        </FormRow>
        <FormRow
          key="newPassword"
          label="Enter new password:*"
          error={errors?.newPassword?.message}
        >
          <Input
            type="password"
            id="newPassword"
            disabled={isLoading}
            {...register("newPassword", {
              required: message,
              minLength: minLength,
              validate: (value) =>
                value !== getValues().oldPassword ||
                "Old and New passwords are same",
            })}
          />
        </FormRow>
        <FormRow
          key="confirmNew"
          label="Confirm new password:*"
          error={errors?.confirmNew?.message}
        >
          <Input
            type="password"
            id="confirmNew"
            disabled={isLoading}
            {...register("confirmNew", {
              required: message,
              minLength: minLength,
              validate: (value) =>
                value === getValues().newPassword || validate,
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
