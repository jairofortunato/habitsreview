'use client'
import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { CaptionProps } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { processHabitData } from '../utils/processHabitData';
import habitData from '../habitkit_export.json'; // Adjust the path as necessary


export default function YearCalendar() {
  const habitNamesToSelect = [
    "Sun Exposure Morning",
    "Cold Exposure",
    "Run / Exercise",
    "Read / Write",
    "Low Carb",
    "No Smoke"
  ];

  const completionDates = processHabitData(habitData, habitNamesToSelect); // Pass habit names
  const initialSelectedDays = new Map();
  const [selectedDays, setSelectedDays] = useState<Map<string, Date>>(initialSelectedDays);

  const handleDayClick = (days: Date[] | undefined) => {
    const newSelectedDays = new Map();
    if (days) {
      days.forEach(day => newSelectedDays.set(day.toISOString(), day));
    }
    setSelectedDays(newSelectedDays);
  };

  const handleBuildButtonClick = () => {
    const buildCompletionDates = processHabitData(habitData, ["Build"]); // Pass "Build" as an array
    const buildSelectedDays = new Map(buildCompletionDates.map(date => [date.toISOString(), date]));
    setSelectedDays(buildSelectedDays);
  };

  const handleExerciseButtonClick = () => {
    const exerciseCompletionDates = processHabitData(habitData, ["Run / Exercise"]); // Pass "Run / Exercise" as an array
    const exerciseSelectedDays = new Map(exerciseCompletionDates.map(date => [date.toISOString(), date]));
    setSelectedDays(exerciseSelectedDays);
  };
  
  const handleReadButtonClick = () => {
    const readCompletionDates = processHabitData(habitData, ["Read / Write"]); // Pass "Read / Write" as an array
    const readSelectedDays = new Map(readCompletionDates.map(date => [date.toISOString(), date]));
    setSelectedDays(readSelectedDays);
  };
  
  const handleLowCarbButtonClick = () => {
    const lowCarbCompletionDates = processHabitData(habitData, ["Low Carb"]); // Pass "Low Carb" as an array
    const lowCarbSelectedDays = new Map(lowCarbCompletionDates.map(date => [date.toISOString(), date]));
    setSelectedDays(lowCarbSelectedDays);
  };

  const handleColdExposureButtonClick = () => {
    const coldExposureCompletionDates = processHabitData(habitData, ["Cold Exposure"]);
    const coldExposureSelectedDays = new Map(coldExposureCompletionDates.map(date => [date.toISOString(), date]));
    setSelectedDays(coldExposureSelectedDays);
  };
  

  
  const handleNoSmokeButtonClick = () => {
    const noSmokeCompletionDates = processHabitData(habitData, ["No Smoke"]);
    const noSmokeSelectedDays = new Map(noSmokeCompletionDates.map(date => [date.toISOString(), date]));
    setSelectedDays(noSmokeSelectedDays);
  };
  
  

  const renderCustomCaption = ({ displayMonth }: CaptionProps) => {
    return <>{format(displayMonth, 'MMMM')}</>;
  };
  
  const months = Array.from({ length: 12 }).map((_, i) => new Date(2023, i));

  return (
    <div>
<h2 className="text-4xl font-medium text-gray-900 text-center py-4 bg-stone-200" style={{ fontFamily: 'Inter, sans-serif' }}>jay fort habits in 2023</h2>
<div className="flex flex-wrap justify-center space-x-4 py-4 bg-stone-200">
        <Button
  className="rounded-full px-6 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  onClick={handleBuildButtonClick}
>
  Build w Code
</Button>
<Button
  className="rounded-full px-6 py-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  onClick={handleExerciseButtonClick}
>
  Exercise
</Button>
<Button
  className="rounded-full px-6 py-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  onClick={handleReadButtonClick}
>
  Read
</Button>
<Button
  className="rounded-full px-6 py-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  onClick={handleLowCarbButtonClick}
>
  Low Carb
</Button>
<Button
  className="rounded-full px-6 py-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  onClick={handleColdExposureButtonClick}
>
  Cold Exposure
</Button>


<Button
  className="rounded-full px-6 py-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  onClick={handleNoSmokeButtonClick}
>
  No Smoke
</Button>
      </div>
      <div className="flex flex-wrap lg:px-64  py-12 bg-stone-200">
        {months.map((month, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-20 py-2">
            <DayPicker
              className="text-sm text-black"
              mode="multiple"
              month={month}
              selected={Array.from(selectedDays.values())}
              onSelect={handleDayClick}
              footer={<p></p>}
              components={{
                Caption: renderCustomCaption
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
  
}
