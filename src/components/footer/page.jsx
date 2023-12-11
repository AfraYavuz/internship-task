"use client";
import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full  bg-footerColor text-black  px-2">
      <div className="hidden md:flex items-center py-6">
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
            <Link
              href="#hakkimizda"
              to="hakkimizda"
              smooth={true}
              duration={500}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              href="#sss"
              to="sss"
              smooth={true}
              offset={-200}
              duration={500}
            >
              Sıkça Sorulan Sorular
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
      </div>
      <div className=" hidden md:flex space-x-80  py-4 ">
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl p-8 mt-10 ml-80 ">
          <AiFillTwitterCircle style={{ color: "#e74b3c" }} />
          <FaInstagramSquare
            className="rounded-full"
            style={{ color: "#e74b3c" }}
          />
          <FaFacebook style={{ color: "#e74b3c" }} />
          <FaLinkedin className="rounded-full " style={{ color: "#e74b3c" }} />
        </div>
        <div className=" flex-auto pt-8 md:pt-2 ">
          <p className="py-4">
            Özel fırsatlar ve güncellemeler için bültenimize <br />
            abone olun:
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className=" w-64 p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="e-posta"
            />
            <button className=" bg-btnColor border-none p-2 mb-4">
              Gönder
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-2 py-1 md:py-8">
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className=" text-xs text-gray-500 sm:text-center dark:text-gray-400">
            ©2020
            <a href="https://www.livemedy.com/tr/">
              Livemedy Sağlık Platformu A.Ş.
            </a>{" "}
            Tüm hakları saklıdır.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Kullanım Koşulları
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                KVKK
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Davranış Kuralları
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gizlilik Politikası
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
