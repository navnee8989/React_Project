import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    const [display, setDisplay] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5001/user`)
            .then(function (res) {
                const data = res.data;
                setDisplay(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // Filter the data to include only rows where role is equal to 2
    const filteredData = display.filter((item) => item.role === 2);

    return (
        <div className="container mx-auto mt-10">
            {filteredData.length > 0 ? (
                <table className="min-w-full text-center">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-2 bg-slate-500 border-solid border-white">ID</th>
                            <th className="px-4 py-2 border-2 bg-slate-500 border-solid border-white">Email</th>
                            <th className="px-4 py-2 border-2 bg-slate-500 border-solid border-white">Password</th>
                            <th className="px-4 py-2 border-2 bg-slate-500 border-solid border-white">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 ">{item.id}</td>
                                <td className="border px-4 py-2">{item.email}</td>
                                <td className="border px-4 py-2">{item.password}</td>
                                <td className="border px-4 py-2">{item.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}

export default User;
