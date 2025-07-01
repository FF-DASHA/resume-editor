import React, { useState } from 'react';
import styles from './styles.module.css';

const UserEdit = ({ propsExperience, propsEducation, propsSkills }) => {
  const [open, setOpen] = useState(false);
  const [sectionType, setSectionType] = useState('');

  const [date, setDate] = useState({
    position: '',
    company: '',
    period: '',
    description: '',
    institution: '',
    specialty: '',
    skills: '',
  });

  const handleAddSection = () => {
    setOpen(true);
  };
  const renderForm = () => {
    switch (sectionType) {
      case 'Опыт':
        return (
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Опыт</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Должность"
              value={date.position}
              onChange={(e) => setDate({ ...date, position: e.target.value })}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Компания"
              value={date.company}
              onChange={(e) => setDate({ ...date, company: e.target.value })}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Период"
              value={date.period}
              onChange={(e) => setDate({ ...date, period: e.target.value })}
            />
            <textarea
              className={styles.textarea}
              placeholder="Описание"
              value={date.description}
              onChange={(e) => setDate({ ...date, description: e.target.value })}
            ></textarea>
            <button className={styles.button} onClick={() => {
              propsExperience({
                position: date.position,
                company: date.company,
                period: date.period,
                description: date.description,
              });
              setDate({
                position: '',
                company: '',
                period: '',
                description: '',
                institution: '',
                specialty: '',
                skills: '',
              });
              setSectionType('');
            }}>Добавить</button>
          </div>
        );
      case 'Образование':
        return (
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Образование</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Учебное заведение"
              value={date.institution}
              onChange={(e) => setDate({ ...date, institution: e.target.value })}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Специальность"
              value={date.specialty}
              onChange={(e) => setDate({ ...date, specialty: e.target.value })}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Период"
              value={date.period}
              onChange={(e) => setDate({ ...date, period: e.target.value })}
            />
            <button className={styles.button} onClick={() => {
              propsEducation({
                institution: date.institution,
                specialty: date.specialty,
                period: date.period,
              });
              setDate({
                position: '',
                company: '',
                period: '',
                description: '',
                institution: '',
                specialty: '',
                skills: '',
              });
              setSectionType('');
            }}>Добавить</button>
          </div>
        );
      case 'Навыки':
        return (
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Навыки</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Список навыков"
              value={date.skills}
              onChange={(e) => setDate({ ...date, skills: e.target.value })}
            />
            <button className={styles.button} onClick={() => {
              propsSkills({
                skills: date.skills.split(',').map(skill => skill.trim()), 
              });
              setDate({
                position: '',
                company: '',
                period: '',
                description: '',
                institution: '',
                specialty: '',
                skills: '',
              });
              setSectionType('');
            }}>Добавить</button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <h1>Добавить секцию</h1>
      <button className={styles.buttonBlack} onClick={() => setOpen(!open)}>
        {open ? 'Закрыть' : 'Добавить секцию'}
      </button>

      {open && (
        <div>
          <select onChange={(e) => setSectionType(e.target.value)} value={sectionType}>
            <option value="">Выберите секцию</option>
            <option value="Опыт">Опыт</option>
            <option value="Образование">Образование</option>
            <option value="Навыки">Навыки</option>
            <option value="О себе">О себе</option>
          </select>
          <button className={styles.buttonBlack} onClick={handleAddSection} disabled={!sectionType}>
            Добавить
          </button>
        </div>
      )}

      {sectionType && renderForm()}

      {sectionType && (
        <button className={styles.buttonBlack} onClick={() => setSectionType('')}>Закрыть форму</button>
      )}
    </div>
  );
}

export default UserEdit;
