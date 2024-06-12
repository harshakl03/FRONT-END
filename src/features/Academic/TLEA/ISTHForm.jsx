import { useFieldArray, useForm } from "react-hook-form";
//import Form from "../../ui/Form";
import { Option, Select } from "../../../ui/Select";
import LoadingScreen from "../../../ui/LoadingScreen";
import useCourseData from "../useCourseData";
import { Header } from "../../../ui/Stylers";
import { Input } from "../../../ui/Input";
import { useTLEA, useTLEAData } from "./useTLEA";
import { FlexRow, Form } from "../AcademicStyles";
import { useEffect, useState } from "react";
import TLEAButton from "./TLEAButton";
import RowButtons from "./RowButtons";

const message = { required: "The above field is required" };
const defaultValue = {
  courses: [{ course_name: "", semester: "", tce: "", pce: "" }],
};

export default function ISTHForm() {
  const tag = "isth";
  const { data: courseData, isLoading } = useCourseData();
  const { data: isthData, isLoading: isISTHLoading } = useTLEAData(tag);
  const { handleSubmit, register, control, reset, setValue } = useForm({
    defaultValues: isthData?.payload
      ? { courses: isthData.payload }
      : defaultValue,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
  });
  const { insertMul, isLoading: isFetching } = useTLEA(
    tag,
    "/academic/tlea/ars"
  );
  const [edit, setEdit] = useState(-1);
  const [numOfElementsFromSavedData, set] = useState(0);

  useEffect(
    () => {
      const data = [];
      if (!isISTHLoading && isthData && !isthData.error) {
        isthData.payload.map((item) => data.push(item));
        setValue("courses", data);
        set(Object.keys(isthData.payload).length);
      }
    },
    [isISTHLoading, setValue, isthData],
    set
  );

  if (isLoading || isFetching || isISTHLoading) return <LoadingScreen />;

  function onSubmit(data) {
    const processedData = data.courses
      .map((course) => ({
        ...course,
        semester: Number(course.semester),
        tce: Number(course.tce),
        pce: Number(course.pce),
      }))
      .slice(numOfElementsFromSavedData);
    insertMul(processedData, { onSettled: () => reset() });
  }

  return (
    <>
      <Header>Lectures, Seminars, Tutorials, Practicals</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <FlexRow key={item.id}>
            <Select
              {...register(`courses.${index}.course_name`, message)}
              disabled={index < numOfElementsFromSavedData && edit !== index}
            >
              <Option value="" disabled selected hidden>
                Course
              </Option>
              {courseData?.payload?.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              type="number"
              {...register(`courses.${index}.semester`, message)}
              placeholder="SEMESTER"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="number"
              {...register(`courses.${index}.tce`, message)}
              placeholder="Total Class Engaged"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="number"
              {...register(`courses.${index}.pce`, message)}
              placeholder="Percentage of Classes Engaged"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <RowButtons
              showEdit={edit === index}
              index={index}
              setEdit={setEdit}
              remove={remove}
              belongsToSaveData={index < numOfElementsFromSavedData}
            />
          </FlexRow>
        ))}
        <TLEAButton
          showSubmit={fields.length > numOfElementsFromSavedData}
          navlink="/academic/tlea/ars"
          append={() => append(defaultValue.courses[0])}
        />
      </Form>
    </>
  );
}
