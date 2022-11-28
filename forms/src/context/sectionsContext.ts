import { iQuestion } from "../interfaces/iQuestion";
import { createContext } from "react";

export const sectionsContext = createContext<iQuestion[]>([]);
