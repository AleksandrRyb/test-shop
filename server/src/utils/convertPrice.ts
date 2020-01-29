import axios from "axios";

export const convertPrice = async (price: number, currency: string) => {
  try {
    const res = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
    if (res.data) {
      const value = res.data.Valute[currency].Value;
      const converted = Math.floor((price / value) * 100) / 100;
      return converted;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
