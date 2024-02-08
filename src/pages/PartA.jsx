import { useSelector } from "react-redux";

export default function PartA() {
  const { name } = useSelector((state) => state.partA);
  return <div>PartA {name}</div>;
}
