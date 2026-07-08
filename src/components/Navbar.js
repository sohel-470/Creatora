'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return (
        <nav className='text-slate-900 flex justify-between items-center px-12 h-24 bg-transparent'>
            <div className='font-bold text-2xl flex items-center gap-3 cursor-pointer'>
                {/* Modern icon to match the video's aesthetic */}
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                Creatora
            </div>
            <ul className='flex gap-10 items-center font-medium cursor-pointer'>
                <li className='hover:text-purple-600 transition-colors'>Home</li>
                <li className='hover:text-purple-600 transition-colors'>About</li>
                <li className='hover:text-purple-600 transition-colors'>Projects</li>
                <li>
                    <Link href={"/signin"} className='bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center items-center px-7 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all'>
                        Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar