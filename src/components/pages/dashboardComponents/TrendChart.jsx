import { memo, useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TrendChart = ({ data }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [appliedFilter, setAppliedFilter] = useState({
    from: "",
    to: "",
  });

  const filteredData = useMemo(() => {
    if (!data || data.length === 0) return [];

    return data.filter((item) => {
      const date = new Date(item.date);

      if (appliedFilter.from && date < new Date(appliedFilter.from))
        return false;

      if (appliedFilter.to && date > new Date(appliedFilter.to))
        return false;

      return true;
    });
  }, [data, appliedFilter]);

  const handleApplyFilter = () => {
    setAppliedFilter({
      from: fromDate,
      to: toDate,
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Application Trend</h2>

      {/* Filters */}
      <div className="flex flex-wrap items-end gap-4 mb-5">

        {/* From Date */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500">From</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>

        {/* To Date */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500">To</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>

        {/* Apply Filter Button */}
        <button
          onClick={handleApplyFilter}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                     rounded-md hover:from-blue-700 hover:to-indigo-700 transition"
        >
          Apply Filter
        </button>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-gray-500 bg-gray-50 p-4 rounded-md border">
          No trend data available for selected date range.
        </div>
      ) : (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData} margin={{ left: 10, right: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default memo(TrendChart);
