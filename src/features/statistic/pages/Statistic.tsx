import { memo } from "react";
import PieChart from "../components/pie-chart/PieChart";
import LineChart from "../components/line-chart/LineChart";
import { Users, DollarSign, ShoppingBag } from "lucide-react";
import VerticalChart from "../components/vertical-chart/VerticalChart";

const Statistic = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        📊 Dashboard Statistikasi
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl shadow-md p-4 bg-white flex items-center gap-4">
          <Users className="w-10 h-10 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Foydalanuvchilar</p>
            <h2 className="text-xl font-semibold">12,345</h2>
          </div>
        </div>

        <div className="rounded-2xl shadow-md p-4 bg-white flex items-center gap-4">
          <DollarSign className="w-10 h-10 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Umumiy daromad</p>
            <h2 className="text-xl font-semibold">$25,600</h2>
          </div>
        </div>

        <div className="rounded-2xl shadow-md p-4 bg-white flex items-center gap-4">
          <ShoppingBag className="w-10 h-10 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Buyurtmalar</p>
            <h2 className="text-xl font-semibold">1,234</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        <div className="rounded-2xl shadow-md bg-white p-5 flex flex-col">
          <h2 className="text-lg font-semibold mb-2">📈 Oylik trend</h2>
          <div className="w-[1400px] flex justify-center">
            <div className="">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl shadow-md bg-white p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">
              🍩 Bo‘linma statistikasi
            </h2>
            <div className="w-[400px]">
              <PieChart />
            </div>
          </div>

          <div className="rounded-2xl shadow-md bg-white p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">📊 Vertical Chart</h2>
            <div className="w-[700px]">
              <VerticalChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Statistic);
