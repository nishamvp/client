import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Form from './Form'

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width:1000)')
  return (
    <Box>
      <Box
        width="100%"
        bgcolor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        bgcolor={theme.palette.background.alt}
        p="2rem 6%"
        m="2rem auto"
        borderRadius="1.5rem"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to Sociopedia, the Social Media for Socialpaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}
export default LoginPage
