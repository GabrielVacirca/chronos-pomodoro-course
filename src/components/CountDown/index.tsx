import styles from "./styles.module.css";
import { HomeProps } from "../../Pages/Home"

export function CountDown({state}: HomeProps) {
  return (
    <div className={styles.container}>
      {state.formattedSecondsRemaining}
    </div>
  );
}
