import styles from "./Card.module.scss";
// import Image from 'next/image'

export function Card(props) {

    const { id,title, description, url, image, orientation = "top", github} = props;
    return (
        <a href={url} target="_blank" className={styles.card}
           style={{justifyContent: orientation === "top" ? "space-between" : ""}}>
            {image && orientation === "bot" &&
            <img className={styles.card__image} src={image}/>
            }
            <div className={styles.card__details}>
                <h3>{title} &rarr;</h3>
                <p>{description}</p>
                {github &&
                <>
                    <br/>
                    <a href={github} target="_target">Github</a>
                </>
                }
            </div>
            {image && orientation === "top" &&
            // <Image className={styles.card__image} src={image} width={500}
            // height={500} />
            <img className={styles.card__image} src={image}/>
            }
        </a>
    );
}