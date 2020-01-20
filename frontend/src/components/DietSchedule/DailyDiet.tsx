import React from 'react'
import { DailyDiet, MEAL_TIME_KEYS } from 'src/models'
import { DailyMeal } from './DailyMeal'
import styles from './DietSchedule.module.scss'
import { DateInput } from '@blueprintjs/datetime'
import { Position, Button } from '@blueprintjs/core'

type Props = {
  diet: Omit<DailyDiet, '_id'>
  editable?: boolean
  setDailyDietDate: (d: Date) => any
  removeDailyDiet: () => any
}

const DailyDietComponent = ({
  diet,
  editable,
  setDailyDietDate,
  removeDailyDiet,
}: Props) => (
  <tr>
    <td>
      <DateInput
        formatDate={date => (date == null ? '' : date.toLocaleDateString())}
        parseDate={str => new Date(Date.parse(str))}
        defaultValue={new Date()}
        onChange={v => setDailyDietDate(v)}
        popoverProps={{ position: Position.BOTTOM }}
      />
    </td>
    {MEAL_TIME_KEYS.map(key => (
      <td key={key} className={styles.tableCell}>
        <DailyMeal meal={diet.dailyMeals[key]} editable={editable} />
      </td>
    ))}
    <td>
      <Button icon="delete" intent="danger" onClick={removeDailyDiet} />
    </td>
  </tr>
)

export { DailyDietComponent }
