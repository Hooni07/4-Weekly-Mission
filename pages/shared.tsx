import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
// import Footer from "../components/temp/Footer";
// import Profile from "../components/temp/Profile";
// import Contents from "../components/temp/Contents";
// import Search from "../components/temp/Search";

export default function Shared() {
  const [contentName, setContentName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  // const handleLoad = async () => {
  //   const sampleData = await axios.get("/sample/folder");
  //   const folder = sampleData.data.folder;
  //   const name = folder.name;
  //   const owner = folder.owner;
  //   const links: [] = folder.links;
  //   const user = await axios.get("/sample/user");

  //   setContentName(name);
  //   setUserName(owner.name);
  //   setProfileImage(owner.profileImageSource);
  //   setData(links);
  //   setUser(user.data);
  //   console.log(folder);
  //   console.log("----------------");
  //   console.log(owner, name, owner.name, links);
  //   console.log(typeof links);
  //   console.log("----------------");
  //   console.log(user.data);
  // };

  // useEffect(() => {
  //   handleLoad();
  // }, []);

  return (
    <>
      <Head>
        <title>shared - Linkbrary</title>
      </Head>
      <h2>shared page ${user}</h2>
    </>
  );
}
