import BarChart from "../charts/BarChart";
import { UserData } from "../Data";
import { useState } from "react";
import LineChart from "../charts/LineChart";

export default function PlotArea(props){
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.datetime),
        datasets: [
          {
            label: "Score",
            data: UserData.map((data) => data.score1),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
      return (
        <div style={{display:'flex',flexDirection:'row' , flexWrap:'wrap' ,justifyContent:'space-evenly',margin:'5vh'}}>
          <div style={{ width: '40%'  }}>
            <BarChart chartData={userData} />
          </div>
           <div style={{ width: '40%'  }}>
            <LineChart chartData={userData} />
          </div>
          </div>
      );
}