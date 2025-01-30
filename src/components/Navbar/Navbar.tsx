// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NetworkPanel } from '../NetworkPanel/NetworkPanel';
import styles from './navbar.module.css';

export const Navbar = () => {
    const [isNetwork, setIsNetwork] = useState(true);
    // const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <button onClick={() => setIsNetwork(true)} className={!isNetwork ? styles.active : ''}>Сеть</button>
                        </li>
                        <li className={styles.navItem}>
                            <button onClick={() => setIsNetwork(false)} className={!isNetwork ? styles.active : ''}>Что-то еще</button>
                        </li>
                    </ul>
                </nav>
            </div>
            {isNetwork ? <NetworkPanel /> : <div>Что-то</div>}
        </div>
    );
};