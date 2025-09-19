import { memo, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetch("https://dummyjson.com/carts/1")
      .then((res) => res.json())
      .then((data) => {
        const labels = data.products.map((p: any) => p.title);
        const quantities = data.products.map((p: any) => p.quantity); 

        setChartData({
          labels,
          datasets: [
            {
              label: "Sotilgan soni",
              data: quantities,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      {chartData.labels.length > 0 ? (
        <Pie data={chartData} />
      ) : (
        <p className="text-gray-500">Loading chart...</p>
      )}
    </div>
  );
};

export default memo(PieChart);
