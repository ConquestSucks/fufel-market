import styles from '../searchbar/searchbar.module.scss';
import FindButton from '@/public/searchbar/find-button.svg';

export default function SearchBar() {
    return (
        <div className={styles.outline}>
            <input/>
            <div className={styles.find}>
                <FindButton/>
            </div>
        </div>
    )
}