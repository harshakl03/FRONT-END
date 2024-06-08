import { useFieldArray, useForm } from "react-hook-form";
//import Form from "../../ui/Form";
import { Option, Select } from "../../../ui/Select";
import LoadingScreen from "../../../ui/LoadingScreen";
import useCourseData from "../useCourseData";
import { Header } from "../../../ui/Stylers";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { Input } from "../../../ui/Input";
import { useTLEA, useTLEAData } from "./useTLEA";
import { CustomDelete, FlexRow, Form } from "../AcademicStyles";
import { useEffect, useState } from "react";
import TLEAButton from "./TLEAButton";

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
  const [submitted, setSubmitted] = useState(() => Boolean(!isthData?.error));

  useEffect(() => {
    const data = [];
    if (!isISTHLoading && isthData && !isthData.error) {
      isthData.payload.map((item) => data.push(item));
      setValue("courses", data);
    }
  }, [isISTHLoading, setValue, isthData]);

  if (isLoading || isFetching || isISTHLoading) return <LoadingScreen />;

  function onSubmit(data) {
    const processedData = data.courses.map((course) => ({
      ...course,
      semester: Number(course.semester),
      tce: Number(course.tce),
      pce: Number(course.pce),
    }));
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
              disabled={submitted}
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
              disabled={submitted}
            />
            <Input
              type="number"
              {...register(`courses.${index}.tce`, message)}
              placeholder="Total Class Engaged"
              disabled={submitted}
            />
            <Input
              type="number"
              {...register(`courses.${index}.pce`, message)}
              placeholder="Percentage of Classes Engaged"
              disabled={submitted}
            />
            <CustomDelete type="button" onClick={() => remove(index)}>
              <HiArchiveBoxXMark />
            </CustomDelete>
          </FlexRow>
        ))}
        <TLEAButton
          submitted={submitted}
          setSubmitted={setSubmitted}
          navlink="/academic/tlea/ars"
          append={() => append(defaultValue.courses[0])}
        />
      </Form>
    </>
  );
}
