import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import { Option, Select } from "../../ui/Select";
import CustomButton, { ButtonRow } from "../../ui/Button";
import LoadingScreen from "../../ui/LoadingScreen";
import useCourseData from "./useCourseData";
import { useState } from "react";
import { Header } from "../../ui/Stylers";

export default function TLEAForm() {
  const { data, isLoading } = useCourseData();
  const { handleSubmit, register } = useForm({ defaultValues: {} });
  const [count, setCount] = useState(1);
  const [loadArray, setLoadArray] = useState(["0"]);

  if (isLoading) return <LoadingScreen />;

  function onSubmit(data) {
    const arrayData = loadArray
      .map((key) => {
        if (data.hasOwnProperty(key)) return data[key];
        return "";
      })
      .filter((item) => item !== "");
    console.log(arrayData);
  }

  function handleDelete(e, id) {
    e.preventDefault();
    setLoadArray((prev) => prev.filter((val) => val !== id));
  }

  return (
    <>
      <Header>TEACHING, LEARNING AND EVALUATION</Header>
      <CustomButton
        onClick={(e) => {
          e.preventDefault();
          setCount((prev) => prev + 1);
          setLoadArray((prev) => [...prev, count + ""]);
        }}
      >
        Add
      </CustomButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loadArray.map((id) => (
          <>
            <Select
              key={id}
              name="id"
              {...register(id, { required: "The above field is required" })}
            >
              {data?.payload.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <CustomButton onClick={(e) => handleDelete(e, id)}>
              Delete
            </CustomButton>
          </>
        ))}
        <ButtonRow>
          <CustomButton>Submit</CustomButton>
        </ButtonRow>
      </Form>
    </>
  );
}
