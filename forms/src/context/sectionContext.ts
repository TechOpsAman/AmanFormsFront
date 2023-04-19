import { createContext } from 'react';
import { ISurveyAnswers } from '../interfaces/answers/iSurvey';
import { ISection } from '../interfaces/answers/iSection';

export const AnswerContext = createContext<ISurveyAnswers>({ surveyId: '', userId: '', content: [] as ISection[]  });