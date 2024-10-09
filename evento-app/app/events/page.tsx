import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

const events = [
    { id: 1, title: 'Solana Soiree 2024', date: 'Oct 15, 2024', location: 'Metaverse Plaza', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3' },
    { id: 2, title: 'NFT Art Bash', date: 'Nov 5, 2024', location: 'Digital Gallery', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3' },
    { id: 3, title: 'DeFi Summit', date: 'Dec 1, 2024', location: 'Crypto Convention Center', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3690&auto=format&fit=crop&ixlib=rb-4.0.3' },
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-yellow-400 p-8">
            <h1 className="text-6xl font-black mb-12 uppercase text-center">Upcoming Events</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <Link href={`/events/${event.id}`} key={event.id}>
                        <div className="bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-4 border-4 border-black" />
                            <h2 className="text-2xl font-black mb-4 uppercase">{event.title}</h2>
                            <div className="flex items-center space-x-2 text-lg font-bold mb-2">
                                <Calendar className="w-6 h-6" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-lg font-bold">
                                <MapPin className="w-6 h-6" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}