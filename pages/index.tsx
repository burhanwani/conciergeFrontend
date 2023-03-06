import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Mapmarker from "./mapmarker";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";
import { placeState } from "@/atoms/placeAtom";

const inter = Inter({ subsets: ["latin"] });

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

var mydata = {
  username: "Blue Berry",
  attractionCatagory: ["Museums"],
  foodCatagory: ["mexican"],
  userCatagory: ["Solo"],
  city: "NewYork",
};

export default function Home() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    postData("/itinerary", mydata).then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  const setPlace = useSetRecoilState(placeState);
  useEffect(() => {
    setPlace((oldplace) => [...oldplace, "40.7831,-73.9712"]);
  }, []);
  return <Mapmarker />;
}
