import { ReactNode } from 'react'
import './App.css'
// import LoginForm from './containers/LoginForm'
import ParentComponent from './POCs/ImperativeHandle'
import LayoutEffectComponent from './POCs/LayoutEffect'
import CallBackComponent from './POCs/callback'
import PseudoApp from './POCs/context'
import DebugValueComponent from './POCs/debugValue'
import EffectComponent from './POCs/effect'
import MemoComponent from './POCs/memo'
import RefComponent from './POCs/ref'
import LoginForm from './containers/LoginForm'

const App = (): ReactNode => {
  return (
    <>
      {true ? <LoginForm /> : null}
      {false ? <MemoComponent /> : null}
      {false ? <EffectComponent /> : null}
      {false ? <CallBackComponent /> : null}
      {false ? <DebugValueComponent /> : null}
      {false ? <RefComponent /> : null}
      {false ? <LayoutEffectComponent /> : null}
      {false ? <ParentComponent /> : null}
      {false ? <PseudoApp /> : null}
    </>
  )
}

export default App
