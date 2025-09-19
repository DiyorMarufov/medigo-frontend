import { memo, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=7")
      .then((res) => res.json())
      .then((data) => {
        const labels = data.users.map((u: any) => u.firstName);
        const ages = data.users.map((u: any) => u.age); 
        const heights = data.users.map((u: any) => u.height);

        setChartData({
          labels,
          datasets: [
            {
              label: "Yosh",
              data: ages,
              borderColor: "rgb(255, 159, 64)",
              backgroundColor: "rgba(255, 159, 64, 0.5)",
            },
            {
              label: "Balandlik (sm)",
              data: heights,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
          ],
        });
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "👤 Foydalanuvchilar statistikasi" },
    },
  };

  return (
    <div className="w-full h-[400px]">
      {chartData.labels.length > 0 ? (
        <Line options={options} data={chartData} />
      ) : (
        <p className="text-center text-gray-500">Loading chart...</p>
      )}
    </div>
  );
};

export default memo(LineChart);
