"use client"
import React, { useEffect, useState } from 'react';

const Stats = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let mounted = true;
        fetch('/data/stats.json')
            .then((res) => res.json())
            .then((json) => {
                if (mounted) setData(json);
            })
            .catch(() => {
                if (mounted) setData([]);
            });
        return () => {
            mounted = false;
        };
    }, []);

    if (!data) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 lg:gap-6'>
            {data.map(card=>{
                return(
                    <div key={card.id} className='card rounded-lg p-4 lg:p-6 xl:p-8 shadow bg-white'>
                        <h3 className='text-[#244D3F] text-center font-semibold text-3xl'>{card.value}</h3>
                        <p className='text-[#64748B] text-lg text-center'>{card.label}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Stats;