import { useFieldArray, useForm } from "react-hook-form";
import { Header } from "../../../ui/Stylers";
import { Input } from "../../../ui/Input";
import { FlexRow, Form } from "../AcademicStyles";
import { useTLEA, useTLEAData } from "./useTLEA";
import LoadingScreen from "../../../ui/LoadingScreen";
import { useEffect, useState } from "react";
import TLEAButton from "./TLEAButton";
import RowButtons from "./RowButtons";

const message = { required: "The above field is required" };
const defaultValue = {
  exams: [
    {
      exam_type: "",
      duty_assigned: "",
      extent_carried_out: "",
      api_score: "",
    },
  ],
};

export default function EDForm() {
  const tag = "exam_duties";
  const { insertMul, isLoading } = useTLEA(tag, "/academic/cepda");
  const { data: edData, isLoading: isLoadingData } = useTLEAData(tag);
  const { handleSubmit, register, control, reset, setValue } = useForm({
    defaultValues: edData?.payload ? { exams: edData.payload } : defaultValue,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "exams",
  });
  const [edit, setEdit] = useState(-1);
  const [numOfElementsFromSavedData, set] = useState(0);

  useEffect(() => {
    const data = [];
    if (!isLoadingData && edData && !edData.error) {
      edData.payload.map((item) => data.push(item));
      setValue("exams", data);
      set(Object.keys(edData.payload).length);
    }
  }, [isLoadingData, setValue, edData, set]);

  function onSubmit(data) {
    const processedData = data.exams
      .map((item) => ({
        ...item,
        api_score: Number(item.api_score),
        extent_carried_out: Number(item.extent_carried_out),
      }))
      .slice(numOfElementsFromSavedData);
    insertMul(processedData, { onSettled: () => reset() });
  }

  if (isLoading || isLoadingData) return <LoadingScreen />;

  return (
    <>
      <Header>Reading/Instructional Material</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <FlexRow key={item.id}>
            <Input
              type="text"
              {...register(`exams.${index}.exam_type`, message)}
              placeholder="Enter Type of Examination Duty"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="text"
              {...register(`exams.${index}.duty_assigned`, message)}
              placeholder="Enter Duties Assigned"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="number"
              {...register(`exams.${index}.extent_carried_out`, message)}
              placeholder="Enter Extent of Carry"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="number"
              {...register(`exams.${index}.api_score`, message)}
              placeholder="Enter API Score"
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
          navlink="/academic/cepda"
          append={() => append(defaultValue.exams[0])}
        />
      </Form>
    </>
  );
}
