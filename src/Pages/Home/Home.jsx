import React from 'react';
import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import "./home.css";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

export default function Home() {

 const[category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}