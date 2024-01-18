import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../Home/Sidebar";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";
import "./dashboard.css";
import axios from "axios";
import { ModelBarChart } from "./ModelBarChart";


const Dashbord = () => {

  const [dealerData, setDealerData] = useState([]);
  const [violationData, setViolationData] = useState([]);
  const [modelData,setModelData] =useState([]);
  const DealerClaims = () => {
    axios
      .get("http://localhost:5000/dealerclaim/")
      .then((res) => setDealerData(res.data))
      .catch((err) => console.log(err));
  };
  const VoilationCategorie = () => {
    axios
      .get("http://localhost:5000/violation/")
      .then((res) => setViolationData(res.data))
      .catch((err) => console.log(err));
  };
 const ModelWise =()=>{
    axios
    .get("http://localhost:5000/model/")
      .then((res) => setModelData(res.data))
      .catch((err) => console.log(err));
 }
 React.useEffect(()=>{
    DealerClaims();
    VoilationCategorie();
    ModelWise();
},[]);

const UpdateDealerYear= dealerData?.map(item =>item?.year)
const UpdateDealerData= dealerData?.map(item =>item?.dataDetails)

const UpadtedViolationName = violationData?.map(item => item?.name);
const UpadtedViolationValues = violationData?.map(item => item?.value);

const UpdateModelName = modelData?.map(item =>item?.name);
const UpdateModelvalue = modelData?.map(item =>item?.value);




 
  return (
    <div class="container-fluid wholebodi">
      <div class="row roww0">
        <Navbar></Navbar>
      </div>
      <div className="bottomdiv">
        <div className="lefftdiv">
          <Sidebar></Sidebar> 
        </div>
        <div className="righhtdiv">
          <div className="roww">
            <div>
              <span>Dashboard</span>
            </div>
            <div className="buttons">
              <button className="butto">Search</button>
              <button className="butto">Actions</button>
              <button className="butto">Download Report as</button>
            </div>
          </div>
          <div className="roww2">
            <input className="inp1" type="text" placeholder="Make" />
            <input className="inp1" type="text" placeholder="Models" />
            <input className="inp1" type="text" placeholder="Variants" />
            <input className="inp1" type="text" placeholder="Year" />
            <button className="butt">Go</button>
            <button className="butt">More Filters</button>
          </div>
          <div className="roww3">
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>120</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>120</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>120</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>120</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>120</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
            <div className="cols2">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>120</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="roww3">
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>Speed controlling</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>Santa Fe</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>

            <div className="cols2">
              <div className="innerrow1">
                <span className="headtext">Total Amount Claimed</span>
              </div>
              <div className="innerrow2">
                <div className="col-6">
                  <span>Ignition</span>
                </div>
                <div className="col-6 perc">
                  <span>2%</span>
                  <span>0.2%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="roww4">
            <div className="barr"><BarChart  year={UpdateDealerYear} dataa={UpdateDealerData} ></BarChart> </div>
             
            <div className="piee">
              <PieChart name ={UpadtedViolationName} values ={UpadtedViolationValues}></PieChart>
            </div>
            <div className="linee">
              {/*  */}
              <ModelBarChart name ={UpdateModelName} values ={UpdateModelvalue}></ModelBarChart>
            </div>
          </div>
          <div className="roww5">
          <LineChart name ={UpdateModelName} value ={UpdateModelvalue}></LineChart>
          </div>
        </div>
      </div>

      {/* <div class="row">
  <div class="col-md-2">
      
    </div>
    
    <div class="col-md-9">
    <div class="row-md-3">   
 
    <BarChart class ='BarChart'></BarChart>
    <PieChart class ='PieChart'></PieChart>
    <LineChart class ='LineChart'></LineChart>
   </div>
    
    </div>
  </div> */}
    </div>
  );
};

export default Dashbord;
