import React, { useEffect } from 'react';
import getData from './lib/service';

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            const userId = 1; // Örnek olarak user id 1 kullanıyoruz
            const data = await getData(userId);
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Check the console for user data</h1>
        </div>
    );
};

export default App;
