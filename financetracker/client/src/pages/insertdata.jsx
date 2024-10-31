import { useState } from "react";
import axios from 'axios'

const InsertData = () => {
    const [data, setData] = useState({})
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(data)
      await axios.post(import.meta.env.VITE_SERVER_URL+'/insert',data,{
        headers: {'content-type': 'application/x-www-form-urlencoded'},
              withCredentials: true,
              credentials: 'include'
      }).then((response)=>{
        console.log(response.data)
        console.log("Inserted successfully");
      });
}
    return (
        <>
            <div style={{margin : "50px"}}>
                <form onSubmit={handleSubmit} style={{textAlign : "left"}}>
                    <div>
                        <label>Description</label>
                        <input type = "text" name="description" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type = "text" name="amount" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Type of Transaction</label><br/>
                        credit<input type = "radio" name="mode" value = "credit" onChange={handleChange}/>
                        debit<input type = "radio" name="mode" value = "debit" onChange={handleChange}/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </>
    )
}

export default InsertData