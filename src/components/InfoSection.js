import React from "react";

const InfoSection = () => {
  return (
    <section className="flex justify-center gap-24 py-24 bg-slate-200">
      <div className="flex flex-col gap-12">
        <div className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-start gap-5">
          <div className="bg-sky-200 w-12 h-12 p-3 rounded-3xl border-8 border-blue-100 flex justify-center items-center" />
          <h2 className="text-gray-900 text-xl font-semibold">
            Immutable Proof of Ownership
          </h2>
          <p className="text-slate-600 text-base">
            Your YouTube channel is tokenized on the blockchain, ensuring you
            can always prove ownership.
          </p>
        </div>
        {/* Add more info cards similarly */}
      </div>
    </section>
  );
};

export default InfoSection;
