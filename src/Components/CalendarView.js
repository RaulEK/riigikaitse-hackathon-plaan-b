import React, {useState} from 'react';
import moment from 'moment'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import {CONTENTSTYLE} from "../constans";
import { useHistory } from "react-router-dom";
import {kava} from "./Events";
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

const CalendarView = (props) => {
    const { location } = useHistory();
    return (
        <div className={CONTENTSTYLE + " flex-col"}>
            <div className="shadow-md bg-white p-8 rounded-lg">
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "70vh" }}
                events={(location.state && location.state.eventData) || kava}
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