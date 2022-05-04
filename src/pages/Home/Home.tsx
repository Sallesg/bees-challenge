import { ChangeEvent, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Content, BeeImage } from "./styles";
import { LoginContext } from "../../context/LoginContext";
import { button } from "../../GlobalCss";
import bee from "../../assets/bee.png";
import { Profile } from "../../components/Profile/Profile";

export const Home = () => {
  const { username }: any = useContext(LoginContext);
  const [check, setCheck] = useState(false);
  let navigate = useNavigate();

  const handleLogIn = async () => {
    if (username && !!username.trim() && check) {
      navigate("/breweries");
    }
  };

  const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
    setCheck(e.target.checked);
  };

  return (
    <div className={Wrapper()}>
      <div className={Content()}>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
        <Profile />
        <div>
          <input
            required
            type="checkbox"
            checked={check}
            onChange={handleChecked}
          />
          <label>Are you older than 18 years old?</label>
        </div>
        <button
          onClick={handleLogIn}
          className={
            username && !!username.trim() && check
              ? button({ able: true })
              : button()
          }
        >
          Enter
        </button>
      </div>

      <div className={BeeImage()}>
        <img src={bee} alt="cartoon of a bee" />
      </div>
    </div>
  );
};
