import { memo } from "react";
import { FiUsers, FiCheckCircle, FiXCircle } from "react-icons/fi";

const MetricsCards = ({ total, verified, rejected }) => {
  const getColor = (value) => {
    if (value > 1000) return "text-red-600";
    if (value > 500) return "text-orange-500";
    return "text-gray-700";
  };

  const cardStyle =
    "p-5 bg-transparent rounded-lg shadow-sm w-full border border-gray-200 font-semibold flex justify-between items-center gap-3";

  const iconBox =
    "p-3 rounded-full flex items-center justify-center text-4xl";

  const metrics = [
    {
      title: "Total Applicants",
      value: total,
      icon: <FiUsers />,
      iconColor: "text-blue-600",
    },
    {
      title: "Verified Applicants",
      value: verified,
      icon: <FiCheckCircle />,
      iconColor: "text-green-600",
    },
    {
      title: "Rejected Applicants",
      value: rejected,
      icon: <FiXCircle />,
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {metrics.map((item, index) => (
        <div key={index} className={cardStyle}>
          <div>
            <p className="text text-gray-500 ">{item.title}</p>
            <p className={`text-3xl font-semibold ${getColor(item.value)}`}>
              {item.value}
            </p>
          </div>

          <div className={`${iconBox} ${item.iconColor}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MetricsCards);
