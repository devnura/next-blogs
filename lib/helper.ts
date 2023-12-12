import { Response } from "../app/types";

export const buildResponse = (
  status: boolean,
  code: number,
  message: string,
  data?: any
): Response => {
  return {
    status: status,
    code: code,
    message: message,
    data: data,
  };
};
