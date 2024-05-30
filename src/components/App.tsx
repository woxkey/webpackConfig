import  { useState } from 'react'
import classes from  './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import pngIcon from '@/assets/pngIcon.png'
import jpgIcon from '@/assets/jpgIcon.jpg'
import SvgIcon from '@/assets/svgIcon.svg'

function Todo () {
  Todo2();
}

function Todo2 () {
  throw new Error();
}

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
      Todo();
    }

    // Todo('5')

    // if (__PLATFORM__ === 'desktop') {
    //   return <div>ISDESKTOPPLATFORM</div>
    // }

    // if (__PLATFORM__ === 'mobile') {
    //   return <div>ISMOBILEPLATFORM</div>
    // }

  return (
    <div>
      <h1 data-testId={'PlatformTestId'}>Platform={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={pngIcon} alt="" />
        <img width={100} height={100} src={jpgIcon} alt="" />        
      </div>
      <div>
        <SvgIcon color={'green'} width={50} height={50} />
      </div>
        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/show'}>show</Link>
        <h1 className={classes.value}>{count}</h1>
        <button className={classes.button} onClick={increment}><span>hello</span></button>
        <Outlet />
    </div>
  )
}
