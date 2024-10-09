'use client'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"

export const NavBar = () => {
    return (
        <nav className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-extrabold text-black">Evento</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</Link>
                                <Link href="/events" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Events</Link>
                                <Link href="/contact" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <WalletMultiButton className="bg-black text-white font-bold py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
