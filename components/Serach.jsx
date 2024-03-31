import styles from "./Search.module.css";
import searchIcon from "@/public/functionIcon/search.svg";
import "../styles/Search.css";

export default function Search() {
  return (
    <div className={styles.searchBar}>
      <Image src={searchIcon} width={16} height={16} alt="돋보기 아이콘" />
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
}
