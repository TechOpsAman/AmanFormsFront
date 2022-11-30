import { iQuestion } from "../interfaces/iQuestion";
import { createContext } from "react";

export let sectionsContext = createContext<iQuestion[]>([]);
