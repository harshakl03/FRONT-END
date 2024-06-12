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
  api: [
    {
      description: "",
      api_score: "",
    },
  ],
};

export default function ITREForm() {
  const tag = "itre";
  const { insertMul, isLoading } = useTLEA(tag, "/academic/tlea/ed");
  const { data: itreData, isLoading: isLoadingData } = useTLEAData(tag);
  const { handleSubmit, register, control, setValue, reset } = useForm({
    defaultValues: itreData?.payload ? { api: itreData.payload } : defaultValue,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "api",
  });
  const [edit, setEdit] = useState(-1);
  const [numOfElementsFromSavedData, set] = useState(0);

  useEffect(() => {
    const data = [];
    if (!isLoadingData && itreData && !itreData.error) {
      itreData.payload.map((item) => data.push(item));
      setValue("api", data);
      set(Object.keys(itreData.payload).length);
    }
  }, [isLoadingData, setValue, itreData, set]);

  function onSubmit(data) {
    const processedData = data.api
      .map((item) => ({
        ...item,
        api_score: Number(item.api_score),
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
              {...register(`api.${index}.description`, message)}
              placeholder="Enter Description"
              disabled={index < numOfElementsFromSavedData && edit !== index}
            />
            <Input
              type="number"
              {...register(`api.${index}.api_score`, message)}
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
          navlink="/academic/tlea/ed"
          append={() => append(defaultValue.api[0])}
        />
      </Form>
    </>
  );
}
