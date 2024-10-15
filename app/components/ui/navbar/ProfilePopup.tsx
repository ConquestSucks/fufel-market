import Image from 'next/image'
import styles from './icon.module.css'

const IconWithTooltip = () => {
    return (
        <div className={styles.container}>
            <Image
                src='fufel-market-favicon-color.svg'
                width={35}
                height={35}
                alt=""
            />
            <div className={styles.menu} >
                <span>Вход</span>
                <span>Изменить тему</span>
            </div>
        </div>
    );
};

export default IconWithTooltip;
