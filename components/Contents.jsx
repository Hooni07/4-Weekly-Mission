import styles from "./Contents.module.css";
import CardSection from "./CardSection";

function Contents({ items, isShowModal }) {
  return (
    <section className={styles.sectionArea}>
      <ul className={styles.cardList}>
        {items.map((item) => (
          <li key={item.id} className={styles.cardIist}>
            <CardSection item={item} key={item.id} isShowModal={isShowModal} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contents;
