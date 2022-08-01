import styles from './Header.module.css'
import {useStore} from '../../stores/store';
import {observer} from 'mobx-react-lite';

const Header = () => {
    const { itemStore } = useStore();
    const {totalCount} = itemStore
    return (
        <div className={styles.header}>
            <h2 className={styles.title}>Mobx Dem <span className={styles.counter}>Total Count: {totalCount}</span> </h2>
        </div>
    );
}

export default observer(Header);
