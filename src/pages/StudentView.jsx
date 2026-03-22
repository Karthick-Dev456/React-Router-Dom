import React from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const StudentView = () => {

    const location = useLocation()
    const { student } = location.state
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)


    return (
        
        <div>
            <h1>Student View</h1>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <button onClick={() => navigate(-1)}>Back to Directory</button>
        </div>
    )
}

export default StudentView