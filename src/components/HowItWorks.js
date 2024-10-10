import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-slate-200 py-28">
      <h2 className="text-center text-gray-900 text-4xl font-bold uppercase">
        How It Works
      </h2>
      <div className="flex justify-center gap-16 mt-16">
        <div className="bg-white p-5 rounded-xl border border-red-400 shadow-lg">
          <h3 className="text-gray-900 text-xl font-semibold">
            Connect Your YouTube Channel
          </h3>
          <p className="text-slate-600 text-lg">
            With just a few clicks, link your YouTube account to YouTube
            OnChain.
          </p>
        </div>
        {/* Add more steps similarly */}
      </div>
    </section>
  );
};

export default HowItWorks;
