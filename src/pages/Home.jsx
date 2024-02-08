import { useDispatch, useSelector } from "react-redux";
import { addPA } from "../features/PartA/partASlice";
import { addPB } from "../features/PartB/partBSlice";
import { addPC } from "../features/PartC/partCSlice";
import Input from "../ui/Input";
import Button from "../ui/Button";


export default function Home() {
  const { name: nameA } = useSelector((state) => state.partA);
  const { name: nameB } = useSelector((state) => state.partB);
  const { name: nameC } = useSelector((state) => state.partC);
  const dispatch = useDispatch();
  return (
    <div>
      Home {nameA + nameB + nameC}
      <div>
        <Input />
        <br />
        <Input />
      </div>
      <Button onClick={() => dispatch(addPA("A"))}>PartA</Button>
      <Button onClick={() => dispatch(addPB("B"))}>PartB</Button>
      <Button onClick={() => dispatch(addPC("C"))}>PartC</Button>
      <Button>Sign Up</Button>
      <Button>Register</Button>
    </div>
  );
}
