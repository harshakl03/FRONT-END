import { useNavigate } from "react-router-dom";
import Back from "../../ui/Back";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { Header } from "../../ui/Stylers";
import Button, { ButtonRow } from "../../ui/Button";
import { Input } from "../../ui/Input";
import Form from "../../ui/Form";
import { useChangePassword } from "./editPassword";

const formSchema = {
  oldPassword: {
    label: "Enter old password:",
    required: true,
    field: "input",
    type: "password",
  },
  confirmOld: {
    label: "Confirm old password:",
    required: true,
    field: "input",
    type: "password",
  },
  newPassword: {
    label: "Enter new password:",
    required: true,
    field: "input",
    type: "password",
  },
  confirmNew: {
    label: "Confirm new password:",
    required: true,
    field: "input",
    type: "password",
  },
};

export default function ChangePasswordForm() {
  const navigate = useNavigate();
  const { changePassword, isLoading } = useChangePassword();
  const { handleSubmit, register, formState, setValue } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  if (isLoading) return <h1>Loading</h1>;

  function onSubmit(data) {
    changePassword(data, {
      onSettled: () => {
        Object.keys(formSchema).map((field) => setValue(field, ""));
      },
    });
  }

  return (
    <div>
      <Back onClick={() => navigate("/employee/profile/settings")} />
      <Header>CHANGE PASSWORD</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(formSchema).map((field) => (
          <FormRow
            key={field}
            label={`${formSchema[field].label}${
              formSchema[field].required ? "*" : ""
            }`}
            error={errors?.[field]?.type}
          >
            <Input
              type={formSchema[field].type}
              id={field}
              disabled={isLoading}
              {...register(field, { required: formSchema[field].required })}
            />
          </FormRow>
        ))}
        <ButtonRow>
          <Button>Submit</Button>
        </ButtonRow>
      </Form>
    </div>
  );
}
