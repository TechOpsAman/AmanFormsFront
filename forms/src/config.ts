import * as env from "env-var";

export const config = {
  compositor: {
    compositorConnectionString: env
      .get("COMPOSITOR_CONNECTION_URL")
      .default("/api/compositor")
      .asString(),
    serviceName: env
      .get("ANSWERS_SERVICE_NAME")
      .default("answers-service")
      .asString(),
  },
  answersService: {
    answersCrudConnectionString: env
      .get("ANSWERS_CRUD_CONNECTION_URL")
      .default("/api/answers")
      .asString(),
    serviceName: env
      .get("ANSWERS_SERVICE_NAME")
      .default("answers-service")
      .asString(),
  },
  questionsService: {
    questionsCrudConnectionString: env
      .get("QUESTIONS_CRUD_CONNECTION_URL")
      .default("/api/questions")
      .asString(),
    serviceName: env
      .get("QUESTIONS_SERVICE_NAME")
      .default("questions-service")
      .asString(),
  },
  website: {
    address: env.get('FRONTEND_URL').default('/').asString()
  }
};
