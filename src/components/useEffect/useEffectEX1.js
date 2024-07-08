import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseEffectExample() {
    const [data, setData] = useState([]);
    const[count1,setcount1]=useState(0)
    useEffect(() => {
        console.log("useEffect executing...");
        fetchData();
    },[]);
    
    const countHandler1=()=>{
        setcount1(count1+1)
    }

    const fetchData = async () => {
        try {
            const response1 = await axios.get("https://fakestoreapi.com/products");
            console.log(response1, "response1");

            if (response1.status === 200) {
                setData(response1.data);
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <h2>count1 {count1}</h2>
            <button onClick={countHandler1}>Increase count 1</button>
            {data.length > 0  && data.map((each) => (
                <div key={each.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '15px', width: '30%', boxSizing: 'border-box' }}>
                    <img src={each.image} alt={each.title} style={{ width: '100%', height: '50%' }}  />
                    <h3>{each.title}</h3>
                    <p>{each.description}</p>
                    <p><strong>Price:</strong> ${each.price}</p>
                    <p><strong>Category:</strong> {each.category}</p>
                    <p><strong>Rating:</strong> {each.rating.rate} ({each.rating.count} reviews)</p>
                </div>
            ))}
        </div>
    );
}

export default UseEffectExample;
