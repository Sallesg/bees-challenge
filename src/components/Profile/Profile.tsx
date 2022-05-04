import { useContext } from "react";
import { FullNameStyle } from "../../pages/Home/styles";
import { LoginContext } from "../../context/LoginContext";

export const Profile = () => {
  const { username, setUsername }: any = useContext(LoginContext);
  const onlyLetters = (value: string) => {
    const ruleForLetter = value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    return ruleForLetter;
  };

  return (
    <input
      className={FullNameStyle()}
      required
      onChange={(event) => {
        setUsername(onlyLetters(event.target.value));
      }}
      type="text"
      placeholder="Full name"
      value={username}
      pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
    />
  );
};
