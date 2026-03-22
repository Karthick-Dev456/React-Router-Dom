import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Student = () => {

    const navigate = useNavigate()

    const student = [
        { id: 1, name: "John", age: 20, course: "Computer Science" },
        { id: 2, name: "Jane", age: 21, course: "Mathematics" },
        { id: 3, name: "Bob", age: 22, course: "Physics" }
    ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.course}</td>
                            <td>
                                {/* <Link to={`/student/${student.id}`} state={{ student }}>View Profile</Link> */}
                            </td>
                            <td>
                                <button onClick={() => navigate(`/student/${student.id}`, { state: { student } })}>View Profile</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Student