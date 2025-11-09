const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const fetchAdmissionAnalytics = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalApplicants = randomInRange(500, 1500);
      const verifiedApplicants = randomInRange(300, totalApplicants - 100);
      const rejectedApplicants = totalApplicants - verifiedApplicants - randomInRange(50, 150);

      const programs = ["BBA", "BCA", "MBA", "MCA", "B.Tech"];

      const applicationsByProgram = programs.map((program) => ({
        program,
        count: randomInRange(50, 500),
      }));

      const applicationTrends = Array.from({ length: 7 }).map((_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - index));

        return {
          date: date.toISOString().split("T")[0],
          count: randomInRange(20, 120),
        };
      });

      resolve({
        totalApplicants,
        verifiedApplicants,
        rejectedApplicants,
        applicationsByProgram,
        applicationTrends,
      });
    }, 600);
  });
};
