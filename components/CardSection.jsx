import styles from "./CardSection.module.css";
import Link from "next/link";
import Image from "next/image";
import CalculateTime from "@/functions/CalculateTime";
import KebabMenu from "@/components/items/kebabMenu";
import starIcon from "@/public/functionIcon/star.svg";
import kebabIcon from "@/public/functionIcon/kebab.svg";
import { useState } from "react";

function CardSection({ item, isShowModal, linkModal, linkDeleteModal }) {
  const { imageSource, created_at, description, url } = item;
  const createdDays = new Date(created_at);
  const [kebab, setKebab] = useState({});

  const handleKebabClick = (event) => {
    event.preventDefault();

    setKebab((prevMenus) => ({
      ...prevMenus,
      [item.id]: !prevMenus[item.id],
    }));
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkCardArea}
    >
      <div className={styles.imgGroup}>
        {imageSource ? (
          <img src={imageSource} alt="미리보기" className={styles.imgCard} />
        ) : (
          <div className={styles.noCardImg}></div>
        )}
        <button className={styles.btnStar}>
          <Image src={starIcon} alt="별모양" width={35} height={35} />
        </button>
      </div>
      <div className={styles.cardInfoGroup}>
        <div className={styles.timeInfoGroup}>
          <p className={styles.celapsedTime}>{CalculateTime(createdDays)}</p>
          <button className={styles.more} onClick={handleKebabClick}>
            <Image src={kebabIcon} alt="더보기" width={21} height={17} />
            {kebab[item.id] ? (
              <KebabMenu
                isShowModal={isShowModal}
                dataUrl={url}
                linkModal={linkModal}
                linkDeleteModal={linkDeleteModal}
              />
            ) : null}
          </button>
        </div>
        <p className={styles.desc}>{description}</p>
        <p className={styles.date}>{`${createdDays.getFullYear()}. ${
          createdDays.getMonth() + 1
        }. ${createdDays.getDate()}`}</p>
      </div>
    </Link>
  );
}
export default CardSection;
