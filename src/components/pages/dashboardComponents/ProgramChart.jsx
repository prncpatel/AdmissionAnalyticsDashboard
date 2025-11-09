import { memo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const ProgramChart = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <div className="w-full bg-white p-5 rounded-lg shadow-sm border border-gray-200 text-gray-500">
                No program data available
            </div>
        );
    }

    return (
        <div className="w-full bg-transparent p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Applications per Program</h2>

            <div className="h-95">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ left: 10, right: 10 }}>
                        <defs>
                            <linearGradient id="programBarGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563eb" />      {/* blue-600 */}
                                <stop offset="100%" stopColor="#4f46e5" />    {/* indigo-600 */}
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="program" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="url(#programBarGradient)" radius={[5, 5, 0, 0]} activeBar={{ fill: "#4f46e5" }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default memo(ProgramChart);
