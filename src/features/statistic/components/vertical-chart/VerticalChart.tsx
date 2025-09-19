import { memo, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones?limit=6")
      .then((res) => res.json())
      .then((data) => {
        const labels = data.products.map((p: any) => p.title);
        const prices = data.products.map((p: any) => p.price);
        const ratings = data.products.map((p: any) => p.rating);

        setChartData({
          labels,
          datasets: [
            {
              label: "Narx ($)",
              data: prices,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Reyting",
              data: ratings,
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        });
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "📊 Smartphone Statistikasi" },
    },
  };

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      {chartData.labels.length > 0 ? (
        <Bar options={options} data={chartData} />
      ) : (
        <p className="text-gray-500">Loading chart...</p>
      )}
    </div>
  );
};

export default memo(VerticalChart);
