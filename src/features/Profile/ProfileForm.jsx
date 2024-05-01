import { HiOutlineCheckCircle, HiOutlinePencilSquare } from "react-icons/hi2";
import { Input } from "../../ui/Input";
import { TextArea } from "../../ui/TextArea";
import React, { useEffect, useState } from "react";
import Button, { ButtonRow } from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import { Header } from "../../ui/Stylers";
import useEmployeeData from "./useEmployeeData";
import useEditEmployee from "./useEditEmployee";
import Back from "../../ui/Back";
import { useNavigate } from "react-router-dom";

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
    type: "text",
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

export default function ProfileForm() {
  //const data = useSelector((state) => state.partA);
  const { data: employeeData, isLoading } = useEmployeeData();
  const [submitted, setSubmitted] = useState(true);
  const { handleSubmit, register, formState, setValue } = useForm({
    defaultValues: employeeData,
  });
  const { errors } = formState;
  const { editEmployee, isLoading: isEditing } = useEditEmployee();
  const navigate = useNavigate();

  useEffect(() => {
    if ((!isLoading || isEditing) && employeeData) {
      Object.keys(employeeData).map((key) => setValue(key, employeeData[key]));
    }
  }, [isLoading, setValue, employeeData, isEditing]);

  function handleEdit(e) {
    e.preventDefault();
    setSubmitted(false);
  }

  function onSubmit(data) {
    if (!submitted) {
      editEmployee(data);
      setSubmitted(true);
    }
    return;
  }

  if (isLoading || isEditing) return <h1>Loading</h1>;
  return (
    <div>
      <Back onClick={() => navigate("/")} />
      <Header>FACULTY DETAILS</Header>
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
                disabled={field === "vtu_id" ? true : submitted}
                {...register(field, {
                  required: formSchema[field].required && message,
                })}
              />
            )}
            {formSchema[field].field === "text-area" && (
              <TextArea
                type={formSchema[field].type}
                id={field}
                disabled={submitted}
                {...register(field, {
                  required: formSchema[field].required && message,
                })}
              />
            )}
            {field === "vtu_id" && (
              <div
                style={{
                  color: "blue",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                The above field cannot be edited
              </div>
            )}
          </FormRow>
        ))}

        {/* IMAGE PICKER
       <FileInput type="file" name="Choose image" id="image" accept="image/*" />*/}
        <ButtonRow>
          {submitted ? (
            <>
              <Button onClick={handleEdit} icon={<HiOutlinePencilSquare />}>
                Edit
              </Button>
            </>
          ) : (
            <Button icon={<HiOutlineCheckCircle />}>Submit</Button>
          )}
        </ButtonRow>
      </Form>
    </div>
  );
}
