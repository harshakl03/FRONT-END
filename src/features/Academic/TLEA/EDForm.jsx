import { useFieldArray, useForm } from "react-hook-form";
import { Header } from "../../../ui/Stylers";
import { Input } from "../../../ui/Input";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CustomDelete, FlexRow, Form } from "../AcademicStyles";
import { useTLEA, useTLEAData } from "./useTLEA";
import LoadingScreen from "../../../ui/LoadingScreen";
import { useEffect, useState } from "react";
import TLEAButton from "./TLEAButton";

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
  const [submitted, setSubmitted] = useState(() => Boolean(!edData?.error));

  useEffect(() => {
    const data = [];
    if (!isLoadingData && edData && !edData.error) {
      edData.payload.map((item) => data.push(item));
      setValue("exams", data);
    }
  }, [isLoadingData, setValue, edData]);

  function onSubmit(data) {
    const processedData = data.exams.map((item) => ({
      ...item,
      api_score: Number(item.api_score),
      extent_carried_out: Number(item.extent_carried_out),
    }));
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
              disabled={submitted}
            />
            <Input
              type="text"
              {...register(`exams.${index}.duty_assigned`, message)}
              placeholder="Enter Duties Assigned"
              disabled={submitted}
            />
            <Input
              type="number"
              {...register(`exams.${index}.extent_carried_out`, message)}
              placeholder="Enter Extent of Carry"
              disabled={submitted}
            />
            <Input
              type="number"
              {...register(`exams.${index}.api_score`, message)}
              placeholder="Enter API Score"
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
          navlink="/academic/cepda"
          append={() => append(defaultValue.exams[0])}
        />
      </Form>
    </>
  );
}
