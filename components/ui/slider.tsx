"use client";

import React from "react";
import clsx from "clsx";

type SliderProps = {
  value: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
};

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className,
}: SliderProps) {
  const current = Array.isArray(value) && value.length > 0 ? value[0] : min;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(event.target.value);
    onValueChange?.([next]);
  }

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={current}
      onChange={handleChange}
      className={clsx(
        "w-full h-2 appearance-none bg-muted rounded-lg outline-none cursor-pointer",
        "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary",
        "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary",
        className
      )}
    />
  );
}




