import { FiShield, FiZap, FiCpu } from "react-icons/fi";

function Features() {
  const features = [
    {
      icon: <FiShield size={40} className="text-blue-600" />,
      title: "Advanced Security",
      description:
        "Protect users against phishing emails using intelligent threat detection.",
    },
    {
      icon: <FiZap size={40} className="text-yellow-500" />,
      title: "Real-Time Detection",
      description:
        "Analyze suspicious emails instantly with fast AI-powered scanning.",
    },
    {
      icon: <FiCpu size={40} className="text-green-600" />,
      title: "Machine Learning",
      description:
        "Our AI model continuously improves to detect new phishing attacks.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Why Choose PhishGuard AI?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Our platform combines Artificial Intelligence and Cyber Security to
          provide accurate phishing email detection.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-5">{feature.title}</h3>

              <p className="text-gray-600 mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
