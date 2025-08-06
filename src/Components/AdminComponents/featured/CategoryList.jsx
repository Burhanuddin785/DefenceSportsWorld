import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://api.defencesportsworld.com/api/categories").then((res)=>{ setListData(res.data); console.log(listData)}).catch((err)=>{console.log(err)})
  },[])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios.delete(`http://api.defencesportsworld.com/api/categories/${id}`)
        .then(() => {
          alert("Deleted successfully!");
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong.");
        });
    }
  };

  return (
    <div className='CategoryList'>
      <div>{listData.length === 0 && <button onClick={()=>{navigate('/maalik/categoryUpload')}}>Add Category</button>}</div>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
        <tr>
        <th>Name</th>
        <th>Template Image</th>
        <th>Hero Image</th>
        <th>Tag Line</th>
        {/* <th>Edit</th> */}
        <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          listData.map((data, index)=>{
            return(
              <tr key={index}>
                <td className='tableData'>{data.name}</td>
                <td className='tableData'><img className='template' src={`http://api.defencesportsworld.com/adminUploads/categories/${data.templateImage}`} alt="template"/></td>
                <td className='tableData'><img className='hero' src={`http://api.defencesportsworld.com/adminUploads/categories/${data.heroImage}`} alt="hero"/></td>
                <td className='tableData'>{data.tagLine}</td>
                {/* <td className='tableData'><button>Edit</button></td> */}
                <td className='tableData'><button onClick={()=>{handleDelete(data._id)}}>Delete</button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default CategoryList