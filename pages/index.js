import React, { useState } from "react";

export default function DealerEaseLanding() {
  const [selected, setSelected] = useState([]);
  const [total, setTotal] = useState(199);

  const features = [
    { name: "AI Description Builder", price: 50 },
    { name: "AI Messenger Responder", price: 75 },
    { name: "Lead Follow-Up Automation", price: 75 },
    { name: "AI Voice Assistant", price: 100 },
    { name: "Document Scanner & Fraud Detection", price: 125 }
  ];

  const toggleFeature = (name, price) => {
    let updated;
    if (selected.includes(name)) {
      updated = selected.filter((item) => item !== name);
      setTotal((prev) => Math.max(199, prev - price));
    } else {
      updated = [...selected, name];
      setTotal((prev) => prev + price);
    }
    setSelected(updated);
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10 flex flex-col items-center">
      <header className="w-full max-w-6xl flex justify-between items-center mb-20">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="DealerEase Logo" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-white">DealerEase</span>
        </div>
        <nav className="space-x-6 text-lg text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Streamline Your Dealership</h1>
        <p className="text-lg text-gray-400 mb-8">Powerful solutions to manage your dealership operations with ease.</p>
        <button className="bg-white text-black px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      <section className="w-full max-w-6xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.name}</h3>
              <p className="text-gray-400">Add-on: ${feature.price}/mo</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Build Your Plan</h2>
        <p className="text-gray-400 mb-4">Base Price: $199/mo. Add tools below to customize your bundle.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {features.map((feature, idx) => (
            <label key={idx} className="flex items-center gap-3 bg-neutral-800 px-4 py-3 rounded-xl cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(feature.name)}
                onChange={() => toggleFeature(feature.name, feature.price)}
              />
              <span>{feature.name} (+${feature.price})</span>
            </label>
          ))}
        </div>
        <div className="text-2xl font-semibold text-white mb-4">Total: ${total}/mo</div>
        <button className="bg-white text-black px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition">
          Book a Demo
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-neutral-900 p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2 text-white">Features</h2>
          <p className="text-gray-400">Discover the tools we offer to simplify your business processes</p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2 text-white">Testimonials</h2>
          <p className="text-gray-400">See how our solutions have transformed dealerships</p>
        </div>
      </section>
    </main>
  );
}
