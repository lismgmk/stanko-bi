import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { TypographyProps } from '@mui/system'
import { PS_BACKGROUND_BUTTON_PRIMARY_BLUE } from '../../theme'

export const CardsTitleH2 = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: 8,
  },
  marginTop: 11,
}))

export const sxResponsiveContainerWeight = {
  height: 822,
}
export const ButtonSeeAll = styled(Button)<ButtonProps>(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '19.3px',
  background: PS_BACKGROUND_BUTTON_PRIMARY_BLUE,
  borderRadius: 30,
  color: theme.palette.primary.main,
  padding: '21px 45px',
  marginTop: 32,
  marginBottom: 124,
  '&: hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
}))
