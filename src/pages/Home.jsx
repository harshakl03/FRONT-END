import { useDispatch, useSelector } from "react-redux";
import { addPA } from "../features/PartA/partASlice";
import { addPB } from "../features/PartB/partBSlice";
import { addPC } from "../features/PartC/partCSlice";
import Input from "../ui/Input";

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
      </div>
      <button onClick={() => dispatch(addPA("A"))}>PartA</button>
      <button onClick={() => dispatch(addPB("B"))}>PartB</button>
      <button onClick={() => dispatch(addPC("C"))}>PartC</button>
    </div>
  );
}
