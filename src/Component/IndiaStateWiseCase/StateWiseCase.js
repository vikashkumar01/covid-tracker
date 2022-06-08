import React, { useEffect, useState } from 'react';

const StateWiseCase = () => {

    const [data, setDate] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setDate(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (

        <>
            <div className='container mb-5'>
                <div className='main heading'>
                        <h1 className='text-center'><span className='font-weight-bold ' style={{ color:"coral"}}>INDIA</span> COVID CASES</h1>
                
                </div>

                <div className='table-responsive mb-3'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Conform</th>
                                    <th scope="col">Recover</th>
                                    <th scope="col">Deaths</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((curElem, ind) => {

                                        return (
                                            <tr key={ind}>
                                                <th scope="col">{ind}</th>
                                                <th scope="col">{curElem.state}</th>
                                                <th scope="col">{curElem.confirmed}</th>
                                                <th scope="col">{curElem.recovered}</th>
                                                <th scope="col">{curElem.deaths}</th>
                                                <th scope="col">{curElem.active}</th>
                                                <th scope="col">{new Date(curElem.updated).toDateString()}</th>
                                            </tr>
                                        )

                                    })
                                }


                            </tbody>
                        </table>
                    </div>

            </div>
        </>
    );
};

export default StateWiseCase;
