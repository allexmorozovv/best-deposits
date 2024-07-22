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
  inputValue2: string
}
export type TermDepositType = {
  min: number,
  max: number
}

export const InterestTypes =  ["no matter", "monthly", "finally"] as const;
export type InterestType =  typeof InterestTypes[number];

export const InterestTypes2 = [
  {
    name: "no matter",
    label: "не важно"
  },
  {
    name: "monthly",
    label: "ежемесячно"
  },
  {
    name: "finally",
    label: "в конце"
  }
] as const

export type InterestType2 = typeof InterestTypes2[number]






  // superCheckbox !!     ок?   online     replenishment
  // sum component !!     локальный стейт в компоненте ок?
  // sort by rate  !!     sort by income + варианты(???)   
  // diapason period inputs        event.preventDefault onSubmit  
  // interest filter radio   посмотреть InterestFilters => Filters => App  InterestFilters types  form no form
  // logo bank !!   типы банков и депозитов
  // main button 
  // InterestFilters handleChange event type


  
  // checkbox 3 component с одним(другим) значением value OnChange label
  // InterestFilter map
  // PeriodFilter map + новая структура
  // filters App