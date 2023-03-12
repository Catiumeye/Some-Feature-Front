import { Route, Routes } from "react-router-dom"
import { ErrorPage } from "../../common/error/error"
import { NotFound } from "../../common/not-found/NotFound"
import { Auth, SignIn, SignUp } from "../auth/Auth"
import { Home } from "../home/Home"
import { Layout } from "../layout/Layout"
import { Profile } from "../profile/Profile"
import './App.css'

export const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="signup" element={<Auth component={SignUp}/>}/>
                <Route path="signin" element={<Auth component={SignIn}/>}/>
                <Route path="profile/:profileId" element={<Profile />}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    </>
  )
}