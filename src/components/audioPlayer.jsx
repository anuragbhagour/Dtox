import React from 'react';

const ringtones = [
  { title: "Relaxing 1", duration: "30s" },
  { title: "Relaxing 2", duration: "25s" },
  { title: "Relaxing 3", duration: "17s" },
];

const RingtoneCard = ({ title, duration }) => (
  <div className="relative flex flex-col items-center bg-gradient-to-r from-purple-500 to-green-500 rounded-lg p-4 shadow-md">
    <div className="flex items-center justify-center w-20 h-20 bg-gray-900 rounded-full">
      <button className="text-white text-2xl font-bold">▶</button>
    </div>
    <div className="mt-2 text-center">
      <p className="text-white font-semibold">{title}</p>
      <p className="text-white text-sm">{duration}</p>
    </div>
  </div>
);

const RingtoneGallery = () => (
  <div className="min-h-screen bg-black p-10">
    <h1 className="text-3xl text-white font-bold text-center mb-6">Ringtones</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
      {ringtones.map((ringtone, index) => (
        <RingtoneCard key={index} title={ringtone.title} duration={ringtone.duration} />
      ))}
    </div>
  </div>
);

export default RingtoneGallery;
