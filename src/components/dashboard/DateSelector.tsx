import React, { ChangeEvent, useState } from 'react';
import { padDate, validateAssessmentDate } from '../../utils/helpers';

type DateSelectorProps = {
  setSelectedDate?: any;
};

const DateSelector = (props: DateSelectorProps) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const lastYear = currentYear - 1;

  const [day, setDay] = useState(date.getDate() + 1); // so assessment is not instantly due if accidentally added
  const [month, setMonth] = useState(date.getMonth() + 1); // month starts from 0
  const [year, setYear] = useState(date.getFullYear());

  const createDate = (selectedDay: number, selectedMonth: number, selectedYear: number): Date => {
    return new Date(selectedYear, selectedMonth - 1, selectedDay); // month starts from 0
  };

  const daysInMonth = (selectedYear: number, selectedMonth: number) => new Date(selectedYear, selectedMonth, 0).getDate();

  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDay = parseInt(e.target.value);
    setDay(selectedDay);

    const selectedDate = createDate(selectedDay, month, year);
    validateAssessmentDate(selectedDate, setDay, setMonth, setYear, props.setSelectedDate);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = parseInt(e.target.value);
    setMonth(selectedMonth);

    if (day > daysInMonth(year, selectedMonth)) {
      setDay(1);
    }

    const selectedDate = createDate(day, selectedMonth, year);
    validateAssessmentDate(selectedDate, setDay, setMonth, setYear, props.setSelectedDate);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(e.target.value);
    setYear(selectedYear);

    if (day > daysInMonth(selectedYear, month)) {
      setDay(1);
    }

    const selectedDate = createDate(day, month, selectedYear);
    validateAssessmentDate(selectedDate, setDay, setMonth, setYear, props.setSelectedDate);
  };

  const dayOptions = Array.from({ length: daysInMonth(year, month) }, (_, i) => (
    <option key={i + 1} value={i + 1}>{padDate(i + 1)}</option>
  ));

  const monthOptions = Array.from({ length: 12 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{padDate(i + 1)}</option>
  ));

  const yearOptions = Array.from({ length: 2 }, (_, i) => (
    <option key={lastYear + i + 1} value={lastYear + i + 1}>{lastYear + i + 1}</option>
  ));

  return (
    <div className='flex items-center gap-1'>
      <select value={day} onChange={handleDayChange} className='inline-flex border rounded-md p-2 w-full outline-none hover:bg-lighter-accent'>
        {dayOptions}
      </select>
      /
      <select value={month} onChange={handleMonthChange} className='inline-flex border rounded-md p-2 w-full outline-none hover:bg-lighter-accent'>
        {monthOptions}
      </select>
      /
      <select value={year} onChange={handleYearChange} className='inline-flex border rounded-md p-2 w-full outline-none hover:bg-lighter-accent'>
        {yearOptions}
      </select>
    </div>
  );
};

export default DateSelector;