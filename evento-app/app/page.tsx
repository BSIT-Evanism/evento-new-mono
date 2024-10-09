import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <main className="max-w-4xl mx-auto">
        <div className="bg-white border-8 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h1 className="text-6xl font-black mb-6 uppercase">Welcome to Evento</h1>
          <p className="text-2xl font-bold mb-8">Your gateway to unforgettable blockchain events!</p>
          <Link href="/events" className="inline-block bg-black text-white font-black py-4 px-8 text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
            Explore Events
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            <h2 className="text-3xl font-black mb-4 uppercase">Create Events</h2>
            <p className="text-xl mb-4">Host your own blockchain events and connect with the community.</p>
            <Link href="/events/create" className="inline-block bg-blue-500 text-white font-black py-2 px-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
              Get Started
            </Link>
          </div>

          <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
            <h2 className="text-3xl font-black mb-4 uppercase">Join Events</h2>
            <p className="text-xl mb-4">Discover and participate in exciting blockchain events near you.</p>
            <Link href="/events" className="inline-block bg-green-500 text-white font-black py-2 px-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
              Browse Events
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
