import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

interface DateInputProps {
  onDateChange: (date: string) => void;
  scrollToPhoto: () => void;
}

const DateInput: React.FC<DateInputProps> = ({
  onDateChange,
  scrollToPhoto,
}) => {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (selectedDates: Date[]) => {
    const selectedDate = selectedDates[0];
    setDate(selectedDate);
    if (selectedDate) {
      onDateChange(selectedDate.toISOString().split("T")[0]);
      // Scroll to photo page
      scrollToPhoto();
    }
  };

  return (
    <div className="flex items-center gap-6">
      <label className="text-lg font-semibold">
        <div className="relative max-w-sm">
          <Flatpickr
            className="border-2 border-gray-300 bg-white text-black rounded px-3 py-2 w-56"
            placeholder="Choose a Date"
            value={date || undefined}
            onChange={handleDateChange}
          />
        </div>
      </label>
    </div>
  );
};

export default DateInput;
