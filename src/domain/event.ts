import { BankId } from "./bank";
import { Deposit } from "./deposit";

export interface UpdateEvent {
  bankId: string,
  deposits: Deposit[],
  createDate: Date

}
export const event1: UpdateEvent = {
  bankId: "mkb",
  deposits:[
    {
      depositId: crypto.randomUUID(),
      rate: 14,
      name: " лето ",
      interest:  "finally",
      // capitalization: true,
      period: 80,
      bankId: "mkb",
      min: 100_000,
      max: 1_000_000,
      replenishment: 0,
      newClient: false,
      finuslugi: false,
      retiree: false,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
    {
      depositId: crypto.randomUUID(),
      rate: 15.85,
      name: "лето копия",
      interest:  "finally",
      // capitalization: true,
      period: 181,
      bankId: "mkb",
      min: 100_000,
      max: 1000_000,
      replenishment: 0,
      newClient: false,
      finuslugi: false,
      retiree: false,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
  ],
  createDate: new Date("2024-03-14")
}
export const event2: UpdateEvent = {
  bankId: "akbars",
  deposits:[
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
      finuslugi: true,
      retiree: false,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
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
      retiree: true,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
  ],
  createDate: new Date("2024-03-14")
}
export const event3: UpdateEvent = {
  bankId: "sberbank",
  deposits:[
    {
      depositId: crypto.randomUUID(),
      rate: 16.85,
      name: " осень ",
      interest:  "monthly",
      // capitalization: true,
      period: 91,
      bankId: "sberbank",
      min: 10_000,
      max: 100_000,
      replenishment: 0,
      newClient: true,
      finuslugi: false,
      retiree: false,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
    {
      depositId: crypto.randomUUID(),
      rate: 14.85,
      name: "осень копия",
      interest:  "finally",
      // capitalization: true,
      period: 191,
      bankId: "sberbank",
      min: 100_000,
      max: 1000_000,
      replenishment: 0,
      newClient: false,
      finuslugi: false,
      retiree: false,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
  ],
  createDate:new Date("2024-03-14")
}
export const event4: UpdateEvent = {
  bankId: "mkb",
  deposits:[
    {
      depositId: crypto.randomUUID(),
      rate: 19.85,
      name: " лето ",
      interest:  "finally",
      // capitalization: true,
      period: 125,
      bankId: "mkb",
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
      rate: 18.85,
      name: "лето копия",
      interest:  "finally",
      // capitalization: true,
      period: 181,
      bankId: "mkb",
      min: 100_000,
      max: 1000_000,
      replenishment: 0,
      newClient: false,
      finuslugi: false,
      retiree: false,
      url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/",
      note: ""
    },
  ],
  createDate: new Date("2024-03-14")
}
// new Date('2024-03-14')
export const events: UpdateEvent[] = [event1, event2, event3]