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
                sx={{
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  margin: "20px",
                  //padding: "5px",
                  //border: "1px solid black",
                  
                  backgroundColor: "#f4f4f4", 
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                InputProps={{
                  sx: {
                    padding: "1em",
                    fontSize: "100px",
                    fontFamily: "Poppins",
                  }
                }}
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
                sx={{
                  color: "black",
                  
                  border: "none",
                  borderRadius: "10px",
                  margin: "20px",
                 //padding: "5px",
                  //border: "1px solid black",
                  fontFamily: "Poppins",
                  backgroundColor: "#f4f4f4", 
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                InputProps={{
                  sx: {
                    padding: "1em",
                    fontSize: "100px",
                    fontFamily: "Poppins",
                  }
                }}
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
