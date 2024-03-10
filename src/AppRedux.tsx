import React from 'react';
import { useAppSelector } from './hooks/hooks';

function AppRedux() {

  // interface IDeposit {
  //   depositId: string
  //   rate: number,
  //   interest: {
  //     monthly: number,
  //     annual: number,
  //     finally: number,
  //   },
  //   payout: {
  //     capitalization: string,
  //     frequency: string,
  //   },
  //   period: {
  //     years: number,
  //     days: number
  //   },
  //   bankName: string,
  //   bankLocation: string,
  //   bankRank: number,
  //   bankRating: string,
  //   depositName: string,
  //   minDeposit: number,
  //   note: string,
  //   url: string
  // }

  // interface IDepositsList extends Array<IDeposit> {}
  // type DepositListType = IDeposit[]

  // const deposit1: IDeposit = {
  //   depositId: "1",
  //   rate: 17.85,
  //   interest: {
  //     monthly: 17.59,
  //     annual: 19.08,
  //     finally: 17.85,
  //   },
  //   payout: {
  //     capitalization: 'выплата',
  //     frequency: "в конце",
  //   },
  //   period: {
  //     years: 0.25,
  //     days: 91
  //   },
  //   bankName: "АК Барс",
  //   bankLocation: "в 66 городах",
  //   bankRank: 18,
  //   bankRating: "ruA",
  //   depositName: "Долгожданная весна",
  //   minDeposit: 10,
  //   note: "максимум 100к",
  //   url: "# url"
  //   // url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/"
  // }
  // const deposit2: IDeposit = {
  //   depositId: "1",
  //   rate: 16.9,
  //   interest: {
  //     monthly: 16.9,
  //     annual: 18.27,
  //     finally: 17.5,
  //   },
  //   payout: {
  //     capitalization: 'капитал',
  //     frequency: "ежемес",
  //   },
  //   period: {
  //     years: 0.5,
  //     days: 181
  //   },
  //   bankName: "Свой банк",
  //   bankLocation: "дистант",
  //   bankRank: 220,
  //   bankRating: "нет",
  //   depositName: "Свой вклад",
  //   minDeposit: 300,
  //   note: "для новых",
  //   url: "# url"
  //   // url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/"
  // }

  // const depositsList: DepositListType = [deposit1, deposit2]
  // // const depositsss: DepositListType = useAppSelector()
  // const {deps} = useAppSelector(state => state.depositsSlice)

  

  return (
    <div className="App">
      <div className='header__container'>
      <div>место</div>  
          <div>ставка</div>  
          <div>ежемесячно</div>  
          <div>ежегодно</div>  
          <div>в конце</div>
          <div>выплата %</div>
          <div>выплата %</div>
          <div>срок лет</div>
          <div>срок дней</div>
          <div>банк</div>
          <div>регион</div>
          <div>активы место</div>
          <div>рейтинг</div>
          <div>вклад</div>
          <div>мин. сумма</div>
          <div>примечание</div>
          <div>ссылка</div>
      </div>
      <div >
        {/* {depositsList.map((dep, i) => {
          return (
            <div className='deposit__container'>
            <div>{i + 1}</div>
            <div>{dep.rate}%</div>
            <div>{dep.interest.monthly}%</div>
            <div>{dep.interest.annual}%</div>
            <div>{dep.interest.finally}%</div>
            <div>{dep.payout.capitalization}</div>
            <div>{dep.payout.frequency}</div>
            <div>{dep.period.years}</div>
            <div>{dep.period.days}</div>
            <div>{dep.bankName}</div>
            <div>{dep.bankLocation}</div>
            <div>{dep.bankRank}</div>
            <div>{dep.bankRating}</div>
            <div>{dep.depositName}</div>
            <div>{dep.minDeposit}</div>
            <div>{dep.note}</div>
            <div>{dep.url}</div>
            </div>
          )
        })} */}
      </div>
        
    </div>
  );
}

export default AppRedux;
