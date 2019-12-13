import React from 'react'
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '160px',
    height: '42px'
  }
})
export default function Button(props: ButtonProps) {
  const classes = useStyles()
  console.log('classes: ', classes);
  const { children, ...restProps } = props
  return (
    <MuiButton {...restProps}>{children}</MuiButton>
  )
}