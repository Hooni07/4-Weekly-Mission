import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Search from "@/components/items/Search";
import Profile from "@/components/Profile";
import Contents from "@/components/Contents";

export default function Shared() {
  const [contentName, setContentName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [data, setData] = useState([]);

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
      <Profile folder={contentName} user={userName} proImg={profileImage} />
      <Search />
      <Contents items={data} />
    </>
  );
}
