import { HiOutlineCheckCircle } from "react-icons/hi2";
import { Input } from "../../ui/Input";
import { TextArea } from "../../ui/TextArea";
import React from "react";
import Button, { ButtonRow } from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import { Header } from "../../ui/Stylers";
import Back from "../../ui/Back";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "./useAdmin";

const formSchema = {
  vtu_id: {
    label: "Enter VTU Id:",
    required: true,
    field: "input",
    type: "text",
  },
  full_name: {
    label: "Enter Full Name:",
    required: true,
    field: "input",
    type: "text",
  },
  father_name: {
    label: "Enter Father Name:",
    required: false,
    field: "input",
    type: "text",
  },
  mother_name: {
    label: "Enter Mother Name:",
    required: false,
    field: "input",
    type: "text",
  },
  mobile: {
    label: "Enter Mobile Number:",
    required: true,
    field: "input",
    type: "number",
  },
  emergency_mobile: {
    label: "Enter Emergency Mobile Number:",
    required: true,
    field: "input",
    type: "number",
  },
  pad: {
    label: "Enter Personal Address:",
    required: true,
    field: "text-area",
    type: "text",
  },
  email_address: {
    label: "Enter Email Address:",
    required: true,
    field: "input",
    type: "text",
  },
};

const message = "The above field is required";

export default function RegisterUser() {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const { registerUser, isLoading } = useRegisterUser();

  function onSubmit(data) {
    registerUser(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <div>
      <Back onClick={() => navigate("/")} />
      <Header>REGISTER USER</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(formSchema).map((field) => (
          <FormRow
            key={field}
            label={`${formSchema[field].label}${
              formSchema[field].required ? "*" : ""
            }`}
            error={errors?.[field]?.message}
          >
            {formSchema[field].field === "input" && (
              <Input
                type={formSchema[field].type}
                id={field}
                disabled={isLoading}
                {...register(field, {
                  required: formSchema[field].required && message,
                })}
              />
            )}
            {formSchema[field].field === "text-area" && (
              <TextArea
                type={formSchema[field].type}
                id={field}
                disabled={isLoading}
                {...register(field, {
                  required: formSchema[field].required && message,
                })}
              />
            )}
          </FormRow>
        ))}

        {/* IMAGE PICKER
       <FileInput type="file" name="Choose image" id="image" accept="image/*" />*/}
        <ButtonRow>
          <Button icon={<HiOutlineCheckCircle />}>Register</Button>
        </ButtonRow>
      </Form>
    </div>
  );
}
