import React from 'react'

import { TouchableOpacity, View } from 'react-native'
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  all,
} from '@shopify/restyle'
import Text from './Text'
import { height, width, createVariant } from '@/Theme/Custom'

export const Button = ({
  onPress,
  title: label = 'Button',
  children,
  style,
  textProps = {},
  ...rest
}) => {
  const variant = createVariant({ themeKey: 'buttonVariants' })
  const props = useRestyle(
    [...all, variant, spacing, border, backgroundColor, height, width],
    { ...rest, style },
  )
  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        {!children && <Text {...textProps}>{label}</Text>}
        {children && children}
      </View>
    </TouchableOpacity>
  )
}

export const RoundedButton = ({
  onPress,
  label,
  children,
  radius,
  ...rest
}) => {
  return (
    <Button
      style={{ borderRadius: radius, ...(rest?.style ?? {}) }}
      {...{ onPress, label, children, ...rest }}
    >
      {children}
    </Button>
  )
}
