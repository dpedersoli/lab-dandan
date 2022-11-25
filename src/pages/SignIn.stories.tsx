import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn'

export default {
  title: 'Pages/ Sign in',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: ({ canvasElement }) => { //isso é uma função -> ela irá executar os testes automatizados -> a função 'play' aceita várias coisas como parâmetro
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seue-mail'), 'daniel@email.com') //digita algum texto em algum campo do form -> que neste caso eu dei um 'get' no texto de placeholder específico contendo os caracteres específicos para poder selecionar o seu 'input' e passo para dentro do valor do 'input' o valor que inseri na segunda aspas ('')
    userEvent.type(canvas.getByPlaceholderText('******'), '123456')

    userEvent.click(canvas.getByRole('button')) //procuro por/ e seleciono o elemento único que tem o papel de ser um 'button' (que é o único 'button' da página) e passo nele a função de 'click'
  }
}