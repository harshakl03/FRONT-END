import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import TextArea from "../../ui/TextArea";

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
      <Label for="mobile">Enter your mobile number:</Label>
      <Input name="mobile" />
      <Label for="emergency_mobile">Enter your emergency mobile number:</Label>
      <Input name="emergency_mobile" />
      <Label for="pad">Enter your permanent address:</Label>
      <TextArea name="pad" />
      <Label for="email_address">Enter your email address:</Label>
      <Input name="email_address" />
    </Form>
  );
}
