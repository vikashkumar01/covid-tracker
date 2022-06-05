import React, {useState, useEffect } from 'react';

const CountryWiseCase = () => {

    const [data, setDate] = useState([])

    const getCovidData = async () =>{
        const res = await fetch('https://disease.sh/v3/covid-19/countries');
        const actualData = await res.json();
        console.log(actualData);
        setDate(actualData)
    }

    useEffect(() =>{
        getCovidData();
    }, []);

    return (

        <>
            <div className='container mt-2'>
                <div className='main heading'>
                        <h1 className='text-center'><span className='font-weight-bold' style={{ color:"coral"}}>COUNRTY</span> COVID-19 DASHBOARD</h1>
                 </div>

                <div className='table-responsive mb-'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Confirmed</th>
                                    <th scope="col">Recovered</th>
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
                                                <th scope="col">{curElem.country}</th>
                                                <th scope="col">{curElem.cases}</th>
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

export default CountryWiseCase;
