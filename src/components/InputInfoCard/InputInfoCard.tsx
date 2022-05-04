import { FormEvent, useRef } from "react";
import checkIcon from "../../assets/check-icon.svg";

interface handleInfo {
  id: number;
  text: string;
  isComplete: boolean;
}

interface InputInfoCardProps {
  info: handleInfo;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: FormEvent) => void;
}

export const InputInfoCard: React.FC<InputInfoCardProps> = ({
  info,
  setInfo,
  handleAdd,
}: InputInfoCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="" onSubmit={handleAdd}>
      <button type="submit">
        <img src={checkIcon} alt="" />
      </button>
      <input
        type="text"
        onChange={(e) => setInfo(e.target.value)}
        value={info.text}
        ref={inputRef}
      />
    </form>
  );
};
