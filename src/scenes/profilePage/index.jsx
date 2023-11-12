import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostsWidget from '../widgets/PostsWidget'
import MyPostWidget from '../widgets/MyPostWidget'
import { Box, useMediaQuery } from '@mui/material'
import UserWidget from '../widgets/UserWidget'
import Navbar from '../navbar'
import FriendListWidget from '../widgets/FriendListWidget'

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const { userId } = useParams()
  const token = useSelector((state) => state.token)
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)')

  const getProfile = async () => {
    const response = await fetch(`http://localhost:3001/user/${userId}`, {
      method: 'GET',
      headers: { jwtoken: token },
    })
    const data = await response.json()
    setUser(data)
  }
  useEffect(() => {
    getProfile()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage
