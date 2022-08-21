import { SvgIcon, Grid } from '@mui/material'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import { socialNetworks } from '../../staticData'

export const SocialIconBox: NextPage = () => {
  return (
    <Grid container justifyContent={'center'} spacing={1.2}>
      {socialNetworks.map((icon) => {
        return (
          <Grid key={nanoid()} item>
            <SvgIcon
              sx={{
                color: 'primary.dark',
              }}
              component={icon.svgElem}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
