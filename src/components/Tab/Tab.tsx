import styles from './tab.module.css';

interface TabProps {
    title: string;
    onClose: () => void;
    isActive: boolean;
    onClick: () => void;
}

export const Tab = ({ title, onClose, isActive, onClick }: TabProps) => {
    return (
        <div
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <span>{title}</span>
            <button onClick={onClose} className={styles.close}>&#215;</button>
        </div>
    );
};
