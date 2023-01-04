import React, { useState, useEffect } from 'react';

export default function RankItems(){
    const [items, setItems] = useState([]);
    const dataType = 1;
    console.log(items)

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <main>
            {
                (items != null) ? items.map((item) => <h3>{item.title}</h3>) : <div>Loading....</div>
            }

        </main>
    )
}

