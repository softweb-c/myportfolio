"use client";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We talk about your business, align on your product goals and find the best solution that fits your needs and budget."
    },
    {
      number: "02",
      title: "Design, Feedback Loop",
      description: "Work begins on the project design based on earlier discussions, you are updated on each step."
    },
    {
      number: "03",
      title: "Iteration & building",
      description: "Implementation of the approved design, with regular updates and feedback sessions to ensure alignment with your vision."
    },
    {
      number: "04",
      title: "Launch & handover",
      description: "Your product goes live with clean documentation, reliable deployment, and ongoing support options."
    }
  ];

  return (
    <section id="process" className="py-28 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-[#1E90FF] font-mono mb-3 block">
          Simple Process
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          How we build together.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="glass-panel p-6 lg:p-7 rounded-2xl relative">
            <span className="text-4xl font-mono font-bold text-white/10 absolute top-6 right-6">
              {step.number}
            </span>
            <h3 className="text-lg font-semibold text-white mb-3 pr-10">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}