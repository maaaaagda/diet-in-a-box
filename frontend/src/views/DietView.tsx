import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { DietSchedule } from 'src/components/DietSchedule'
import { useDietQuery, useDailyDietListQuery } from 'src/rest'
import { DailyDiet } from 'src/models'

type Props = {
  editable: boolean
}

const StatefulDietSchedule = ({
  dailyDiets,
  dietId,
  editable,
}: { dietId: string; dailyDiets: DailyDiet[] } & Props) => {
  const [statefulDailyDiet, setDailyDiets] = useState(dailyDiets)

  return (
    <DietSchedule
      dietId={dietId}
      dailyDiets={statefulDailyDiet}
      editable={editable}
      setDailyDiets={setDailyDiets}
    />
  )
}

const DietView = ({ editable }: Props) => {
  const { dietId } = useParams()

  const { data: diet } = useDietQuery({ _id: dietId! })
  const { data: dailyDiets } = useDailyDietListQuery({ dietId: dietId! })

  return (
    <Container fluid={true}>
      {diet ? (
        <h1>Dieta {diet.name}</h1>
      ) : (
        <h1 className="bp3-skeleton">Dieta abc</h1>
      )}
      {dailyDiets && (
        <StatefulDietSchedule
          dietId={dietId!}
          dailyDiets={dailyDiets}
          editable={editable}
        />
      )}
    </Container>
  )
}

export { DietView }
