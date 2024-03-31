import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Search from "@/components/Search";
// import Footer from "../components/temp/Footer";
// import Profile from "../components/temp/Profile";
// import Contents from "../components/temp/Contents";

export default function Shared() {
  const [contentName, setContentName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const sampleData = await axios.get("/sample/folder");
    const folder = sampleData.data.folder;
    const name = folder.name;
    const owner = folder.owner;
    const links = folder.links;

    setContentName(name);
    setUserName(owner.name);
    setProfileImage(owner.profileImageSource);
    setData(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Head>
        <title>shared - Linkbrary</title>
      </Head>
      <h2>shared page</h2>
      <Search />
      {/* <Contents items={data} /> */}
    </>
  );
}
