import React, { useEffect, useState } from 'react';
import './Statedata.css';
const Statedata = () => { 
    const [currdata, setdata] = useState([]);
  const getCovidAction = async () => { 
      const dat = await fetch('https://data.covid19india.org/data.json');
      const resultdat = await dat.json();
      setdata(resultdat.cases_time_series);
    }
    useEffect(() => { 
        getCovidAction();
    })
    return (
        <>
            
<div class="container">
            <table>
                <thead>
                    <tr>
                        <th>dailyconfirmed</th>
                        <th>dailydeceased</th>
                        <th>dailyrecovered</th>
                        <th>date</th>
                        <th>dateymd</th>
                            <th>totalconfirmed</th>
                            <th>totaldeceased</th>
                            <th>totalrecovered</th>
                    </tr>
                </thead>
                <tbody>
                    
                
                    {
                        currdata.map((curentvalue, indexvalue) => { 
                            return (
                                <>
                                    <tr key={indexvalue}>
                                        <td>{curentvalue.dailyconfirmed}</td>
                                        <td>{curentvalue.dailydeceased}</td>
                                        <td>{curentvalue.dailyrecovered}</td>
                                        <td>{curentvalue.date}</td>
                                        <td>{curentvalue.dateymd}</td>
                                        <td>{curentvalue.totalconfirmed}</td>
                                        <td>{curentvalue.totaldeceased}</td>
                                        <td>{ curentvalue.totalrecovered}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
  </table>
</div>
        </>
    )
}
export default Statedata;