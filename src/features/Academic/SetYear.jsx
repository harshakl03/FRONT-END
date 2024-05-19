import { Controller, useForm } from "react-hook-form";
import CustomButton, { ButtonRow } from "../../ui/Button";
import { Header } from "../../ui/Stylers";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDateSet } from "../Academic/useAcademic";
import LoadingScreen from "../../ui/LoadingScreen";

export default function SetYear() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { setDate, isLoading } = useDateSet();

  const onSubmit = (data) => {
    const start = dayjs(data.start).format("YYYY-MM-DD").toString();
    const end = dayjs(data.end).format("YYYY-MM-DD").toString();
    const apiData = { start, end };
    setDate(apiData);
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Header>Set Academic Year</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.start?.message}>
          <Controller
            name="start"
            control={control}
            rules={{ required: "The above field is required" }}
            render={({ field }) => (
              <DatePicker
                label="Start Date"
                value={field.value}
                onChange={field.onChange}
                format="DD-MM-YYYY"
              />
            )}
          />
        </FormRow>
        <FormRow error={errors?.end?.message}>
          <Controller
            name="end"
            control={control}
            rules={{ required: "The above field is required" }}
            render={({ field }) => (
              <DatePicker
                label="End Date"
                value={field.value}
                onChange={field.onChange}
                format="DD-MM-YYYY"
              />
            )}
          />
        </FormRow>
        <ButtonRow>
          <CustomButton>Next</CustomButton>
        </ButtonRow>
      </Form>
    </>
  );
}
