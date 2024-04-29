import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Back from "../../ui/Back";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import { Header } from "../../ui/Stylers";
import Button, { ButtonRow } from "../../ui/Button";
import { useForgotPassword } from "./editPassword";

const formSchema = {
  vtu_id: {
    label: "Enter VTU ID:",
    required: true,
    field: "input",
    type: "text",
  },
  pan_number: {
    label: "Enter Pan Number:",
    required: true,
    field: "input",
    type: "text",
  },
  password: {
    label: "Enter New Password:",
    required: true,
    field: "input",
    type: "password",
  },
};

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const { forgotPassword, isLoading } = useForgotPassword();
  const { handleSubmit, register, formState, setValue } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  if (isLoading) return <h1>Loading</h1>;

  function onSubmit(data) {
    forgotPassword(data, {
      onSettled: () => {
        Object.keys(formSchema).map((field) => setValue(field, ""));
      },
    });
  }

  return (
    <div>
      <Back onClick={() => navigate("/employee/profile/settings")} />
      <Header>FORGOT PASSWORD</Header>
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
