import jwtDecode from "jwt-decode";
import cookies from "js-cookie";
import { environment } from "../data/config/globals";
import { IUser } from "../interfaces/user";

export class AuthService {
  static getUser = () => {
    // only for react-scripts start
    // if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_IS_DOCKER) {
    //     cookies.set(
    //         environment.accessTokenName,
    //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTY4ODMyNDIwM2ZjNDAwNDM1OTFhYSIsIm5hbWUiOnsiZmlyc3ROYW1lIjoi16DXmdeZ16fXmSIsImxhc3ROYW1lIjoi15DXk9eZ15PXoSJ9LCJkaXNwbGF5TmFtZSI6InQyMzQ1ODc4OUBqZWxsby5jb20iLCJyYW5rIjoibWVnYSIsImpvYiI6Iteo15XXpteXIiwiaWF0IjoxNjI3MTMxNzExLCJleHAiOjIwMDAwMDAwMDB9.yxis0RbaKM9--HPyq34BSZ7QhY8urnyzRo7OpK6GA-4',
    //     );
    //     console.log('Development Environment, using default auth cookie');
    // }

    const accessToken = cookies.get(environment.accessTokenName);

    if (!accessToken) {
      console.log("No access token");
      AuthService.logout();
      return null;
    }

    const decodedToken = AuthService.parseUserToken(accessToken);

    if (!decodedToken) {
      console.log("Invalid access token");
      AuthService.logout();
      return null;
    }
    console.log(decodedToken);
    return decodedToken;
  };

  static logout = () => {
    console.log("logout and login back in");
    cookies.remove(environment.accessTokenName);
    window.location.replace(
      `${environment.api.login}?RelayState=${window.location.href}`
    );
  };

  static parseUserToken = (token: string) => {
    try {
      return jwtDecode(token) as IUser & { exp: number; iat: number };
    } catch (error) {
      return null;
    }
  };
}
