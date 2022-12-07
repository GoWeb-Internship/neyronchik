import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "gatsby-plugin-react-i18next";
// import { Headings } from "../Headings/Headings";
import * as s from "./Contact.module.css";

export const Contact = ({
  contactUs,
  phone_main,
  phone_add,
  email,
  socials,
  city,
  address,
}) => {
  const { t } = useTranslation();
  const { weWork, time } = t("contactsSection", {
    returnObjects: true,
  });

  return (
    <div
      className={s.contactsContainer}
      // className="flex justify-end px-[53px] py-[60px] text-neutral-900"
    >
      <div className={s.background}></div>
      <div
        className={s.wrapper}
        // className="rounded-[20px] border border-[#FAFAFA] bg-sky-200 p-7 text-[16px] font-medium tracking-[-0.019em] shadow-[0_0_19px_5px_rgba(52,101,123,0.15)_inset_-20px_-20px_40px_rgba(255,255,255,0.2)_inset_20px_20px_40px_rgba(255,255,255,0.2)]"
      >
        <h3 className={s.title}>{contactUs}</h3>
        <address className={s.contactContainer}>
          <div className={s.detailsWrapper}>
            <a href={`tel:${phone_main}`} className="block sm:mb-3 md:mb-4">
              {phone_main}
            </a>
            {phone_add && (
              <a href={`tel:${phone_add}`} className="block sm:mb-3 md:mb-4">
                {phone_add}
              </a>
            )}
            <a
              href={`mailto:${email}`}
              className="block sm:mb-3 md:mb-5 xl:mb-4"
            >
              {email}
            </a>
            <ul className={s.messengerList}>
              <li
                className={s.item}
                // className="mr-3 flex h-8 w-8 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer"
              >
                <a href="">
                  <FaTelegramPlane />
                </a>
              </li>
              <li className={s.item}>
                <a href="">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
            <h3 className="mb-3 md:mb-4">{socials}</h3>
            <ul className={s.socialList}>
              <li className={s.item}>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className={s.item}>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className={s.location}>
            <p className="mb-4 md:mb-8 md:max-w-[150px]">
              {city} <br />
              {address}
            </p>
            <p>
              {weWork} <br /> {time}
            </p>
          </div>
        </address>
      </div>
    </div>
  );
};
