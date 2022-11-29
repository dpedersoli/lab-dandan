import {themes} from '@storybook/theming'
import { initialize, mswDecorator} from 'msw-storybook-addon'

import '../src/styles/global.css';


//inicializa o MSW
initialize({
  onUnhandledRequest: 'bypass' //para ele não acusar no console os testes que não estão sendo feitos
})

//Provê o addon decorator do MSW de forma global
export const decorators = [mswDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}