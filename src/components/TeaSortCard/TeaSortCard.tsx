import React from "react";
import styles from "./TeaSortCard.module.scss";

interface TeaCardProps {
  name: string;
  image: string;
  fermentation: string;
  brewing: string;
  regions: string;
  popular: string;
  description: string;
}

const TeaCard: React.FC<TeaCardProps> = ({ name, image, fermentation, brewing, regions, popular, description }) => (
  <div className={styles.teaCard}>
    <div className={styles.teaCardMedia}>
      <img src={image} alt={name} className={styles.teaCardImage} />
    </div>
    <div className={styles.teaCardContent}>
      <h2 className={styles.teaCardTitle}>{name}</h2>
      <p className={styles.teaCardDescription}>{description}</p>
      <div className={styles.teaCardMeta}>
        <div><strong>Степень ферментации:</strong> {fermentation}</div>
        <div><strong>Способ приготовления:</strong> {brewing}</div>
        <div><strong>Регионы:</strong> {regions}</div>
        <div><strong>Популярные чаи:</strong> {popular}</div>
      </div>
    </div>
  </div>
);

export default TeaCard;