import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import CustomButton, { ButtonRow } from "../../ui/Button";
import Back from "../../ui/Back";
import { Header } from "../../ui/Stylers";
import { useNavigate } from "react-router-dom";

const message = "The above field is required";

export default function AssignRole() {
  const { handleSubmit, reset, formState, register } = useForm({
    defaultValues: { vtu_id: "", designation: "" },
  });
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div>
      <Back onClick={() => navigate("/")} />
      <Header>ASSIGN ROLE</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          key="vtu_id"
          label="Enter VTU Id:*"
          error={errors?.vtu_id?.message}
        >
          <Input
            type="text"
            id="vtu_id"
            {...register("vtu_id", { required: message })}
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
              required: message,
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
    </div>
  );
}
