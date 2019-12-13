import React from 'react'
import MuiAvatar, { AvatarProps } from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/styles'
import hoverImg from './hover.svg'


const useStyles = makeStyles({
  root: {
    // width: (props: CustomAvatarProps) => props.size,
    // height: (props) => props.size,
    '&:before': {
      content: '""',
      position: 'absolute',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      background: '#192A3E',
      backgroundImage: `url(${hoverImg})`,
      opacity: 0,
      backgroundRepeat: 'no-repeat'
    },
    '&:hover:before': {
      opacity: .4
    }
  }
})


function Avatar() {
  const classes = useStyles()
  return (
    <MuiAvatar className={classes.root} src='https://d5hmvfql43v8r.cloudfront.net/participant/avatar/ca974984-a287-477b-9fe7-e33024ea7643/avatar.png' />
  )
}

export default Avatar