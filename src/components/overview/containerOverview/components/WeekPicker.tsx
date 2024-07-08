import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import {
  format,
  startOfWeek,
  addDays,
  endOfWeek,
  subWeeks,
  addWeeks,
  isSameDay,
  isSameWeek,
} from "date-fns";
import IconArrowLeft from "../../../icons/overview/IconArrowLeft";
import IconArrowRight from "../../../icons/overview/IconArrowRight";
import { useMediaQuery } from "@mui/material";

interface WeekPickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const WeekPicker: React.FC<WeekPickerProps> = ({ selectedDate, onChange }) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const start = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const end = endOfWeek(selectedDate, { weekStartsOn: 1 });

  const handlePrevWeek = () => {
    const newDate = subWeeks(selectedDate, 1);
    onChange(newDate);
    if (selectedDay && !isSameWeek(selectedDay, newDate, { weekStartsOn: 1 })) {
      setSelectedDay(null);
    }
  };

  const handleNextWeek = () => {
    const newDate = addWeeks(selectedDate, 1);
    onChange(newDate);
    if (selectedDay && !isSameWeek(selectedDay, newDate, { weekStartsOn: 1 })) {
      setSelectedDay(null);
    }
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
    onChange(day);
  };

  useEffect(() => {
    if (
      selectedDay &&
      !isSameWeek(selectedDay, selectedDate, { weekStartsOn: 1 })
    ) {
      setSelectedDay(null);
    }
  }, [selectedDate, selectedDay]);

  const renderWeekHeader = () => (
    <div className="flex items-center gap-[10px]">
      <h4 className="font-semibold text-lg text-black_1B2432 dark:text-white">
        {format(start, "dd")} – {format(end, "dd MMM, yyyy")}
      </h4>
      <div
        onClick={handlePrevWeek}
        className="bg-blue_23A9F9 py-[5px] px-[7px] rounded-[3px] flex items-center justify-center cursor-pointer"
      >
        <IconArrowLeft />
      </div>
      <div
        onClick={handleNextWeek}
        className="bg-blue_23A9F9 py-[5px] px-[7px] rounded-[3px] flex items-center justify-center cursor-pointer"
      >
        <IconArrowRight />
      </div>
    </div>
  );

  const renderDaysOfWeek = () => {
    const days = [];
    let day = start;

    for (let i = 0; i < 7; i++) {
      const currentDay = addDays(start, i);
      const isSelected = selectedDay && isSameDay(currentDay, selectedDay);
      days.push(
        <Grid item xs key={i} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: isSelected ? "#23A9F9" : "transparent",
              color: isSelected ? "#ffffff" : "#49505B",
              "&:hover": {
                backgroundColor: isSelected
                  ? "rgba(35, 169, 249, 0.5)"
                  : "rgba(25, 118, 210, 0.04)",
              },
              padding: "8px",
              borderRadius: "50%",
            }}
            onClick={() => handleDayClick(currentDay)}
          >
            <span className="font-medium text-base text-black_49505B dark:text-white">
              {format(currentDay, "d")}
            </span>
          </Box>
        </Grid>
      );
      day = addDays(day, 1);
    }

    return <Grid container>{days}</Grid>;
  };

  return (
    <div
      className={`
      flex flex-col gap-3
      `}
    >
      {renderWeekHeader()}
      <Grid container spacing={1} justifyContent="between" alignItems="center">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
          <Grid item xs key={index} sx={{ textAlign: "center" }}>
            <span className="font-medium text-base text-gray_A4A7AD dark:text-gray_CCCCCC">
              {day}
            </span>
          </Grid>
        ))}
      </Grid>
      {renderDaysOfWeek()}
    </div>
  );
};

export default WeekPicker;
