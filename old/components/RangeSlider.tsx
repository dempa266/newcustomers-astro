import React from "react";

type Props = {
  value: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max: number;
};

export default function RangeSlider({ value, step, onChange, max }: Props) {
  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <input
          className="w-full bg-black slider"
          type="range"
          value={value}
          step={step}
          onChange={onChange}
          max={max}
        />
      </div>
    </div>
  );
}
