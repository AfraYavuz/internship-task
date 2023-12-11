"use client";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai"; //menu icon
import { AiOutlineClose } from "react-icons/ai"; //x icon
import Image from "next/image";
import tr from "@/assets/images/tr.png";
import en from "@/assets/images/eng.png";
import logo from "@/assets/images/logo.png";
import { Select, Space } from "antd";
import { LuStethoscope } from "react-icons/lu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-24 z-[50] bg-white fixed ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link href="https://www.livemedy.com/tr/">
            <Image
              id="logo-container"
              src={logo}
              alt="livemedy-logo"
              width={200}
              height={200}
              className=" ms-24"
            ></Image>
          </Link>

          <ul className="hidden md:flex text-sm ml-10">
            <li>
              <Link href="#blog" to="blog" smooth={true} duration={500}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#hakkimizda"
                to="hakkimizda"
                smooth={true}
                offset={-200}
                duration={500}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="#iletisim"
                to="iletisim"
                smooth={true}
                offset={-50}
                duration={500}
              >
                İletişim
              </Link>
            </li>
          </ul>
          <div className=" hidden md:flex ">
            <Space wrap className=" ml-36">
              <Select
                defaultValue="tr"
                style={{
                  width: 100,
                }}
                bordered={false}
                options={[
                  {
                    value: "tr",
                    label: (
                      <div className=" flex justify-between items-center ">
                        <Image src={tr} width={30} height={50} alt="tr-flag" />
                        TR
                      </div>
                    ),
                  },
                  {
                    value: "en",
                    label: (
                      <div className=" flex justify-between items-center">
                        <Image src={en} width={30} height={50} alt="uk-flag" />
                        EN
                      </div>
                    ),
                  },
                ]}
              />
            </Space>
          </div>
          <div className=" hidden md:flex">
            <LuStethoscope
              style={{ color: "E74B3C" }}
              className=" mr-2 ml-44"
            />
            <Link href="#kurumlar">KURUMLAR</Link>
          </div>
        </div>
        <div className="hidden md:flex pr-40">
          <button className="px-6 py-2 mr-0.5 rounded rounded-l-lg">
            Giriş
          </button>
          <button className="px-6 py-2 rounded rounded-r-lg">Üye Ol</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-10" />
          ) : (
            <AiOutlineClose className="w-5" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="#blog"
            to="blog"
            smooth={true}
            duration={500}
          >
            Blog
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="#hakkimizda"
            to="hakkimizda"
            smooth={true}
            offset={-200}
            duration={500}
          >
            Hakkımızda
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="iletisim"
            smooth={true}
            offset={-50}
            duration={500}
          >
            İletişim
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Giriş
          </button>
          <button className="px-8 py-3">Üye Ol</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
