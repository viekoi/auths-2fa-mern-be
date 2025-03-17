import { getEnv } from "../common/utils/get-env";

const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  APP_ORIGIN: getEnv("APP_ORIGIN"),
  PORT: getEnv("PORT", "5000"),
  MONGO_URI: getEnv("MONGO_URI"),

  JWT: {
    SECRET: getEnv("JWT_SECRET"),
    EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "30d"),
  },
  MAILER: {
    SMTP_HOST: getEnv("SMTP_HOST"),
    SMTP_PORT: getEnv("SMTP_PORT"),
    SMTP_SERVICE: getEnv("SMTP_SERVICE"),
    SMTP_MAIL: getEnv("SMTP_MAIL"),
    SMTP_PASSWORD: getEnv("SMTP_PASSWORD"),
  },
});

export const config = appConfig();
