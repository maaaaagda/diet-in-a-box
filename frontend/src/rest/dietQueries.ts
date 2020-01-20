import { useGet } from 'restful-react'
import { Query, buildQueryParams, resolveData } from './query'
import { Diet } from 'src/models'

interface DietListQuery extends Query {}

export const useDietListQuery = (query: DietListQuery = {}) =>
  useGet<Diet[]>({
    path: `/diets`,
    queryParams: buildQueryParams(query),
    resolve: resolveData<Diet[]>(),
  })

type DietQuery = {
  _id: string
}

export const useDietQuery = (query: DietQuery) =>
  useGet<Diet>({
    path: `/diets/${query._id}`,
    resolve: resolveData<Diet>(),
  })
