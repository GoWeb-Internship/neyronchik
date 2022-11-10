import axios from "axios";

const locationApi = async () => {
  let ip;

  const res = await axios.get("https://geolocation-db.com/json/");
  ip = res.data.country_code.toLowerCase();

  return ip;

  // const [ip, setIP] = useState("");

  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   // console.log(res.data);
  //   setIP(res.data.country_code.toLowerCase());
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log("location", ip);
};

export default locationApi;
