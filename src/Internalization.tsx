import { type PropsWithChildren } from "react"
import { IntlProvider } from "react-intl"
import English from '@/lang/eng'

const Internalization = ({children}: PropsWithChildren): JSX.Element => <IntlProvider
  locale="en-gb"
  messages={English}  
>
  {children}
</IntlProvider>

export default Internalization