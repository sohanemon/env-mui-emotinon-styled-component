import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";
import { googlePopup } from "../firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";

const AuthForm = () => {
  const { setUser } = useContext(UserContext);
  const handleLoginWithGoogle = async () => {
    setUser(await googlePopup());
  };

  return (
    <>
      <FormWrapper>
        <MyButton bg='#4081ec' variant='contained'>
          <GoogleIcon /> Continue With Google
        </MyButton>
      </FormWrapper>
    </>
  );
};

export default AuthForm;
const FormWrapper = styled.div``;
const MyButton = styled(Button)`
  background-color: ${({ bg }) => bg};
  display: flex;
  gap: 5px;
  align-items: center;
  &:hover {
    background-color: #e34133;
  }
`;
