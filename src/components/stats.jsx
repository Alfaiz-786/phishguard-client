import { FiMail, FiShield, FiUsers, FiActivity } from "react-icons/fi";

function Stats() {
  const stats = [
    {
      icon: <FiMail size={40} className="text-blue-600" />,
      number: "10,000+",
      title: "Emails Analyzed",
    },
    {
      icon: <FiShield size={40} className="text-green-600" />,
      number: "98%",
      title: "Detection Accuracy",
    },
    {
      icon: <FiUsers size={40} className="text-purple-600" />,
      number: "5,000+",
      title: "Protected Users",
    },
    {
      icon: <FiActivity size={40} className="text-red-600" />,
      number: "24/7",
      title: "AI Monitoring",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>

              <h2 className="text-4xl font-bold">{stat.number}</h2>

              <p className="mt-2 text-gray-300">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
