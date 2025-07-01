import UserEdit from "../src/user/user-edit/user-edit";
import styles from './style.module.css'

function App() {

  return (
    <div className="App">
      <div className={styles.wrapper}>
      <UserEdit />
      </div>
    </div>
  );
}

export default App;