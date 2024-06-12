import { useNavigate } from "react-router-dom";
import { CustomButton } from "../AcademicStyles";
import { HiMiniPlus } from "react-icons/hi2";
import { ButtonRow } from "../../../ui/Button";

export default function TLEAButton({ showSubmit, navlink, append }) {
  const navigate = useNavigate();
  return (
    <ButtonRow>
      <CustomButton type="button" onClick={append}>
        <HiMiniPlus />
      </CustomButton>
      {showSubmit && <CustomButton>Submit</CustomButton>}
      <CustomButton type="button" onClick={() => navigate(navlink)}>
        Next
      </CustomButton>
    </ButtonRow>
  );
}
