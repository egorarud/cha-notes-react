import React from "react";
import styles from "./CollectionTeaCard.module.scss";
import { UserTea, removeTea } from "../../features/collection/collectionSlice";
import { useAppDispatch } from "../../hooks";

interface CollectionTeaCardProps {
  tea: UserTea;
  onOpen?: (tea: UserTea) => void;
}

const CollectionTeaCard: React.FC<CollectionTeaCardProps> = ({ tea, onOpen }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.card} onClick={() => onOpen?.(tea)}>
      <div className={styles.image}>
        {tea.imageUrl ? (
          <img className={styles.thumbImg} src={tea.imageUrl} alt={tea.name} />
        ) : (
          <div className={styles.noPhoto}>Нет фото</div>
        )}
      </div>
      <div className={styles.caption}>{tea.name}</div>
    </li>
  );
};

export default CollectionTeaCard;


