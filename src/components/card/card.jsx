import React from "react";
import { HeartOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import Image from "next/image";
import profileImage from "@/data/profiles";
import CalendarSlider from "../slider/slider";

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <Card
        className=" rounded-[25px] shadow-lg"
        style={{
          width: 400,
          height: 700,
        }}
      >
        <div className=" flex relative">
          <div className=" mr-4 ">
            <Image
              alt="example"
              src={profileImage}
              className=" w-45 rounded-md ring-2 ring-gray-400 shadow-lg"
              style={{}}
            />
          </div>
          <div className=" text-black  top-2">
            <h1 className=" text-xl font-semibold ">{profile.name}</h1>
            <h1 className="text-xl font-semibold">{profile.surname}</h1>
            <h1 className=" text-slate-500">{profile.job}</h1>
            <div className=" mt-6 absolute bottom-0 right-0">
              <button
                id="card"
                className=" bg-primary mr-5 border border-none text-black hover:text-iconColor"
              >
                <HeartOutlined />
              </button>
              <button
                id="card"
                className=" bg-primary border border-none text-black hover:text-iconColor"
              >
                <ArrowUpOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="card-info flex  rounded-xl gap-0.5 items-center flex-nowrap  bg-primary mt-1   ">
          <div className=" card-city rounded-l-xl w-1/3 text-center py-7 my-5  bg-infoCard">
            <span className=" font-bold"> Şehir</span>
            <div className="flex items-center justify-center gap-1">
              <FaLocationDot />
              {profile.city}
            </div>
          </div>
          <div className="card-language rounded-none w-1/3 text-center  py-7 my-5 bg-infoCard">
            <span className=" font-bold">Dil</span>
            <div className=" flex items-center justify-center gap-1 ">
              <BiWorld />
              {profile.language}
            </div>
          </div>
          <div className="card-wage rounded-r-xl w-1/3 text-center py-7 my-5 bg-infoCard">
            <span className=" font-bold">Ücret</span>
            <div className="flex items-center justify-center gap-1 ">
              <MdAccountBalanceWallet />
              {profile.wage}
            </div>
          </div>
        </div>
        <div className=" mt-1">
          <span className=" text-2xl font-semibold">Randevu Al</span>
        </div>
        <div className=" flex justify-center m-3">
          <CalendarSlider />
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
