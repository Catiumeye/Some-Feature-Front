import React, { useState } from "react"

interface IAuthProps {
    component: React.ComponentType<IJopaProp>;
}

export const Auth = ({component: Component }: IAuthProps) => {



    return <Component name="Some name"/>

}

interface IJopaProp {
    name: string
}

export const SignUp = ({name}: IJopaProp) => {
    return(
        <div>
            Sign up {name}
        </div>
    )
}

export const SignIn = ({name}: IJopaProp) => {
    return(
        <div>
            Sign in {name}
        </div>
    )
}