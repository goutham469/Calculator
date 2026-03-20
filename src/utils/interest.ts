export const calculateSimpleInterest = (p:number, r:number, t:number) =>
{
  const si = (p * r * t) / 100;
  return si;
};

export const calculateCompoundInterest = (p:number, r:number, t:number, n:number) =>
{
  const amount = p * Math.pow(1 + r / (100 * n), n * t);
  return Math.round(amount)-p;
};

