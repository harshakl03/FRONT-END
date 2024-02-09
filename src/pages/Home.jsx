import { useSelector } from "react-redux";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Home() {
  const { name: nameA } = useSelector((state) => state.partA);
  const { name: nameB } = useSelector((state) => state.partB);
  const { name: nameC } = useSelector((state) => state.partC);
  return (
    <div>
      Home {nameA + nameB + nameC}
      <div>
        <Input />
        <br />
        <Input />
      </div>
      <Button to="/employee/part-a">PartA</Button>
      <Button to="/employee/part-b/cat1">PartB</Button>
      <Button to="/employee/part-c">PartC</Button>
      <Button to="/login">Log In</Button>
      <Button to="/register">Register</Button>
    </div>
  );
}
