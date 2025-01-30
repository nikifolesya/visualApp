// NetworkPanel.js
import { useState, useEffect, ReactNode } from 'react';
import { DataFetching } from '../NetworkComps/DataFetching';
import { Tab } from '../Tab/Tab';
import styles from './networkPanel.module.css';

export const NetworkPanel = () => {
    interface TabType {
        title: string;
        content: ReactNode;
        id: number;
    }

    const [tabs, setTabs] = useState<TabType[]>([]);
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const addTab = (title: string, content: ReactNode) => {
        const existingTab = tabs.find(tab => tab.title === title);
        if (existingTab) {
            setActiveTab(existingTab.id);
        } else {
            const newTab: TabType = { title, content, id: Date.now() };
            setTabs([...tabs, newTab]);
            setActiveTab(newTab.id);
        }
    };

    const closeTab = (id: number) => {
        setTabs(prevTabs => prevTabs.filter(tab => tab.id !== id));
    };

    useEffect(() => {
        if (activeTab !== null && !tabs.some(tab => tab.id === activeTab)) {
            setActiveTab(tabs.length > 0 ? tabs[0].id : null);
        }
    }, [tabs, activeTab]);

    const switchTab = (id: number) => {
        setActiveTab(id);
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <button className={styles.button} onClick={() => addTab('Цепи', <DataFetching />)} title='Цепи'>
                                Цепи
                            </button>
                        </li>
                        <li className={styles.navItem}>
                            <button className={styles.button} onClick={() => addTab('Кабели', 'Содержимое 2')} title='Кабели'>
                                Кабели
                            </button>
                        </li>
                        <li className={styles.navItem}>
                            <button className={styles.button} onClick={() => addTab('Оптоволокно', 'Содержимое 3')} title='Оптоволокно'>
                                Оптоволокно
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ display: 'flex'}}>
                    {tabs.map(tab => (
                        <Tab
                            key={tab.id}
                            title={tab.title}
                            isActive={activeTab === tab.id}
                            onClose={() => closeTab(tab.id)}
                            onClick={() => switchTab(tab.id)}
                        />
                    ))}
                </div>
                <div style={{ padding: '15px' }}>
                    {activeTab && tabs.find(tab => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
};
