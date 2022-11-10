import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import locationApi from "../api/locationApi";

export const PhoneLocal = () => {
  const [ip, setIp] = React.useState("");
  const [value, setValue] = React.useState("");

  locationApi()
    .then((ip) => setIp(ip))
    .catch((err) => console.log(err));

  return (
    <PhoneInput
      country={ip}
      value={value}
      preferredCountries={["ua"]}
      placeholder="Enter your phone number"
      enableSearch="true"
      onChange={(value) => setValue(value)}
      searchPlaceholder="Choose your country"
      disableSearchIcon="true"
    />
  );
};
