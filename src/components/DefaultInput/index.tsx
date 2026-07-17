import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string; /*"?" -- declara como opcional*/
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} className={styles.input} type={type} {...rest}></input>
    </>
  );
}

/* 
...rest = adiciona o restante das propriedades do input, como placeholder, value, onChange, etc.

se eu quiser adicionar condicionais, abro {} e coloco a condicional dentro, ex:
{labelText && <label htmlFor={id}>{labelText}</label>}

Isso significa que se labelText existir, ele vai renderizar o label, caso contrário, não renderiza nada.

*/
