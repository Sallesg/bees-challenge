import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  customer: string | undefined;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({});

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [username, setUsername] = useState();

  return (
    <AuthContext.Provider value={{ username }}>
      {props.children}
    </AuthContext.Provider>
  );
};
