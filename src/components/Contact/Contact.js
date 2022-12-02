import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export const Contact = ({
  contactUs,
  phone_main,
  phone_add,
  email,
  socials,
  city,
  address,
}) => {
  return (
    <div className="flex justify-end px-[53px] py-[60px] text-neutral-900">
      <div className="rounded-[20px] border border-[#FAFAFA] bg-sky-200 p-7 text-[16px] font-medium tracking-[-0.019em] shadow-[0_0_19px_5px_rgba(52,101,123,0.15)_inset_-20px_-20px_40px_rgba(255,255,255,0.2)_inset_20px_20px_40px_rgba(255,255,255,0.2)]">
        {/* <Headings type="h3" className="text-[16px] font-medium">
              {contactUs}
            </Headings> */}
        <h3 className="mb-10 text-[16px] font-medium tracking-[-0.019em]">
          {contactUs}
        </h3>
        <address className="flex text-left not-italic ">
          <div className="flex-col border-r-2 border-neutral-900 pr-5">
            <a href={`tel:${phone_main}`} className="mb-4 block">
              {phone_main}
            </a>
            {phone_add && (
              <a href={`tel:${phone_add}`} className="block">
                {phone_add}
              </a>
            )}
            <a href={`mailto:${email}`} className="mb-7 block">
              {email}
            </a>
            <ul className="mb-7 flex">
              <li className="mr-3 flex h-8 w-8 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
                <a href="">
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="flex h-8 w-8 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
                <a href="">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
            {/* <Headings type="h3">{socials}</Headings> */}
            <h3 className="mb-4">{socials}</h3>
            <ul className="flex">
              <li className="mr-3 flex h-8 w-8 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="flex h-8 w-8 items-center justify-center rounded border border-neutral-900 hover:cursor-pointer">
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-[166px] pl-4">
            <p>{city}</p>
            <p className="mb-8">{address}</p>
            <p>
              Часи роботи: <br /> з 9:00 до 17:00
            </p>
          </div>
        </address>
      </div>
    </div>
  );
};
