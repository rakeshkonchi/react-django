import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setMobile] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  const navigate = useNavigate()
  function handleForm(e){
      e.preventDefault()
      const data = {name,email,mobile,department,course}
      axios.post("http://127.0.0.1:8000/api/addstudent/",data)
      .then(()=>{
          toast.success("Student Added...")
          setName("")
          setEmail("")
          setMobile("")
          setDepartment("")
          setCourse("")
          navigate("/viewstudent")
      })
      .catch(err=>toast.error("Failed to Add..."))
  }
  return (
    <>
    <Navbar/>
      <center><h1>Add Student</h1></center>
      <center>
        <form onSubmit={handleForm}>
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

          <button>Add</button>
        </form>
      </center>
    </>
  )
}

export default AddStudent