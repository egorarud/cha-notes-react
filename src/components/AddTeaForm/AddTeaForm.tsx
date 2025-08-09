import React, { useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addTea, UserTea } from "../../features/collection/collectionSlice";
import styles from "./AddTeaForm.module.scss";

const generateId = () => `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

interface AddTeaFormProps {
  onSubmitted?: () => void;
}

const AddTeaForm: React.FC<AddTeaFormProps> = ({ onSubmitted }) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [type, setType] = useState("");

  const isValid = useMemo(() => name.trim().length > 0, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const payload: UserTea = {
      id: generateId(),
      name: name.trim(),
      imageUrl: imageUrl.trim() || undefined,
      notes: notes.trim() || undefined,
      type: type || undefined,
    };
    dispatch(addTea(payload));
    setName("");
    setImageUrl("");
    setNotes("");
    onSubmitted?.();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImageUrl(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Название
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Например: Дун Дин Улун"
          required
        />
      </label>
      <label>
        Вид
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Белый">Белый</option>
          <option value="Зелёный">Зелёный</option>
          <option value="Жёлтый">Жёлтый</option>
          <option value="Улун">Улун</option>
          <option value="Красный">Красный</option>
          <option value="Чёрный">Чёрный</option>
          <option value="Шен Пуэр">Шен Пуэр</option>
          <option value="Шу Пуэр">Шу Пуэр</option>
        </select>
      </label>
      <label>
        Изображение
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <label>
        Заметки
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className={styles.textarea}
        />
      </label>
      <button type="submit" disabled={!isValid}>
        Добавить
      </button>
    </form>
  );
};

export default AddTeaForm;


