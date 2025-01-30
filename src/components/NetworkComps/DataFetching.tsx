import { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const DataFetching = () => {
    const [htmlContent, setHtmlContent] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8953/plot', { responseType: 'text' })
        .then(response => {
            console.log('Data fetched successfully:', response);
            setHtmlContent(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
            setLoading(false);
        });
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <LoadingSpinner />
            ) : htmlContent ? (
                <iframe
                srcDoc={htmlContent}
                style={{ width: '78vw', height: '89vh', border: 'none', margin: '0', padding: '0' }}
                title="Interactive Plot"
                />
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};