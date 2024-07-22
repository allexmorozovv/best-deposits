import { UpdateEvent } from "../domain/event"

const random = (min: number, max: number)=> {
  return Math.random() * (max - min) + min;
}
export const getEvents = async(): Promise<UpdateEvent[]> =>  {
  // read ls
  // parse json
  // return array
  const num = random(500, 1000)
  await new Promise((resolve) => {
    setTimeout(()=> {
      resolve(1)
    }, num)
  })
  const json = localStorage.getItem('events');
  
  if (json === null) {
    return [];
  }
  
  try {
    return JSON.parse(json);
  } catch {
    return [];
  }
}

// function sleep(ms: number) {
//  return function(x: any) {
//   return new Promise(resolve => setTimeout( resolve, ms, x))
//  }
// }

