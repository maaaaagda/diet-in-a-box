import { ID } from './id'
import { Meal } from './meal'

export const MEAL_TIME_KEYS = [
  'breakfast',
  'morningSnack',
  'lunch',
  'afternoonSnack',
  'dinner',
] as const
export type MEAL_TIME = typeof MEAL_TIME_KEYS[number]
export type DailyMeals = {
  [prop in MEAL_TIME]: Meal | null
}

export type DailyDiet = {
  _id: ID
  dietId: ID
  dailyMeals: DailyMeals
  date: string
}
