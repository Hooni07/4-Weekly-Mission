import styles from "./Contents.module.css";
import CardSection from "./CardSection";

export default function Contents({ items, isShowModal }) {
  return (
    <section className={styles.sectionArea}>
      <ul className={styles.cardList}>
        {items.map((item) => (
          <li key={item.id} className={styles.cardItem}>
            <CardSection item={item} key={item.id} isShowModal={isShowModal} />
          </li>
        ))}
      </ul>
    </section>
  );
}
