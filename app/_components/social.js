'use client'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'

function Social() {
    return (
        <div className='flex items-center gap-x-2 w-full'>
            <Button size="lg" className="w-full" variant="outline" onClick={() => { }}>
                <FcGoogle className='h-5 w-5'></FcGoogle>
            </Button>
            <Button size="lg" className="w-full" variant="outline" onClick={() => { }}>
                <FaGithub className='h-5 w-5'></FaGithub>
            </Button>
        </div>
    )
}

export default Social