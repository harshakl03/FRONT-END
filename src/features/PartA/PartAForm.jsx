import { useSelector } from "react-redux";
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

export default function PartAForm() {
  const data = useSelector((state) => state.partA);
  const { data: employeeData, isLoading } = useEmployeeData();
  const [submitted, setSubmitted] = useState(true);
  const { handleSubmit, register, formState, setValue } = useForm({
    defaultValues: employeeData,
    //   (JSON.parse(localStorage.getItem("part-a/submitted")) &&
    //     JSON.parse(localStorage.getItem("part-a"))) ||
    //   {},
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
        {Object.keys(data).map((field) => (
          <FormRow
            key={field}
            label={`${data[field].label}${data[field].required ? "*" : ""}`}
            error={errors?.[field]?.type}
          >
            {data[field].field === "input" && (
              <Input
                type={data[field].type}
                id={field}
                disabled={field === "pan_number" ? true : submitted}
                {...register(field, { required: data[field].required })}
              />
            )}
            {data[field].field === "text-area" && (
              <TextArea
                type={data[field].type}
                id={field}
                disabled={submitted}
                {...register(field, { required: data[field].required })}
              />
            )}
            {field === "pan_number" && (
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
