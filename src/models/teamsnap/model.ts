// Team model
interface Team {
    id: string;
    name: string;
    sport: string;
    season: string;
    division?: string;
    location?: string;
    timeZone?: string;
    startDate?: string;
    endDate?: string;
    roster?: RosterMember[];
    events?: Event[];
}

// Roster Member model
interface RosterMember {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    position?: string;
    jerseyNumber?: string;
}

// Event model
interface Event {
    id: string;
    title: string;
    eventType: string;
    startDate: string;
    endDate: string;
    location?: string;
    notes?: string;
    reminders?: EventReminder[];
    rsvps?: EventRSVP[];
}

// Event Reminder model
interface EventReminder {
    id: string;
    type: string;
    recipient: string;
    timing: string;
}

// Event RSVP model
interface EventRSVP {
    id: string;
    memberId: string;
    attendanceStatus: string;
    notes?: string;
    responseDate: string;
}

export type {
    RosterMember,
    EventRSVP,
    Event,
    EventReminder
};

