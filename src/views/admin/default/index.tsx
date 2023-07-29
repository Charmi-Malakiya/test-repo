import { useEffect, useState } from "react";
import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import { useDispatch, useSelector } from "react-redux";
import { fetchCasesWithDateData, fetchContryCovidData, fetchCovidData, selectCasesWithDateData, selectContryCovidData, selectCovidData } from "features/dashboard/dashboardSlice";
import { AppDispatch } from "redux/store";

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // const covidData = useSelector(selectCovidData);
  const contryCovidData = useSelector(selectContryCovidData);
  const fetchCasesWithDate = useSelector(selectCasesWithDateData);

  // useEffect(() => {
  //   // dispatch(fetchCovidData());
  //   // dispatch(fetchContryCovidData());
  //   // dispatch(fetchCasesWithDateData());
  // }, [dispatch]);

  // useEffect(() => {
  //   console.log('covidData---', covidData);
  // }, [covidData]);

  // useEffect(() => {
  //   console.log('contrycovidData---+++++', contryCovidData);
  // }, [contryCovidData]);

  // useEffect(() => {
  //   console.log('fetchCasesWithDate---+++++', fetchCasesWithDate);
  // }, [fetchCasesWithDate]);

  return (
    <div>

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* <PieChartCard /> */}
        <TotalSpent />
        <DailyTraffic />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5">
        {/* Traffic chart & Pie Chart */}
        <WeeklyRevenue />
      </div>

    </div>
  );
};

export default Dashboard;
