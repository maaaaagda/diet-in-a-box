import { useGet } from 'restful-react'
import { resolveData } from './query'
import { DailyDiet } from 'src/models/dailyDiet'

type DailyDietListQuery = {
  dietId: string
}

export const useDailyDietListQuery = (query: DailyDietListQuery) =>
  useGet<DailyDiet[]>({
    path: `/daily-diets`,
    queryParams: { dietId: query.dietId },
    resolve: resolveData<DailyDiet[]>(),
  })
