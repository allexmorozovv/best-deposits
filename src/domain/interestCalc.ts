

// выплата ежемесячно  === ежемесячный
// выплата ежемесячно => ежегодный???

// выплата в конце === в конце
// выплата в конце => ежемесячный???
// выплата в конце   => ежегодный???

// 100000
// 1 - 4438.11
// 104438.11
// 2 - 4635.08
// 109073.19
// 3 - 4840.79
// 113913.98
// 4 - 5055.63
// 118969.61 - 100000  == 18969.61 


// 1 => 100_000*0.169/12 == 1408
// 2 => (100_000 +1408)*0.169/12 == 1428
// 3 => (101_408+ 1428)*0.169/12 == 1448
// 4 => (102_836+1448)*0.169/12 = 1468
// 5 => (104_248+1468)*0.169/12 = 1488
// 6 => (105_716+1488)*0.169/12 = 1509 => 108713
// 7 => (107_204+1509)*0.169/12 = 



// Rэф = P/S * 365/d * 100

// Rэф. – эффективная ставка
// P - проценты, начисленные за весь период вклада
// S - сумма вклада
// d - срок вклада в днях

// Эта формула подходит для всех вкладов, с любыми сроками и любой периодичностью капитализации. Она просто считает отношение полученного дохода к начальной сумме вклада, приводя эту величину к годовым процентам. Лишь небольшая погрешность может присутствовать здесь, если период вклада или его часть выпала на високосный год.



// фиксированная ввыплата в конце периода
// сумма на конец периода × ставка / 100 × доля дней в периоде относительно дней в году = проценты, ₽

// капитализация выплата процентов раз в месяц 
// сумма на конец периода × ((1 + ставка / 100 × доля дней в периоде относительно дней в году) ^ (количество операций по капитализации)) − сумма на конец периода = проценты, ₽


let days = 91;
let finallyPercent = 0.1785;

const finally2year = (finallyPercent: number, days: number) => {
  let durationInYears = days / 365;
  return (1 + finallyPercent * durationInYears) ** (1 / durationInYears) - 1;
}

const year2month = (yearPercentage: number) => {
  return ((1 + yearPercentage) ** (1/12) - 1) * 12;
}

const month2year = (monthPercentage: number) => 0
const year2finally = (yearPercentage: number, days: number) => 0

const month2finally = (monthPercentage: number, days: number) => {
  return year2finally(month2year(monthPercentage), days)
}


// function deposit2rates(deposit) {

//   return {
//     month: 0,
//     year: 0,
//     finally: 0,
//   }
// }

// https://www.sravni.ru/vklady/info/formula-rascheta-procentov-po-vkladam/

// https://journal.tinkoff.ru/guide/deposit-interests/?ysclid=lta4tpdhv2924382320

// https://calcus.ru/kalkulyator-vkladov?input=eyJjdXJyZW5jeSI6IlJVQiIsInN1bSI6IjExMzkxMy45OCIsInBlcmlvZCI6IjkxIiwicGVyaW9kX3R5cGUiOiJEIiwiZGF0ZV9zdGFydCI6IjIwMjQtMDMtMDIiLCJyYXRlX3R5cGUiOiIxIiwicGVyY2VudCI6IjE3Ljg1IiwicGF5b3V0X2ZyZXF1ZW5jeSI6IkVORCJ9

export const interestCalc = () => {}


// (1+(0.1785/4))**4 = 1,1908077726 

// (1 + 0.1759 / 12) ** 12 - 1 ≈ 0.1908077726 
// (1 + 0.1759 / 12) ** 12 ≈ 0.1908077726 + 1
// (1 + 0.1759 / 12)≈ (0.1908077726 + 1) ** (1/12)
// 0.1759 / 12 ≈ (0.1908077726 + 1) ** (1/12) - 1
// 0.1759 ≈ ((0.1908077726 + 1) ** (1/12) - 1) * 12

// 15,85%	15,85%	17,05%	16,07%	выплата/капитализация	ежемесячно		0,26 	95 		0,26 	БЖФ Банк
// 16,00%	15,79%	16,99%	16,00%	выплата	в конце		0,25 	91 		0,25 	БСПБ


// ○ 17,85% (17,59%/19,08%/17,85%), выплата в конце, срок 91 дн., Ак Барс Банк (18 место по активам, рейтинг: ruA- стабильный Эксперт РА, A.ru стабильный НКР, в 66 городах), вклад «Долгожданная весна», от 10 т.р., пополнения нет, снятия нет, досрочно 0,01%. !!!Максимальная сумма вклада - 100 т.р!!! Ставка для новых клиентов при оформлении условно-бесплатной коробки Ничего лишнего.
// ○ 16,9% (16,9%/18,27%/17,5%), капитализация ежемесячно, срок 181 дн., Свой банк (220 место по активам, рейтинг: нет, дистанционно), вклад «Свой вклад Промо (181)», от 300 т.р., пополнение кроме последних 30 дней, снятия нет, досрочно 0,01%. Для новых клиентов (обнуление 91 день) по промокоду Банки.ру
// ○ 16,5% (16,28%/17,55%/16,5%), выплата в конце, срок 91 дн., РЕСО Кредит (126 место по активам, рейтинг: ruA стабильный Эксперт РА, A.ru стабильный НКР, Москва), вклад «Максимум/Старт/Онлайн/Маркетплейс (181)», от 100 т.р., пополнения нет, снятия нет, досрочно 0,01%. Вклад Маркетплейс открывается удаленно через Банки.ру.

// Проценты: Первая цифра - номинальный процент, т.е. столько, сколько указывает банк. В скобках - эквивалентно вкладу с типом выплаты процентов: (ежемесячно/ежегодно/в конце). (Подробнее здесь)
