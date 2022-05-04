import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { button } from "../../GlobalCss";
import { HeaderWrapper } from "./styles";

export const LoggedHeader = () => {
  const { username }: any = useContext(LoginContext);

  let navigate = useNavigate();
  function goBack() {
    navigate("/");
  }

  return (
    <div className={HeaderWrapper()}>
      <button className={button({ variant: "back" })} onClick={goBack}>
        Go Back
      </button>
      <h1>{username || "Full Name"}</h1>
    </div>
  );
};
