import { Typography, Box, useTheme } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WidgetWrapper from '../../components/WidgetWrapper'
import Friends from '../../components/Friends'
import { setFriends } from '../../state'

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const friends = useSelector((state) => state.user.friends)

  const { palette } = useTheme()
  const dark = palette.neutral.dark

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/user/${userId}/friends`,
      {
        method: 'GET',
        headers: { jwtoken: token },
      },
    )
    const data = await response.json()
    dispatch(setFriends({ friends: data }))
  }
  useEffect(() => {
    getFriends()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: '1.5rem' }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends &&
          friends.map((friend) => {
            return (
              <Friends
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName} `}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
              />
            )
          })}
      </Box>
    </WidgetWrapper>
  )
}

export default FriendListWidget
