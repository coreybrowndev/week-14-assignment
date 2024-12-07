"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number | string>("");
  const [lastNumber, setLastNumber] = useState<number | string>("");

  const handleSubmit = () => {
    setLastNumber(number);
  };

  return (
    <div className="w-1/6 mx-auto pt-6 flex gap-6">
      <div className="flex flex-col gap-2">
        <h1>Enter Number</h1>
        <input className="text-black pl-4" type="number" placeholder="Enter a number" value={number} onChange={(e) => setNumber(e.target.value)} data-testid="input-number" />
        <button onClick={handleSubmit} data-testid="submit-button">
          Submit
        </button>
      </div>
      <div></div>
      <div className="flex flex-col ">
        <h1 className="pb-2">Display Number</h1>
        <input className="text-black pl-4" type="text" value={lastNumber} readOnly data-testid="display-number" />
      </div>
    </div>
  );
}
