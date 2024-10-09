"use client"

import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin } from 'lucide-react'

export function EventPage() {
  const { publicKey } = useWallet()
  const [message, setMessage] = useState('')

  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <div className="space-y-8">
        <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
          <h1 className="text-6xl font-black mb-8 uppercase">Solana Soiree 2024</h1>
          <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Event banner" className="w-full h-80 object-cover mb-8 border-4 border-black" />
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center space-x-2 text-lg font-bold">
              <Calendar className="w-6 h-6" />
              <span>October 15, 2024 | 7:00 PM UTC</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-bold">
              <MapPin className="w-6 h-6" />
              <span>Metaverse Plaza, Solana City</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            <h2 className="text-4xl font-black mb-8 uppercase">Wallet</h2>
            {publicKey ? (
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text p-4 border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
                Connected: {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
              </div>
            ) : (
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-4 px-8 text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">Connect Wallet</Button>
            )}
          </div>

          <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            <h2 className="text-4xl font-black mb-8 uppercase">Attendees</h2>
            <div className="flex space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-gray-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                  <img src={`https://api.dicebear.com/6.x/personas/svg?seed=${i}`} alt="Avatar" className="w-full h-full" />
                </div>
              ))}
            </div>
            <p className="text-xl font-bold mt-4">+42 others attending</p>
          </div>

          <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            <h2 className="text-4xl font-black mb-8 uppercase">Quick Actions</h2>
            {publicKey ? (
              <div className="space-y-4">
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black py-4 px-8 text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    const eventName = "Solana Soiree 2024";
                    const eventId = "1"; // Assuming this is the event ID
                    window.location.href = `/events/success?eventName=${encodeURIComponent(eventName)}&eventId=${eventId}`;
                  }}
                >
                  RSVP with 1 SOL
                </Button>
                <Button className="w-full bg-white hover:bg-gray-100 text-black font-black py-4 px-8 text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">Share Event</Button>
              </div>
            ) : (
              <p className="text-xl font-bold text-center">Connect your wallet to RSVP or share the event.</p>
            )}
          </div>
        </div>

        <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
          <h2 className="text-4xl font-black mb-8 uppercase">Event Chat</h2>
          <div className="space-y-6 max-h-80 overflow-y-auto mb-8 pr-4">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                <img src="https://api.dicebear.com/6.x/personas/svg?seed=Alice" alt="Avatar" className="w-full h-full" />
              </div>
              <div className="bg-gray-100 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                <p className="text-lg font-bold">Can&apos;t wait for the event! Who&apos;s bringing the virtual snacks?</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                <img src="https://api.dicebear.com/6.x/personas/svg?seed=Bob" alt="Avatar" className="w-full h-full" />
              </div>
              <div className="bg-gray-100 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                <p className="text-lg font-bold">I&apos;ve got some NFT cookies ready to share!</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-4 border-black text-lg font-bold py-4 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white font-black py-4 px-8 text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}