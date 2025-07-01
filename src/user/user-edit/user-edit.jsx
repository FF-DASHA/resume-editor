import React, { useState } from 'react';
import styles from './styles.module.css';

const UserEdit = () => {
  const [open, setOpen] = useState(false);
  const [sectionType, setSectionType] = useState('');

  const handleAddSection = () => {
    setOpen(true);
  };

  const renderForm = () => {
    switch (sectionType) {
      case 'Опыт':
        return (
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Опыт</h3>
            <input type="text" placeholder="Должность" />
            <input type="text" placeholder="Компания" />
            <input type="text" placeholder="Период" />
            <textarea placeholder="Описание"></textarea>
          </div>
        );
      case 'Образование':
        return (
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Образование</h3>
            <input type="text" placeholder="Учебное заведение" />
            <input type="text" placeholder="Специальность" />
            <input type="text" placeholder="Период" />
          </div>
        );
      case 'Навыки':
        return (
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Навыки</h3>
            <input type="text" placeholder="Список навыков" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Добавить секцию</h1>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Закрыть' : 'Добавить секцию'}
      </button>

      {open && (
        <div>
          <select onChange={(e) => setSectionType(e.target.value)} value={sectionType}>
            <option value="">Выберите секцию</option>
            <option value="Опыт">Опыт</option>
            <option value="Образование">Образование</option>
            <option value="Навыки">Навыки</option>
            <option value="Сертификаты">Сертификаты</option>
            <option value="О себе">О себе</option>
          </select>
          <button onClick={handleAddSection} disabled={!sectionType}>
            Добавить
          </button>
        </div>
      )}

      {sectionType && renderForm()}

      {sectionType && (
        <button onClick={() => setSectionType('')}>Закрыть форму</button>
      )}
    </div>
  );
}

export default UserEdit;
