import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps { //extender as propriedades do Checkbox nativa do Radix-ui
}

export function Checkbox(props: CheckboxProps) { //pego então todas as "{...props}" de 'CheckboxProps' e passo pra dentro do elemento '.Root' p/ usar a partir dele

  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}