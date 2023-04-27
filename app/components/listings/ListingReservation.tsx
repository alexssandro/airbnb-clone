'use client'

import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';
import Button from '../Button';

interface ListingReservationProps {
    price: number;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    dateRange: Range;
    onSubmit: () => void;
    disabled?: boolean
    disabledDates: Date[]
}

const ListingReservation:React.FC<ListingReservationProps> = (props) => {
    return (
        <div
            className="
                bg-white
                rounded-xl
                border-[1px]
                border-neutral-200
                overflow-hidden
            "
        >
            <div className="flex flex-row items-center gap-1 p-4">
                <div className='text-2xl font-semibold'>
                    $ {props.price}
                </div>
                <div className='font-light text-neutral-600'>
                    night
                </div>
            </div>
            <hr />
            <Calendar 
                value={props.dateRange}
                disabledDates={props.disabledDates}
                onChange={(value) => props.onChangeDate(value.selection)}
            />
            <hr />
            <div className='p-4'>
                <Button
                    disabled={props.disabled}
                    label='Reserve'
                    onClick={props.onSubmit}
                />
            </div>
            <div className='
                p-4
                flex
                flex-row
                items-center
                justify-between
                font-semibold
                text-lg
            '>
                <div>
                    Total
                </div>
                <div>
                    $ {props.totalPrice}
                </div>
            </div>
        </div>
    )
}

export default ListingReservation;