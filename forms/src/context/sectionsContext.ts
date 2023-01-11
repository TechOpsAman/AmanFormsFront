import { IQuestion } from "../interfaces/questions/iQuestion";
import { createContext } from "react";

export let sectionsContext = createContext<IQuestion[]>([]);
