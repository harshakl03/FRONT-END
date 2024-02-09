import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function PartAForm() {
  return (
    <Form>
      <Label for="id">Enter your id:</Label>
      <Input name="id" />
      <Label for="vtu_id">Enter VTU id:</Label>
      <Input name="vtu_id" />
      <Label for="full_name">Enter your full name:</Label>
      <Input name="full_name" />
      <Label for="father_name">Enter your father name:</Label>
      <Input name="father_name" />
      <Label for="mother_name">Enter your mother name:</Label>
      <Input name="mother_name" />
    </Form>
  );
}
