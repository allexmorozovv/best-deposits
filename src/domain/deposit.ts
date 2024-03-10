
export interface Deposit {
  depositId: string
  name: string,
  rate: number,
  interest: "monthly" | "annual" | "finally",
  // capitalization: true,
  period: number,
  bankId: string,
  min: number,
  max: number,
  replenishment: number,
  newClient: boolean,
  finuslugi: boolean,
  retiree: boolean,
  url: string,
  note: string
}

export interface IDeposit {
  depositId: string,
  bankName: string,
  bankLogo: string,
  name: string,
  rate: number,
  interest: "monthly" | "annual" | "finally",
  // capitalization: true,
  period: number,
  bankId: string,
  min: number,
  max: number,
  replenishment: number,
  newClient: boolean,
  finuslugi: boolean,
  retiree: boolean,
  url: string,
  note: string
}

// 
// let id = crypto.randomUUID()
// console.log(id);



export const mockDeposits: Deposit[] = [
  {
    depositId: crypto.randomUUID(),
    rate: 15.85,
    name: "весна копия",
    interest:  "finally",
    // capitalization: true,
    period: 91,
    bankId: "akbars",
    min: 10_000,
    max: 100_000,
    replenishment: 0,
    newClient: false,
    finuslugi: false,
    retiree: false,
    url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
    note: ""
  },
  {
    depositId: crypto.randomUUID(),
    rate: 17.85,
    name: "весна",
    interest:  "finally",
    // capitalization: true,
    period: 91,
    bankId: "akbars",
    min: 10_000,
    max: 100_000,
    replenishment: 0,
    newClient: false,
    finuslugi: false,
    retiree: false,
    url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
    note: ""
  },
  {
    depositId: crypto.randomUUID(),
    rate: 16.9,
    name: "свой вклад",
    interest:  "monthly",
    // capitalization: true,  
    period: 181,
    bankId: "gazneftbank",
    min: 300_000,
    max: 1_400_000,
    replenishment: 151,
    newClient: false,
    finuslugi: true,
    retiree: false,
    url: "https://svoi.ru/deposits/svoy-vklad-promo/",
    note: ""

  },
  {
    depositId: crypto.randomUUID(),
    rate: 17.50,
    name: "дома надежно",
    interest:  "finally",
    // capitalization: true,
    period: 181,
    bankId: "roscap",
    min: 1_000_000,
    max: 1_400_000,
    replenishment: 0,
    newClient: false,
    finuslugi: false,
    retiree: false,
    url: "https://domrfbank.ru/deposits/",
    note: ""

  },
  {
    depositId: crypto.randomUUID(),
    rate: 17,
    name: "хит",
    interest:  "finally",
    // capitalization: true,
    period: 100,
    bankId: "resocreditbank",
    min: 50_000,
    max: 1_400_000,
    replenishment: 0,
    newClient: true,
    finuslugi: true,
    retiree: false,
    url: "https://www.itb.ru/personal/savings/deposit/hit/",
    note: ""

  },
  {
    depositId: crypto.randomUUID(),
    rate: 17,
    name: "точно в цель",
    interest:  "finally",
    // capitalization: true,
    period: 125,
    bankId: "rsb",
    min: 100_000,
    max: 1_400_000,
    replenishment: 0,
    newClient: false,
    finuslugi: false,
    retiree: false,
    url: "https://www.itb.ru/personal/savings/deposit/right-on-target/",
    note: ""
  },
  {
    depositId: crypto.randomUUID(),
    rate: 17,
    name: "пенсионный",
    interest:  "finally",
    // capitalization: true,
    period: 125,
    bankId: "mts-bank",
    min: 100_000,
    max: 1_400_000,
    replenishment: 0,
    newClient: false,
    finuslugi: false,
    retiree: true,
    url: "https://www.itb.ru/personal/savings/deposit/right-on-target/",
    note: ""
  },
];