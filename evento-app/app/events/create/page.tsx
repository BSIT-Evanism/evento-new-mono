"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from 'lucide-react';

export default function CreateEventPage() {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');

    return (
        <div className="min-h-screen bg-yellow-400 p-8">
            <div className="max-w-2xl mx-auto bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <h1 className="text-6xl font-black mb-8 uppercase">Create Event</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="eventName" className="block text-2xl font-bold mb-2">Event Name</label>
                        <Input
                            id="eventName"
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            className="w-full border-4 border-black text-xl font-bold py-3 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            placeholder="Enter event name"
                        />
                    </div>
                    <div>
                        <label htmlFor="eventDate" className="block text-2xl font-bold mb-2">Event Date</label>
                        <div className="relative">
                            <Input
                                id="eventDate"
                                type="date"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                className="w-full border-4 border-black text-xl font-bold py-3 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            />
                            <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="eventLocation" className="block text-2xl font-bold mb-2">Event Location</label>
                        <Input
                            id="eventLocation"
                            type="text"
                            value={eventLocation}
                            onChange={(e) => setEventLocation(e.target.value)}
                            className="w-full border-4 border-black text-xl font-bold py-3 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            placeholder="Enter event location"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-black text-white font-black text-2xl py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1"
                    >
                        CREATE EVENT
                    </Button>
                </form>
            </div>
        </div>
    );
}
