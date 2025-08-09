import React, { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import Modal from "../components/Modal/Modal";
import AddTeaForm from "../components/AddTeaForm/AddTeaForm";
import CollectionTeaCard from "../components/CollectionTeaCard/CollectionTeaCard";
import { removeTea, UserTea } from "../features/collection/collectionSlice";
import styles from "./ProfilePage.module.scss";

const ProfilePage: React.FC = () => {
  const items = useAppSelector((s) => s.collection.items);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [active, setActive] = useState<UserTea | null>(null);

  const openViewer = (tea: UserTea) => {
    setActive(tea);
    setViewerOpen(true);
  };
  const closeViewer = () => {
    setViewerOpen(false);
    setActive(null);
  };

  return (
    <main>
      <section className={`container ${styles.container}`} aria-label="Личный кабинет">
        <h1>Моя коллекция чая</h1>

        <div className={`hero__actions ${styles.actions}`}>
          <button className="button" onClick={() => setOpen(true)}>Добавить чай</button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} title="Добавить чай">
          <AddTeaForm onSubmitted={() => setOpen(false)} />
        </Modal>

        <div className={styles.sectionSaved}>
          {items.length === 0 ? (
            <p>Пока пусто. Добавьте первый чай через форму выше.</p>
          ) : (
            <ul className={`grid-squares ${styles.list}`}>
              {items.map((item) => (
                <CollectionTeaCard key={item.id} tea={item} onOpen={openViewer} />
              ))}
            </ul>
          )}
        </div>

        <Modal open={viewerOpen} onClose={closeViewer} title={active?.name || "Чай"}>
          {active && (
            <div className={styles.viewerGrid}>
              <div className={styles.viewerImage}>
                {active.imageUrl ? (
                  <img className={styles.viewerImgTag} src={active.imageUrl} alt={active.name} />
                ) : (
                  <div className={styles.viewerNoPhoto}>Нет фото</div>
                )}
              </div>
              {active.type && <div><strong>Сорт:</strong> {active.type}</div>}
              {active.notes && <div><strong>Заметки:</strong> {active.notes}</div>}
            </div>
          )}
        </Modal>
      </section>
    </main>
  );
};

export default ProfilePage;


