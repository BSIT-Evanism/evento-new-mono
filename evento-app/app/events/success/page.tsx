"use client"

import { useSearchParams } from 'next/navigation'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const eventName = searchParams.get('eventName')
    const eventId = searchParams.get('eventId')
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="min-h-screen bg-yellow-400 p-8 flex items-center justify-center">
            <Confetti width={windowSize.width} height={windowSize.height} />
            <div className="bg-white border-8 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full text-center">
                <h1 className="text-6xl font-black mb-8 uppercase">Success!</h1>
                <p className="text-3xl font-bold mb-6">You&apos;ve successfully RSVP&apos;d to:</p>
                <h2 className="text-4xl font-black mb-8 uppercase bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">{eventName || 'Event'}</h2>
                <p className="text-xl font-bold mb-8">Event ID: {eventId || 'N/A'}</p>
                <a href="/events" className="inline-block bg-black text-white font-black py-4 px-8 text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
                    Back to Events
                </a>
            </div>
        </div>
    )
}