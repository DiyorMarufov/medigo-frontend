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
    fetch("https://dummyjson.com/products?limit=7")
      .then((res) => res.json())
      .then((data) => {
        const labels = data.products.map((p: any) => p.title);
        const prices = data.products.map((p: any) => p.price); 
        const stocks = data.products.map((p: any) => p.stock);

        setChartData({
          labels,
          datasets: [
            {
              label: "Narx ($)",
              data: prices,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Skladdagi soni",
              data: stocks,
              borderColor: "rgb(53, 162, 235)",
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
      title: { display: true, text: "📈 Product Statistikasi" },
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
