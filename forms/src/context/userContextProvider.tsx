import { useState } from "react";
import { IUser } from "../interfaces/user";
import { UserContext } from "./userContext";

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<IUser>({
    id: "",
    adfsId: "",
    name: {
      firstName: "",
      lastName: "",
    },
    displayName: "",
    unit: "",
    rank: "",
  });

  const setNewUser = (newUser: IUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
