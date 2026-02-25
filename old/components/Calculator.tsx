"use client";
import React, { useEffect, useState } from "react";
import RangeSlider from "./Rangesliders";

export default function Calculator() {
  const [visitors, setVisitors] = useState<any>({ value: 0, max: 10000 });
  const [conversionRate, setConversionRate] = useState<any>({
    value: 0,
    max: 100,
  });
  const [conversionToCustomerRate, setConversionToCustomerRate] = useState<any>(
    {
      value: 0,
      max: 100,
    }
  );
  const [averageCustomerValue, setAverageCustomerValue] = useState<any>({
    value: 0,
    max: 10000,
  });
  const [result, setResult] = useState<any>(0);

  const handleVisitorsChange = (event: any) => {
    if (!event.target.value) {
      setVisitors({ value: 0, max: visitors.max });
      return;
    }
    const eventValue = parseInt(event.target.value);
    if (eventValue >= visitors.max) {
      setVisitors({ value: eventValue, max: eventValue + 100 });
    } else {
      setVisitors({ value: eventValue, max: visitors.max });
    }
  };

  const handleConversionRateChange = (event: any) => {
    if (!event.target.value) {
      setConversionRate({ value: null, max: conversionRate.max });
      return;
    }
    const eventValue = parseFloat(event.target.value);
    setConversionRate({ value: eventValue, max: conversionRate.max });
  };

  const handleConversionToCustomerRateChange = (event: any) => {
    if (!event.target.value) {
      setConversionToCustomerRate({
        value: 0,
        max: conversionToCustomerRate.max,
      });
      return;
    }
    const eventValue = parseFloat(event.target.value);
    setConversionToCustomerRate({
      value: eventValue,
      max: conversionToCustomerRate.max,
    });
  };

  const handleAverageCustomerValueChange = (event: any) => {
    if (!event.target.value) {
      setAverageCustomerValue({ value: 0, max: visitors.max });
      return;
    }
    const eventValue = parseInt(event.target.value);
    if (eventValue >= averageCustomerValue.max) {
      setAverageCustomerValue({ value: eventValue, max: eventValue + 100 });
    } else {
      setAverageCustomerValue({
        value: eventValue,
        max: averageCustomerValue.max,
      });
    }
  };

  // useEffect to calculate the result
  useEffect(() => {
    const result =
      (visitors.value *
        conversionRate.value *
        conversionToCustomerRate.value *
        averageCustomerValue.value) /
      10000;

    // format the result as a currency in SEK
    const formatter = new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
    });
    const formattedResult = formatter.format(result);

    setResult(formattedResult);
  }, [
    visitors.value,
    conversionRate.value,
    conversionToCustomerRate.value,
    averageCustomerValue.value,
  ]);

  return (
    <div className="flex">
      <div className="container grid grid-cols-1 mx-auto my-auto lg:grid-cols-2 gap-x-8 gap-y-4">
        <div className="mt-2 mb-4 text-4xl font-bold text-center lg:col-span-2 text-primary">
          {result}
        </div>
        <div className="px-4 py-10 space-y-2 rounded-lg text-white bg-gray bg-opacity-10">
          <div>
            <h2 className="text-2xl font-bold text-center ">
              Antal besökare per månad
            </h2>
            <p className="text-sm text-center opacity-70 text-white">
              Hur många besökare per månad har ni idag?
            </p>
          </div>
          <div className="relative">
            <input
              className="w-full text-center bg-transparent border rounded-lg focus:outline-none border-gray-300"
              value={visitors.value}
              onChange={handleVisitorsChange}
            />
          </div>
          <RangeSlider
            max={visitors.max}
            step={10}
            value={visitors.value}
            onChange={handleVisitorsChange}
          />
        </div>
        <div className="px-4 py-10 space-y-2 rounded-lg text-white bg-gray bg-opacity-10">
          <div>
            <h2 className="text-2xl font-bold text-center">
              Konverteringsfrekvens
            </h2>
            <p className="text-sm text-center opacity-70 text-white">
              Hur stor del av era besökare konverterar?
            </p>
          </div>
          <div className="relative">
            <input
              className="w-full text-center bg-transparent border rounded-lg focus:outline-none border-gray-300"
              value={conversionRate.value}
              onChange={handleConversionRateChange}
              type="number"
              step={0.1}
            />
            <span className="absolute top-0 bottom-0 right-0 mr-4 text-white opacity-70 mt-2">
              %
            </span>
          </div>
          <RangeSlider
            max={conversionRate.max}
            step={0.1}
            value={conversionRate.value}
            onChange={handleConversionRateChange}
          />
        </div>
        <div className="px-4 py-10 space-y-2 rounded-lg text-white  bg-gray bg-opacity-10">
          <div>
            <h2 className="text-2xl font-bold text-center inter">
              Konvertering till kund
            </h2>
            <p className="text-sm text-center opacity-70 text-white">
              Hur stor del av de som har hört av sig blir kunder?
            </p>
          </div>
          <div className="relative">
            <input
              className="w-full text-center bg-transparent border rounded-lg focus:outline-none border-gray-300"
              value={conversionToCustomerRate.value}
              onChange={handleConversionToCustomerRateChange}
              type="number"
              step={0.1}
            />
            <span className="absolute top-0 bottom-0 right-0 mr-4 text-white opacity-70 mt-2">
              %
            </span>
          </div>
          <RangeSlider
            max={conversionToCustomerRate.max}
            step={0.1}
            value={conversionToCustomerRate.value}
            onChange={handleConversionToCustomerRateChange}
          />
        </div>
        <div className="px-4 py-10 space-y-2 rounded-lg text-white bg-gray bg-opacity-10">
          <div>
            <h2 className="text-2xl font-bold text-center inter">
              Snittvärde per kund
            </h2>
            <p className="text-sm text-center opacity-70 text-white">
              Vad har ni för genomsnittligt värde per kund?
            </p>
          </div>
          <div className="relative">
            <input
              className="w-full text-center bg-transparent border rounded-lg focus:outline-none border-gray-300"
              value={averageCustomerValue.value}
              onChange={handleAverageCustomerValueChange}
            />
            <span className="absolute top-0 bottom-0 right-0 mr-4 text-white opacity-70 mt-2">
              kr
            </span>
          </div>
          <RangeSlider
            max={averageCustomerValue.max}
            step={10}
            value={averageCustomerValue.value}
            onChange={handleAverageCustomerValueChange}
          />
        </div>
      </div>
    </div>
  );
}
