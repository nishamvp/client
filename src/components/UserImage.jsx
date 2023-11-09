import { Box } from '@mui/material'

 const UserImage = ({ image, size = '60px' }) => {
  return (
    <Box height={size} width={size}>
      <img
        src={`http://localhost:3001/assets/${image}`}
        height={size}
        width={size}
        alt="user"
        style={{ objectFit:'cover', borderRadius: '50%' }}
      />
    </Box>
  )
}
export default UserImage
