export type RootStackParamList = {
  Home: undefined;
  SimpleInterest: undefined;
  CompoundInterest: undefined;
};

export type FormType = {
  principal:number,
  time:number,
  timeUnit: 'year' | 'month' | 'week' | 'day',
  interestRate:number
}

export type TimeUnitPickerProps = {
  form:FormType,
  handleChange:(key: keyof FormType, value:string) => void;
}