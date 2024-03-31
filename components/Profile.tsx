import React from "react";
import styles from "./Profile.module.css";
import Image from "next/image";

interface ProfileProps {
  folder: string;
  user: string;
  proImg: string;
}

const Profile: React.FC<ProfileProps> = ({ folder, user, proImg }) => {
  return (
    <div className={styles.profile}>
      <Image
        src={proImg}
        alt="프로필 사진"
        className={styles.imgProfile}
        width={60}
        height={60}
      />
      <p className={styles.userName}>{user}</p>
      <h1 className={styles.folderName}>{folder}</h1>
    </div>
  );
};

export default Profile;
