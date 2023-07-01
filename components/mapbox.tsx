import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import postData from "@/utils/requests";
import React, { useState, useEffect } from "react";
import Mapmarker from "../pages/mapmarker";
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


var mydata = {
  username: "Blue Berry",
  attractionCatagory: ["Museums"],
  foodCatagory: ["mexican"],
  userCatagory: ["Solo"],
  city: "NewYork",
};
/*
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
*/