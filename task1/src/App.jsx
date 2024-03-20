import { useState } from 'react'
import './App.css'

function App() {
  const [productname, setproductname] = useState("Laptop 1")
  const [price, setprice] = useState(2236)
  const [rating, setrating] = useState(4.7)
  const [discount, setdocument] = useState(63)
  const [availability, setavailablity] = useState("yes")
  
  
  return (
    <>
      <h1>Product List:</h1>
      <table>
        <th>
        <td>Product Name</td>
        <td>Price</td>
        <td>Rating</td>
        <td>Discount</td>
        <td>availablity</td>
        </th>
<tr>
      <td>{productname}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{discount}</td>
      <td>{availability}</td>
      </tr>
      </table>
    </>
  )
}

export default App
