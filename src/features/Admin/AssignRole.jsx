import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Input } from "../../ui/Input";
import CustomButton, { ButtonRow } from "../../ui/Button";
import Back from "../../ui/Back";
import { Header } from "../../ui/Stylers";
import LoadingScreen from "../../ui/LoadingScreen";
import { useNavigate } from "react-router-dom";
import useDesigntaion from "./useDesignation";
import { useAssignRole } from "./useAdmin";
import { Option, Select } from "../../ui/Select";

const message = "The above field is required";

export default function AssignRole() {
  const { handleSubmit, reset, formState, register } = useForm({
    defaultValues: { vtu_id: "", designation: "" },
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const { data: designations, isLoading } = useDesigntaion();
  const { assignRole, isLoading: isAssigning } = useAssignRole();

  function onSubmit(data) {
    assignRole(data, {
      onSettled: () => reset(),
    });
  }

  if (isLoading || isAssigning) return <LoadingScreen />;

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
          <Select
            id="designation"
            {...register("designation", {
              required: message,
            })}
          >
            {designations?.payload?.map((design, index) => (
              <Option value={design.title} key={index}>
                {design.title}
              </Option>
            ))}
          </Select>
        </FormRow>
        <ButtonRow>
          <CustomButton>Assign</CustomButton>
        </ButtonRow>
      </Form>
    </div>
  );
}
