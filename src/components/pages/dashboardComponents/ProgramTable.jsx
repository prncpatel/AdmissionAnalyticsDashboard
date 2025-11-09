import { memo } from "react";

const ProgramTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-white p-5 rounded-lg shadow-sm border border-gray-200 text-gray-500">
        No program details available
      </div>
    );
  }

  const getColor = (value) => {
    if (value > 1000) return "text-red-600 font-semibold";
    if (value > 500) return "text-orange-500 font-semibold";
    return "text-gray-700";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Program Wise Application Details
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white-50 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gradient-to-r from-blue-100 to-indigo-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Program</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Applications</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-indigo-50 transition"
              >
                <td className="px-4 py-3 text-gray-800">{item.program}</td>
                <td className={`px-4 py-3 text-lg ${getColor(item.count)}`}>
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(ProgramTable);
