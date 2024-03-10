import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useDebounce = (value: string, delay: number) => {

  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(()=> {
    const timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timerId)

  }, [value, delay])

  return debouncedValue
}