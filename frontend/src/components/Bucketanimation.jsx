import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Pie, Line } from "react-chartjs-2";

export const Bucketanimation = () => {
  const [coolingTowers, setCoolingTowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/coolingtowers", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        console.log (response)
        const data = await response.json();
        setCoolingTowers(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  useEffect(() => {
    const delay = 3000; // Delay in milliseconds (e.g., 2000ms = 2 seconds)

    const timeoutId = setTimeout(() => {
      const updatedCoolingTowers = coolingTowers.map((coolingTower) => {

        let trans = coolingTower.amount_of_water - coolingTower.evaporation_rate;
        return {
          ...coolingTower,
          customStyle: `${coolingTower.amount_of_water}%`,
          customTransition: `height ${trans}s linear`,
        };
      });
      setCoolingTowers(updatedCoolingTowers);
    }, delay);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the delay
    };
  }, [coolingTowers]); // Listen for changes in the coolingTowers state

  return (
    <>
      <div className="container p-5">
        <div className="row">
          {coolingTowers.map((coolingTower) => {

            const datas = {
            labels: ["Amount of water", "Number of Holes", "Water Cycles"],
            datasets: [
              {
                label: "Water",
                data: [coolingTower.amount_of_water, coolingTower.evaporation_rate, coolingTower.water_cycles],
                backgroundColor: [
                  "rgb(54, 162, 235)", // Blue Value
                  "rgb(255, 99, 132)", // Red Value
                  "rgb(0, 0, 0)", // Red Value
                ],
                hoverOffset: 4,
              },
            ],  };

            return (
              <div className="col-md-6 mt-3" key={coolingTower.id}>
                <div className="card">
                  <div className="card-header">{coolingTower.name}</div>
                  <div className="card-body">


              

                    <div className="row">
                    <div className="col-md-6">
                    <div className="bucket">
                      <div
                        className="water"
                        style={{
                          height: coolingTower.customStyle
                            ? coolingTower.customStyle
                            : "100%",
                          transition: coolingTower.customTransition 
                            ? coolingTower.customTransition 
                            : 'height 5s linear'
                        }}
                      ></div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <Pie data={datas} />
                    </div>
                    </div>


                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
