import habitData from '../habitkit_export.json';

type Habit = {
  id: string;
  name: string;
};

type Completion = {
  date: string;
  habitId: string;
};

type HabitData = {
  habits: Habit[];
  completions: Completion[];
};

export function processHabitData(data: HabitData, habitNames: string[]): Date[] {
  // Filter completions for the specified habits
  const selectedCompletions = data.completions.filter(completion =>
    habitNames.includes(data.habits.find(habit => habit.id === completion.habitId)?.name || '')
  );

  // Convert completion dates to Date objects
  return selectedCompletions.map(completion => new Date(completion.date));
}

// Example usage:
const habitNamesToSelect = [
  "Sun Exposure Morning",
  "Cold Exposure",
  "Run / Exercise",
  "Read / Write",
  "Low Carb",
  "No Fap",
  "No Smoke"
];

const completionDates = processHabitData(habitData, habitNamesToSelect);
// Now, use completionDates to update your calendar state
