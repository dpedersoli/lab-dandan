import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    size: 'md'
  },
  //isso é inútil hoje já que na nova atualização do "Storybook" ele já traz essa funcionalidade sem precisar diso
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      contrle: {
        type: 'inline-radio'
      }
    }
  }
  //isso é inútil hoje já que na nova atualização do "Storybook" ele já traz essa funcionalidade sem precisar diso
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true, 
    children: (
      <p>Text w/ 'p' tag</p>
    ) 
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}