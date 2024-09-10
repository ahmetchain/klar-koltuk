import React, { useState } from "react";

export default function BeforeAfterComparison({ textb, texta, before, after }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mb-20">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={before}
          alt="Before Image"
        />
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={after}
            alt="After Image"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="w-3/4 accent-white"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm md:text-base">
        <p className="font-semibold text-gray-700">{textb}</p>
        <p className="font-semibold text-gray-700">{texta}</p>
      </div>
    </div>
  );
}
