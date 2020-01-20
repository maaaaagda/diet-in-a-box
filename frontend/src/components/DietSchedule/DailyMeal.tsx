import React from 'react'
import { Meal } from 'src/models'
import styles from './DailyMeal.module.scss'
import classnames from 'classnames'
import { Icon } from '@blueprintjs/core'

type Props = {
  meal: Nullable<Meal>
  editable?: boolean
}

export type DietMealProps = Props

const DailyMeal = ({ meal, editable }: Props) => (
  <div
    className={classnames(
      styles.dailyMeal,
      editable && styles.dailyMeal_editable
    )}>
    {meal ? (
      meal.name || 'name missing'
    ) : (
      <div className={styles.editButton}>
        <Icon
          icon={'add'}
          iconSize={Icon.SIZE_STANDARD}
          className={styles.editButtonIcon}
        />
      </div>
    )}
  </div>
)

export { DailyMeal }
