import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: "pk_81692187_S6V7840TIPCTHSR2J1UY1LZFTRGZCZYA",
  },
});
