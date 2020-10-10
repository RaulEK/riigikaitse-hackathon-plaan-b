import React, {useState} from 'react';
import moment from 'moment'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Events from "./Events";
import {CONTENTSTYLE} from "../constans";
const localizer = momentLocalizer(moment);

const defaultEvent = {
    events: [
        {
            start: moment().toDate(),
            end: moment()
                .add(1, "days")
                .toDate(),
            title: "Some title"
        }
    ]
};

const CalendarView = () => {
    const [events, setEvents] = useState(defaultEvent);
    return (
        <div className={CONTENTSTYLE + " flex-col"}>
            <div className="shadow-md">
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700 }}
                events={Events}
                views={['month', 'day', 'agenda']}
                messages={{
                    month: 'Kuu',
                    day: 'Päev',
                    today: 'Täna',
                    agenda: 'Päevik',
                    next: '>',
                    previous: '<'
                }}
            />
            </div>
        </div>
    )
};
export default CalendarView;