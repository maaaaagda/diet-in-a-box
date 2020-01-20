import { useMutate } from 'restful-react'
import { DailyDiet } from 'src/models'

type CreateDailyDietMutation = Omit<DailyDiet, '_id'>

export const useCreateDailyDietMutation = () =>
  useMutate<DailyDiet, any, any, CreateDailyDietMutation>({
    verb: 'POST',
    path: `/daily-diets`,
  })
