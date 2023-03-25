import React from "react";
import AddTaskContainer from "../components/AddTaskContainer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TaskList from "../components/TaskList/TaskList";

const Home = () => {
  return (
    <Layout>
      <div className="container relative">
        <Sidebar />
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <AddTaskContainer />
            <TaskList />
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
