/*import React from 'react'
import { MealProduct } from 'src/models'
import { Select, ItemRenderer } from '@blueprintjs/select'
import { MenuItem, Button } from '@blueprintjs/core'
import { useSearchMealQuery } from 'src/rest'

const renderMeal: ItemRenderer<MealProduct> = (
  meal,
  { handleClick, modifiers }
) => {
  if (!modifiers.matchesPredicate) {
    return null
  }
  return (
    <MenuItem
      active={modifiers.active}
      key={meal.name}
      onClick={handleClick}
      text={meal.name}
      label={`${Math.round(meal.kcal)} kcal`}
    />
  )
}

const MealSelect = Select.ofType<MealProduct>()

type MealInputQueryingProps = {
  addMeal: (product: Meal) => void
  query: string
  setQuery: (query: string) => void
}
const MealSelectQuerying = ({
  addMeal,
  query,
  setQuery,
}: MealInputQueryingProps) => {
  const { data } = useSearchMealQuery({ name: query })

  return (
    <MealSelect
      items={data || []}
      itemRenderer={renderMeal}
      noResults={<MenuItem disabled={true} text="Brak wyników." />}
      onItemSelect={item =>
        renderMeal({ productId: item._id, weight: 1, name: item.name })
      }
      query={query}
      onQueryChange={setQuery}>
      <Button text="Dodaj produkt" rightIcon="double-caret-vertical" />
      </IngredientSelect>
  )
}*/

export type ABC = null
