import styles from "./Welcome.module.scss";

export function Welcome(){
return(
    <div className={styles.wrapper}>
    <h1 className={styles.title}>
        Welcome,<br/>
        I am Sai Swarup Noone
    </h1>
</div>
);
}