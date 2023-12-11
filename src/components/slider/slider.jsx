"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../slider/slider.css";
import "swiper/swiper-bundle.css";
import { calendar } from "@/data/calendar";

const CalendarSlider = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
    //
  };
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="flex justify-center items-center  "
        style={{ width: 400, height: 250 }}
      >
        {calendar.map((calendar) => (
          <SwiperSlide key={calendar.id} className=" space-y-2 text-center ">
            <div className="bg-primary p-1  text-center">
              <div className=" text-center">
                <span className=" font-semibold">{calendar.day}</span>
                <span className="flex justify-center text-xs">
                  {calendar.month}
                </span>
              </div>
              <div className=" text-center space-y-1">
                <ul>
                  {isShowMore
                    ? calendar.times.map((time, index) => (
                        <li className="text-center p-1" key={index}>
                          <button className=" bg-infoCard border-none text-black hover:text-black">
                            {time}
                          </button>
                        </li>
                      ))
                    : calendar.times.slice(0, 2).map((time, index) => (
                        <li className="text-center p-1" key={index}>
                          <button className=" bg-infoCard border-none text-black hover:text-black">
                            {time}
                          </button>
                        </li>
                      ))}{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </SwiperSlide>
        ))}{" "}
      </Swiper>
      <div className=" text-center">
        <button
          className=" bg-primary text-black border-none hover:text-black"
          onClick={toggleReadMoreLess}
        >
          {isShowMore ? "Daha Az Saat Göster" : "Daha Fazla Saat Göster"}
        </button>
      </div>
    </div>
  );
};

export default CalendarSlider;
