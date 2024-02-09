import { useDispatch, useSelector } from "react-redux";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import TextArea from "../../ui/TextArea";
import React, { useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { addPartA } from "./partASlice";

export default function PartAForm() {
  const data = useSelector((state) => state.partA);
  const [preData, setPreData] = useState({ ...data });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ ...preData });

  function handleChange(e) {
    const { id, value } = e.target;
    setPreData((c) => ({ ...c, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPartA(preData));
    navigate("/employee/part-b");
  }

  return (
    <Form onSubmit={handleSubmit}>
      {Object.keys(data).map((field, index) => (
        <React.Fragment key={index}>
          <Label for={field}>Enter your {field}:</Label>
          {field === "pad" ? (
            <TextArea
              id={field}
              value={preData[field]}
              onChange={handleChange}
            />
          ) : (
            <Input id={field} value={preData[field]} onChange={handleChange} />
          )}
        </React.Fragment>
      ))}

      <Button>Submit</Button>

      {/*Object.values(data).map((value) => (
        <p>{value}</p>
      ))*/}

      {/*<Label for="id">Enter your id:</Label>
      <Input id="id" value={preData.id} onChange={handleChange} />
      <Label for="vtu_id">Enter VTU id:</Label>
      <Input name="vtu_id" />
      <Label for="full_name">Enter your full name:</Label>
      <Input id="full_name" value={preData.full_name} onChange={handleChange} />
      <Label for="father_name">Enter your father name:</Label>
      <Input name="father_name" />
      <Label for="mother_name">Enter your mother name:</Label>
      <Input name="mother_name" />
      <Label for="mobile">Enter your mobile number:</Label>
      <Input name="mobile" />
      <Label for="emergency_mobile">Enter your emergency mobile number:</Label>
      <Input name="emergency_mobile" />
      <Label for="pad">Enter your permanent address:</Label>
      <TextArea name="pad" />
      <Label for="email_address">Enter your email address:</Label>
      <Input name="email_address" />*/}
    </Form>
  );
}
