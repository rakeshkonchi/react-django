import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ViewStudent = () => {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()
  function fetchData(){
    axios.get("http://127.0.0.1:8000/api/viewstudents/")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }
  function deleteStudent(id){
    axios.delete(`http://127.0.0.1:8000/api/deletestudent/${id}/`)
  }
  fetchData()
  
    return (
    <>
    <Navbar/>
      <center><h1>Student List</h1></center>
      {students.map((x)=>{
        return <div>
          <h3>Name: {x.name}</h3>
          <p><b>Email:</b> {x.email}</p>
          <p><b>Mobile:</b> {x.mobile}</p>
          <p><b>Department:</b> {x.department}</p>
          <p><b>Course:</b> {x.course}</p>
          <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
          <button onClick={()=>{deleteStudent(x.id)}}>Delete</button>
        </div>
      })}
    </>
  )
}

export default ViewStudent