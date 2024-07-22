import { getDeposits } from "./getDeposits"

jest.mock("../mockDB/getEvents.ts", () => ({
  async getEvents() {
    return [
      {
        bankId: 'mkb',
        deposits: [{ depositId: 'mkb13' }],
        createDate: new Date("2024-03-13")
      },
      {
        bankId: 'mkb',
        deposits: [{ depositId: 'mkb14' }],
        createDate: new Date("2024-03-14")
      },
      {
        bankId: 'mkb',
        deposits: [{ depositId: 'mkb15' }],
        createDate: new Date("2024-03-15")
      },
      {
        bankId: 'sber',
        deposits: [{ depositId: 'sber13' }],
        createDate:new Date("2024-03-13")
      },
      {
        bankId: 'sber',
        deposits: [{ depositId: 'sber15' }],
        createDate:new Date("2024-03-15")
      },
      {
        bankId: 'psb',
        deposits: [{ depositId: 'psb13' }],
        createDate: new Date("2024-03-13")
      },
      {
        bankId: 'psb',
        deposits: [{ depositId: 'psb20' }],
        createDate: new Date("2024-03-20")
      }
    ];
  }
}))


test('get Deposits', () => {
  const expectedData = [
    { depositId: 'mkb15' },
    { depositId: 'psb13' },
    { depositId: 'sber15' },
  ];
  getDeposits(new Date("2024-03-18")).then((data) => {
    const sortedData = data.sort((a, b) => a.depositId.localeCompare(b.depositId));

    expect(sortedData).toEqual(expectedData);
  })
})
