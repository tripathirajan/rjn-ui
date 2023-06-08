import React from 'react'
import { Icon } from '@iconify/react'
import { default as squareFill } from '@iconify-icons/eva/square-fill'
import { default as minusSquareFill } from '@iconify-icons/eva/minus-square-fill'
import { default as checkmarkSquare2Fill } from '@iconify-icons/eva/checkmark-square-2-fill'

const ICON_MEDIUM = { width: 24, height: 24 }
const ICON_SMALL = { width: 20, height: 20 }

export default function Checkbox(theme: any) {
  return {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
        icon: <Icon icon={squareFill} {...ICON_MEDIUM} />,
        checkedIcon: <Icon icon={checkmarkSquare2Fill} {...ICON_MEDIUM} />,
        indeterminateIcon: <Icon icon={minusSquareFill} {...ICON_MEDIUM} />,
      },

      styleOverrides: {
        root: {
          padding: 8,
          '& svg[font-size="small"]': { ...ICON_SMALL },
          '&$disabled': {
            color: `${theme.palette.action.disabled} !important`,
          },
        },
      },
    },
  }
}