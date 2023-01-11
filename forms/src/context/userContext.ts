import { createContext, useContext } from "react";
import { IUser } from "../interfaces/user";

export const UserContext = createContext<{
  user: IUser;
  setNewUser: any;
}>({
  user: {
    id: "",
    adfsId: "",
    name: {
      firstName: "",
      lastName: "",
    },
    displayName: "",
    unit: "",
    rank: "",
  },
  setNewUser: () => {},
});

export function useUser() {
  return useContext(UserContext);
}
