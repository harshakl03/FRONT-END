import {
  HiArchiveBoxXMark,
  HiCheckCircle,
  HiMiniPencilSquare,
} from "react-icons/hi2";
import { CustomDelete } from "../AcademicStyles";

export default function RowButtons({
  showEdit,
  setEdit,
  index,
  remove,
  belongsToSaveData,
}) {
  return showEdit ? (
    <CustomDelete type="button" onClick={() => setEdit(-1)}>
      <HiCheckCircle />
    </CustomDelete>
  ) : (
    <>
      {belongsToSaveData && (
        <CustomDelete type="button" onClick={() => setEdit(index)}>
          <HiMiniPencilSquare />
        </CustomDelete>
      )}
      <CustomDelete type="button" onClick={() => remove(index)}>
        <HiArchiveBoxXMark />
      </CustomDelete>
    </>
  );
}
