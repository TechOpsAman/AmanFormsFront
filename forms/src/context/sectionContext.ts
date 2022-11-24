import { createContext, useContext, useState } from 'react';
import { iSurvey } from '../interfaces/iSurvey';
import { iSection } from '../interfaces/iSection';

export const AnswerContext = createContext<iSurvey>({ surveyId: '', userId: '', content: [] as iSection[]  });