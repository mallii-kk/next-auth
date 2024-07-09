'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

function AuthSigninButton() {
    const routuer = useRouter()


    function handleSignin() {
        routuer.push("/auth/signin")
    }

    return (
        <Button onClick={handleSignin} variant="secondary" size="lg" className="m-5">
            sign in
        </Button>
    )
}

export default AuthSigninButton