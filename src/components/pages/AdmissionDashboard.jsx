import { useEffect, useState } from 'react';
import { fetchAdmissionAnalytics } from '../api/analytics';
import LoaderOverlay from './dashboardComponents/LoaderOverlay';
import MetricsCards from './dashboardComponents/MetricsCards';
import { LuRefreshCw } from "react-icons/lu";
import ProgramChart from './dashboardComponents/ProgramChart';
import TrendChart from './dashboardComponents/TrendChart';
import ProgramTable from './dashboardComponents/ProgramTable';


const AdmissionDashboard = () => {

    const [analyticsData, setAnalyticsData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const data = await fetchAdmissionAnalytics();
            setAnalyticsData(data);

        } catch (error) {
            console.error("Error fetching analytics data:", error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchDashboardData();
    }, []);

    console.log(analyticsData);
    return (
        <div className="p-4">

            {
                loading && <LoaderOverlay />
            }

            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Admission Analytics
                </h1>
                <button
                    onClick={fetchDashboardData}
                    className="px-4 py-2 rounded-md text-white transition flex items-center gap-2 
             bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                    Refresh
                    <LuRefreshCw className="text-lg animate-spin" />
                </button>
            </div>


            {!loading && analyticsData && (
                <div className="grid grid-cols-1 gap-6">
                    <section className="bg-transparent p-6 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Overview</h2>

                        <MetricsCards
                            total={analyticsData.totalApplicants}
                            verified={analyticsData.verifiedApplicants}
                            rejected={analyticsData.rejectedApplicants}
                        />
                    </section>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <ProgramChart data={analyticsData.applicationsByProgram} />

                        <section className="bg-transparent p-6 rounded-lg shadow-sm border border-gray-200">
                            <TrendChart data={analyticsData.applicationTrends} />
                        </section>

                    </div>
                    <section className="bg-transparent p-6 rounded-lg shadow-sm border border-gray-200">
                        <ProgramTable data={analyticsData.applicationsByProgram} />
                    </section>
                </div>
            )}
        </div>
    )

};

export default AdmissionDashboard;
