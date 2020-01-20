import React, { useState } from 'react'
import { MEAL_TIME, MEAL_TIME_KEYS, DailyDiet } from 'src/models'
import { Table } from 'react-bootstrap'
import styles from './DietSchedule.module.scss'
import { Button } from '@blueprintjs/core'
import { useCreateDailyDietMutation } from 'src/rest'
import { DailyDietComponent } from './DailyDiet'

const MEAL_TIME_TRANSLATION: Record<MEAL_TIME, string> = {
  breakfast: 'śniadanie',
  afternoonSnack: 'popołudniowa przekąska',
  dinner: 'kolacja',
  lunch: 'lunch',
  morningSnack: 'podwieczorek',
}

type Props = {
  dietId: string
  dailyDiets: DailyDiet[]
  editable?: boolean
  setDailyDiets: (diets: DailyDiet[]) => any
}

export type DietScheduleProps = Props

const DietSchedule = ({
  dietId,
  dailyDiets,
  editable,
  setDailyDiets,
}: Props) => {
  const { mutate: createDailyDiet } = useCreateDailyDietMutation()

  const createDefaultDailyDiet = () => ({
    dietId,
    date: new Date().toUTCString(),
    dailyMeals: {
      breakfast: null,
      morningSnack: null,
      lunch: null,
      afternoonSnack: null,
      dinner: null,
    },
  })

  const [editedDiet, setEditedDiet] = useState<Omit<DailyDiet, '_id'>>(
    createDefaultDailyDiet()
  )

  const removeDailyDiet = (id: string) => {
    setDailyDiets(dailyDiets.filter(p => p._id !== id))
  }

  const setDailyDietDate = (date: Date, idx: number) => {
    const dailyDietsCopy = [...dailyDiets]
    dailyDietsCopy[idx].date = date.toString()
    setDailyDiets(dailyDietsCopy)
  }

  const addDailyDiet = () => {
    if (editedDiet) {
      createDailyDiet(editedDiet).then(resp => {
        setDailyDiets([...dailyDiets, resp])
        setEditedDiet(createDefaultDailyDiet())
      })
    }
  }

  const sortedDiets = [...dailyDiets].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th>dzień</th>
          {MEAL_TIME_KEYS.map(key => (
            <th key={key}>{MEAL_TIME_TRANSLATION[key]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedDiets.map((diet, idx) => (
          <DailyDietComponent
            key={diet._id}
            diet={diet}
            editable={editable}
            setDailyDietDate={v => setDailyDietDate(v, idx)}
            removeDailyDiet={() => removeDailyDiet(diet._id)}
          />
        ))}
        <DailyDietComponent
          diet={editedDiet}
          editable={editable}
          setDailyDietDate={v =>
            setEditedDiet({ ...editedDiet, date: v.toUTCString() })
          }
          removeDailyDiet={() => setEditedDiet(createDefaultDailyDiet())}
        />
        <tr>
          <Button
            text="dodaj dzień"
            icon="add"
            intent="success"
            onClick={addDailyDiet}
          />
        </tr>
      </tbody>
    </Table>
  )
}

export { DietSchedule }
