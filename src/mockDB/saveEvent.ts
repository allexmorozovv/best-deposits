import { UpdateEvent } from "../domain/event";
import { getEvents } from "./getEvents";

export async function saveEvent(event: UpdateEvent): Promise<unknown> {
  const eventsArray = await getEvents();
  eventsArray.push(event)
  localStorage.setItem('events', JSON.stringify(eventsArray))

  // read ls
  // parse json
  // push to array
  // stringify json
  // write ls

  return "ok";
}

// function sleep(ms: number) {
//  return function(x: any) {
//   return new Promise(resolve => setTimeout( resolve, ms, x))
//  }