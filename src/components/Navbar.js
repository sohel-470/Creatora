'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close the dropdown when clicking anywhere outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className='text-slate-900 flex justify-between items-center px-12 h-24 bg-transparent'>
            <Link href={'/'} className='font-bold text-2xl flex items-center gap-3 cursor-pointer'>
                {/* Modern icon to match the video's aesthetic */}
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                Creatora
            </Link>

            <ul className='flex gap-10 items-center font-medium cursor-pointer'>
                <li className='hover:text-purple-600 transition-colors'>Home</li>
                <li className='hover:text-purple-600 transition-colors'>About</li>
                <li className='hover:text-purple-600 transition-colors'>Projects</li>
                <li>
                    <div className='flex items-center relative' ref={dropdownRef}>
                        {session ? (
                            <>
                                {/* Avatar / Dropdown Trigger */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="relative p-[2px] rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 focus:outline-none"
                                >
                                    <div className="bg-[#f8f9ff] rounded-full p-1 h-10 w-10 flex items-center justify-center overflow-hidden">
                                        {session.user?.image ? (
                                            <img src={session.user.image} alt="Profile" className="rounded-full w-full h-full object-cover" />
                                        ) : (
                                            // Fallback high-tech/robotic avatar SVG if no user image exists
                                            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                {/* Dropdown Menu Body */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 top-14 w-64 bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.25)] text-slate-200 overflow-hidden z-50 transform origin-top-right transition-all duration-200">

                                        {/* User Info Header */}
                                        <div className="px-5 py-4 border-b border-purple-500/20 bg-gradient-to-br from-purple-900/40 to-transparent">
                                            <p className="text-sm font-semibold text-white truncate">
                                                {session.user?.name || 'Creator'}
                                            </p>
                                            <p className="text-xs text-purple-300/80 truncate mt-0.5">
                                                {session.user?.email}
                                            </p>
                                        </div>

                                        {/* Links */}
                                        <div className="py-2 flex flex-col">
                                            <Link
                                                href="/dashboard"
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="px-5 py-2.5 text-sm hover:text-white hover:bg-purple-600/20 hover:shadow-[inset_3px_0_0_#a855f7] transition-all duration-200 flex items-center gap-3"
                                            >
                                                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                                Dashboard
                                            </Link>

                                            <Link
                                                href="/settings"
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="px-5 py-2.5 text-sm hover:text-white hover:bg-purple-600/20 hover:shadow-[inset_3px_0_0_#a855f7] transition-all duration-200 flex items-center gap-3"
                                            >
                                                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                Settings
                                            </Link>
                                        </div>

                                        {/* Logout Button */}
                                        <div className="p-2 border-t border-purple-500/20">
                                            <button
                                                onClick={() => {
                                                    setIsDropdownOpen(false)
                                                    signOut()
                                                }}
                                                className="w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-medium cursor-pointer"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link href={"/signin"} className='bg-gradient-to-r from-purple-600 to-blue-500 text-white flex justify-center items-center px-7 py-2 rounded-full font-semibold hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300'>
                                Sign In
                            </Link>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar