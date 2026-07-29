import { useTaskContext } from "../../context/TaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const taskContext = useTaskContext();
  console.log(taskContext);
  return <div className={styles.container}></div>;
}
