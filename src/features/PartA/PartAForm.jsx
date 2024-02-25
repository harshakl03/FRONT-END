import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlineArrowRightCircle,
  HiOutlineCheckCircle,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { Input, FileInput } from "../../ui/Input";
import { TextArea } from "../../ui/TextArea";
import React, { useEffect, useState } from "react";
import Button, { ButtonRow } from "../../ui/Button";
import { addPartA } from "./partASlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import { Header } from "../../ui/Stylers";
import { Footer } from "../../ui/Stylers";

export default function PartAForm() {
  const data = useSelector((state) => state.partA);
  const [submitted, setSubmitted] = useState(
    JSON.parse(localStorage.getItem("part-a/submitted"))
  );
  const { handleSubmit, register, formState } = useForm({
    defaultValues:
      (JSON.parse(localStorage.getItem("part-a/submitted")) &&
        JSON.parse(localStorage.getItem("part-a"))) ||
      {},
  });
  const { errors } = formState;

  const dispatch = useDispatch();
  const getSubmit = localStorage.getItem("part-a/submitted");

  useEffect(
    function () {
      if (!JSON.parse(localStorage.getItem("part-a"))) {
        localStorage.removeItem("part-a/submitted");
      }
      if (!JSON.parse(getSubmit)) {
        localStorage.removeItem("part-a");
      }
      setSubmitted(JSON.parse(getSubmit));
    },
    [getSubmit]
  );

  function handleEdit(e) {
    e.preventDefault();
    localStorage.setItem("part-a/submitted", false);
    setSubmitted(false);
  }

  function onSubmit(data) {
    if (!JSON.parse(localStorage.getItem("part-a/submitted"))) {
      dispatch(addPartA(data));
      localStorage.setItem("part-a", JSON.stringify(data));
      localStorage.setItem("part-a/submitted", true);
      toast.success("Form Added Successfully");
    }
    return;
  }

  return (
    <>
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
                disabled={submitted}
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
          </FormRow>
        ))}

        {/* WITHOUT USING MAP
      <FormRow label="Enter your Id" error={errors?.id?.type}>
        <Input type="text" id="id" {...register("id", { required: true })} />
      </FormRow>
      <FormRow label="Enter your VTU Id" error={errors?.vtu_id?.type}>
        <Input
          type="text"
          id="id"
          {...register("vtu_id", { required: true })}
        />
      </FormRow>
      <FormRow label="Enter your Full Name" error={errors?.full_name?.type}>
        <Input
          type="text"
          id="id"
          {...register("full_name", {
            required: true,
          })}
        />
      </FormRow>
      <FormRow label="Enter your Father Name" error={errors?.father_name?.type}>
        <Input type="text" id="id" {...register("father_name")} />
      </FormRow>
      <FormRow label="Enter your Mother Name" error={errors?.mother_name?.type}>
        <Input type="text" id="id" {...register("mother_name")} />
      </FormRow>
      <FormRow label="Enter your Mobile Number" error={errors?.mobile?.type}>
        <Input
          type="text"
          id="id"
          {...register("mobile", { required: true })}
        />
      </FormRow>
      <FormRow
        label="Enter your Emergency Mobile Number"
        error={errors?.emergency_mobile?.type}
      >
        <Input
          type="text"
          id="id"
          {...register("emergency_mobile", {
            required: true,
          })}
        />
      </FormRow>
      <FormRow label="Enter your Personal Address" error={errors?.pad?.type}>
        <Input type="text" id="id" {...register("pad", { required: true })} />
      </FormRow>
      <FormRow
        label="Enter your Email Address"
        error={errors?.email_address?.type}
      >
        <Input
          type="text"
          id="id"
          {...register("email_address", {
            required: true,
          })}
        />
      </FormRow>
      */}

        {/* IMAGE PICKER
       <FileInput type="file" name="Choose image" id="image" accept="image/*" />*/}
        <ButtonRow>
          {submitted ? (
            <>
              <Button onClick={handleEdit} icon={<HiOutlinePencilSquare />}>
                Edit
              </Button>
              <Button to="/employee/part-b/cat1">
                Next
                <HiOutlineArrowRightCircle />
              </Button>
            </>
          ) : (
            <Button icon={<HiOutlineCheckCircle />}>Submit</Button>
          )}
        </ButtonRow>
      </Form>
    </>
  );
}
