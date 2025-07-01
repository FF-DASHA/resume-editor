import styles from './styles.module.css'


const UserProfile = ({ userData }) => {
  const experience = userData?.experience || [];
  const education = userData?.education || [];
  const skills = userData?.skills || [];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Профиль пользователя</h2>
      <h3>Опыт</h3>
      {experience.length > 0 ? (
        experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.position} в {exp.company}</h4>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))
      ) : (
        <p>Нет данных о опыте.</p>
      )}

      <h3>Образование</h3>
      {education.length > 0 ? (
        education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.institution}</h4>
            <p>{edu.specialty}</p>
            <p>{edu.period}</p>
          </div>
        ))
      ) : (
        <p>Нет данных об образовании.</p>
      )}

      <h3>Навыки</h3>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>Нет данных о навыках.</p>
      )}
    </div>
  );
};

export default UserProfile;
