export interface Filters {
  period: [number, number],
  period_inputs: PeriodInputsType,
  term_deposit: TermDepositType,
  interest: InterestType
}

// зачем мы пишем interface, а пользуемся PeriodButtonsType?
export type PeriodButtonsType = Filters["period"]


export type PeriodInputsType = {
  inputValue1: string,
  inputValue2:string
}
export type TermDepositType = {
  min: number,
  max: number
}

export const InterestTypes =  ["no matter", "monthly", "finally"] as const;
export type InterestType =  typeof InterestTypes[number];