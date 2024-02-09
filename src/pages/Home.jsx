import Input from "../ui/Input";
import Button from "../ui/Button";
import Label from "../ui/Label";

export default function Home() {
  return (
    <div>
      Home
      <div>
        <Input />
        <br />
        <Label />
        <Input />
      </div>
      <Button to="/employee/part-a">PartA</Button>
      <Button to="/employee/part-b/cat1">PartB</Button>
      <Button to="/employee/part-c">PartC</Button>
      <Button to="/login">Log In</Button>
      <Button to="/register">Register</Button>
      <Button>Normal</Button>
    </div>
  );
}
