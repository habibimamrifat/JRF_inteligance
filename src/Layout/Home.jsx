import React, { createContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

// Create the context
export const HomeDataContext = createContext();

const Home = () => {
  const [homeData, setHomeData] = useState(null); // Initialize as null

  useEffect(() => {
    const dataCollector = async () => {
      try {
        const homeDataFetch = await fetch("/Data.json");
        const homeData = await homeDataFetch.json();
        setHomeData(homeData); 
        // console.log(homeData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    dataCollector();
  }, []);

  return (
    <HomeDataContext.Provider value={homeData}>
      {homeData ? (
        <>
          <header>
            <Navbar />
          </header>
          <main>
            {/* Content for main can go here */}
          </main>
          <footer>
            {/* Footer content can go here */}
          </footer>
        </>
      ) : (
        <h2>Loading...</h2> 
      )}
    </HomeDataContext.Provider>
  );
};

export default Home;
