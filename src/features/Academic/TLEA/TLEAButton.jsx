import { useNavigate } from "react-router-dom";
import { CustomButton } from "../AcademicStyles";
import { HiMiniPlus } from "react-icons/hi2";
import { ButtonRow } from "../../../ui/Button";

export default function TLEAButton({
  submitted,
  setSubmitted,
  navlink,
  append,
}) {
  const navigate = useNavigate();
  return (
    <ButtonRow>
      {submitted ? (
        <>
          <CustomButton type="button" onClick={() => setSubmitted(false)}>
            Edit
          </CustomButton>
          <CustomButton type="button" onClick={() => navigate(navlink)}>
            Next
          </CustomButton>
        </>
      ) : (
        <>
          <CustomButton type="button" onClick={append}>
            <HiMiniPlus />
          </CustomButton>
          <CustomButton>Submit</CustomButton>
        </>
      )}
    </ButtonRow>
  );
}
