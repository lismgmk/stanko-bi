import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const PrimaryLineButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '16.9px',
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  height: '80%',
  margin: 0,
  '&: hover': {
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
  },
}))

export const sxResponsiveContainerWeight = {
  pl: { xs: 1.2, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  pr: { xs: 1.2, sm: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  position: 'relative',
  overflow: 'hidden',
  height: 57,
}
