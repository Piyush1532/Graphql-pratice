import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'

const Foodscomponent = () => {
let {data,load, error}=useQuery(Food_dta)
  let [foods,setfoods]=useState([]);

  useEffect(()=>{

  },[])
  return (
    <div>
        <table className='table'>
            <tbody>
                <tr>
                <th>Sr.no</th>
                <th>title</th>
                <th>image</th>
                </tr>
            </tbody>
            <tbody>
              {
                foods.map((items)=>{
                  return <tr key={items.id}>
                    <td>{items.name}</td>
                  </tr>
                })
              }
            </tbody>
        </table>
    </div>
  )
}

export default Foodscomponent