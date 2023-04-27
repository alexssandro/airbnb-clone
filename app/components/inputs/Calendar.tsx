'use client'

import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
    value: Range;
    disabledDates?: Date[];
    onChange: (value: RangeKeyDict) => void
}

const Calendar: React.FC<CalendarProps> = (props) => {
    return (
        <DateRange
            rangeColors={["#262626"]}
            ranges={[props.value]}
            date={new Date()}
            onChange={props.onChange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={props.disabledDates}
        />
    )
}

export default Calendar;