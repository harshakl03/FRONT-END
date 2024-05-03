import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import CustomButton, { ButtonRow } from "../../ui/Button";

export default function AssignRole() {
  const { handleSubmit, reset, formState, register } = useForm({
    defaultValues: { vtu_id: "", designation: "" },
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        key="vtu_id"
        label="Enter VTU Id:*"
        error={errors?.vtu_id?.message}
      >
        <Input
          type="text"
          id="vtu_id"
          {...register("vtu_id", { required: "The above field is required" })}
        />
      </FormRow>
      <FormRow
        key="designation"
        label="Enter designation:*"
        error={errors?.designation?.message}
      >
        <select
          id="designation"
          {...register("designation", {
            required: "The above field is required",
          })}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </FormRow>
      <ButtonRow>
        <CustomButton>Assign</CustomButton>
      </ButtonRow>
    </Form>
  );
}
