import { useFieldArray, useForm } from "react-hook-form";
import { Header } from "../../../ui/Stylers";
import { Input } from "../../../ui/Input";
import { FlexRow, Form } from "../AcademicStyles";
import { useTLEA, useTLEAData } from "./useTLEA";
import LoadingScreen from "../../../ui/LoadingScreen";
import { useEffect, useState } from "react";
import useCourseData from "../useCourseData";
import { Option, Select } from "../../../ui/Select";
import TLEAButton from "./TLEAButton";
import RowButtons from "./RowButtons";

const message = { required: "The above field is required" };
const defaultValue = {
  materials: [
    {
      course_name: "",
      consulted_from: "",
      prescribed_resources: "",
      additional_resources_provided: "",
    },
  ],
};

export default function ARSForm() {
  const tag = "ars";
  const { data: courseData, isLoading: isLoadingCourseData } = useCourseData();
  const { insertMul, isLoading } = useTLEA(tag, "/academic/tlea/itre");
  const { data: arsData, isLoading: isLoadingData } = useTLEAData(tag);
  const { handleSubmit, register, control, reset, setValue } = useForm({
    defaultValues: arsData?.payload
      ? { materials: arsData.payload }
      : defaultValue,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });
  const [edit, setEdit] = useState(-1);
  const [numOfElementsFromSavedData, set] = useState(0);

  useEffect(() => {
    const data = [];
    if (!isLoadingData && arsData && !arsData.error) {
      arsData.payload.map((item) => data.push(item));
      setValue("materials", data);
      set(Object.keys(arsData.payload).length);
    }
  }, [isLoadingData, setValue, arsData, set]);

  function onSubmit(data) {
    const processedData = data.materials.slice(numOfElementsFromSavedData);
    insertMul(processedData, { onSettled: () => reset() });
  }

  if (isLoading || isLoadingCourseData || isLoadingData)
    return <LoadingScreen />;

  return (
    <>
      <Header>Reading/Instructional Material</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <FlexRow key={item.id}>
            <Select
              {...register(`materials.${index}.course_name`, message)}
              disabled={index < numOfElementsFromSavedData && edit !== index}
            >
              <Option value="" disabled selected hidden>
                Course Name
              </Option>
              {courseData?.payload?.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              type="text"
              {...register(`materials.${index}.consulted_from`, message)}
              placeholder="Enter Consultancy"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="text"
              {...register(`materials.${index}.prescribed_resources`, message)}
              placeholder="Enter Prescribed Resources"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="text"
              {...register(
                `materials.${index}.additional_resources_provided`,
                message
              )}
              placeholder="Enter Additional Resources"
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
          navlink="/academic/tlea/itre"
          append={() => append(defaultValue.materials[0])}
        />
      </Form>
    </>
  );
}
