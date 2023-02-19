import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoggedIn, Loggedout } from '../Redux/actions/AuthActions';

export default function Login() {
    const dispatch=useDispatch();
    const auth=useSelector(state=> state.AuthReducer.isLogin)
  return (
    <div>
        <h2>Login Check</h2>
        <button onClick={()=>dispatch(LoggedIn())}>Login</button>
        <button onClick={()=>dispatch(Loggedout())}>Logout</button>
        <div>{auth ? <div>I know 70% of React</div> : ""}</div>
    </div>
  )
}
