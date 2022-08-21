import { Grid } from '@mui/material'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import { cardsButtons } from '../../staticData'
import { CardsButton } from './style'

export const ButtonElementsBox: NextPage = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 0.6, mobile: 0.6, sm: 0.6, md: 1.2, lg: 1.2, xl: 1.2 }}
      rowSpacing={1.6}
      sx={{ mb: 4, mt: 4 }}
    >
      {cardsButtons.map((elem) => {
        return (
          <Grid key={nanoid()} item>
            <CardsButton>{elem.name}</CardsButton>
          </Grid>
        )
      })}
    </Grid>
  )
}
