import { useEffect, useState } from "react";
import axios from 'axios';

const ShowData = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_SERVER_URL + '/show');
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div style={{margin : "50px"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Mode</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign : "left"}}>
                        {
                            data?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.description}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.mode}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowData;