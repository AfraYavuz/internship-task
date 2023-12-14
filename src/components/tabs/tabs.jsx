"use client";
import React from "react";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { FaStethoscope } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaRegHospital } from "react-icons/fa";

const ProfileTabs = ({ tabs }) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "-1px" }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            value="one"
            label="Genel"
            icon={<RiAccountBoxFill style={{ color: "black" }} />}
            iconPosition="start"
            wrapped
            className="flex lg:items-center lg:justify-center"
            sx={{
              flexGrow: 2,
              color: "black",
              fontSize: "25px",
              textTransform: "capitalize",
              "&:hover": {
                color: "black",
              },
            }}
          />
          <Tab
            value="two"
            icon={<FaCamera style={{ color: "black" }} />}
            iconPosition="start"
            label="Sosyal"
            wrapped
            className="flex lg:items-center lg:justify-center"
            sx={{
              flexGrow: 2,
              color: "black",
              fontSize: "25px",
              textTransform: "capitalize",
              marginBottom: "-4px",
              "&:hover": {
                color: "black",
              },
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value="one">
        <div>
          <div className="flex lg:items-center lg:text-center text-lg lg:text-sm lg:ml-0 lg:mb-4">
            <FaStethoscope className=" mr-2" />
            <p>Klinik İlgi Alanları</p>
          </div>
          <div className="flex  rounded-xl  lg:items-center   bg-primary lg:mt-1 shadow-lg text-black">
            <div className=" rounded-xl  text-center py-16 my-3 bg-primary">
              <p className="  text-center">{tabs.clinicalInterests}</p>
            </div>
          </div>
          <div className="flex items-center text-center text-lg ml-0 mt-3 mb-4">
            <PiStudentBold className=" mr-2" />
            <p>Eğitim Bilgileri</p>
          </div>
          <div className=" rounded-xl text-center items-center  bg-primary mt-1 shadow-lg text-black">
            <div className=" rounded-xl  py-2  bg-primary">
              <ul className="">
                {tabs.educationalInformation.map((education, index) => (
                  <li className="flex justify-between" key={index}>
                    <p className="mr-auto">{education.name}</p>
                    <p>{education.year}</p>
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="flex items-center text-center text-lg ml-0 mb-4 mt-3">
            <FaRegHospital className=" mr-2" />
            <p>İş Yeri ve Deneyim</p>
          </div>
          <div className=" rounded-xl text-center items-center  bg-primary mt-1 shadow-lg text-black">
            <div className=" rounded-xl  py-2  bg-primary">
              <ul className="">
                {tabs.experience.map((work, index) => (
                  <li className="flex justify-between" key={index}>
                    <p>{work.job}</p>
                    <p className="mr-center">{work.workspace}</p>
                    <p>{work.process}</p>
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="two">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className=" text-center text-md mb-5 mt-20 "
        >
          <FaCamera style={{ fontSize: "60px", color: "#ced4da" }} />
          <p style={{ color: "#6c757d" }}>
            Sağlık profesyoneli henüz paylaşım yapmadı.
          </p>
        </div>
      </TabPanel>
    </TabContext>
  );
};

export default ProfileTabs;
