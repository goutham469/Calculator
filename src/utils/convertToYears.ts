import { FormType } from "../types";

export const convertToYears = (time: number, unit: FormType['timeUnit']) =>
{
  switch (unit)
  {
    case 'month': return time / 12;
    case 'week': return time / 52;
    case 'day': return time / 365;
    default: return time;
  }
};