import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const UpdateStudent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [department, setDepartment] = useState("")
    const [course, setCourse] = useState("")
    const {id} = useParams()
    console.log(id);

    const navigate = useNavigate()
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/fetchstudent/${id}/`)
      .then(x=>{
        setName(x.data.name)
        setEmail(x.data.email)
        setMobile(x.data.mobile)
        setDepartment(x.data.department)
        setCourse(x.data.course)
      })
    },[])

    function handleUpdate(e){
        e.preventDefault()
        const newData = {name,email,mobile,department,course}
        axios.put(`http://127.0.0.1:8000/api/updatestudent/${id}/`,newData)
        .then(()=>{
          toast.success("Updated....")
          navigate("/viewstudent")
        })
        .catch(err=>toast.error("Failed to Update"))

    }
  return (
    <>
    <Navbar/>
    <center><h1>Update Student</h1></center>
    <center>
        <form onSubmit={handleUpdate}>
          <input 
          type="text" 
          placeholder='Enter name' 
          required
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          /> 
          <br />

          <input 
          type="text" 
          placeholder='Enter Email' 
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          /> 
          <br />

          <input 
          type="text" 
          placeholder='Enter Mobile No' 
          required
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          /> 
          <br />

          <input 
          type="text" 
          placeholder='Enter Department' 
          required 
          value={department}
          onChange={(e)=>{setDepartment(e.target.value)}}
          /> 
          <br />

          <input 
          type="text" 
          placeholder='Enter Course' 
          required
          value={course}
          onChange={(e)=>{setCourse(e.target.value)}}
          /> 
          <br />

          <button>Update</button>
        </form>
      </center>
    </>
  )
}

export default UpdateStudent