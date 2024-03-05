import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
    const navigate = useNavigate(); 

  const customerData = [
    {
      id: 1,
      fname: 'John',
      lname: 'Doe',
      dob: '1990-01-01',
      phone: '1234567890',
      email: 'john.doe@example.com',
      accountNo: '123456789',
      ifsc: 'ABC1234567',
      balance: 1000,
      address: '123 Main Street',
      chequebookOrder: 'yes',
    },
    {
        "id": 2,
        "fname": "Jane",
        "lname": "Smith",
        "dob": "1985-05-15",
        "phone": "9876543210",
        "email": "jane.smith@example.com",
        "accountNo": "987654321",
        "ifsc": "XYZ9876543",
        "balance": 2500,
        "address": "456 Oak Avenue",
        "chequebookOrder": "no"
      }
      
  ];

  const [customers, setCustomers] = useState(customerData);

  const handleDelete = (customerId) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
    setCustomers(updatedCustomers);
  };

  const handleEdit = (customerId) => {
    console.log(`Edit customer with ID: ${customerId}`);
  };

  const handleChequebookOrderClick = (customerId) => {
    navigate(`/chequebook-Status/${customerId}`);
  };


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 border-b">First Name</th>
            <th className="py-3 px-4 border-b">Last Name</th>
            <th className="py-3 px-4 border-b">DOB</th>
            <th className="py-3 px-4 border-b">Phone</th>
            <th className="py-3 px-4 border-b">Email</th>
            <th className="py-3 px-4 border-b">Account No</th>
            <th className="py-3 px-4 border-b">IFSC</th>
            <th className="py-3 px-4 border-b">Balance</th>
            <th className="py-3 px-4 border-b">Address</th>
            <th className="py-3 px-4 border-b">Chequebook Order</th>
            <th className="py-3 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100 transition duration-300">
              <td className="py-3 px-4 border-b">{customer.fname}</td>
              <td className="py-3 px-4 border-b">{customer.lname}</td>
              <td className="py-3 px-4 border-b">{customer.dob}</td>
              <td className="py-3 px-4 border-b">{customer.phone}</td>
              <td className="py-3 px-4 border-b">{customer.email}</td>
              <td className="py-3 px-4 border-b">{customer.accountNo}</td>
              <td className="py-3 px-4 border-b">{customer.ifsc}</td>
              <td className="py-3 px-4 border-b">{customer.balance}</td>
              <td className="py-3 px-4 border-b">{customer.address}</td>
              <td className="py-3 px-4 border-b">
              {customer.chequebookOrder === 'yes' ? (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    onClick={() => handleChequebookOrderClick(customer.id)}
  >
    Yes
  </button>
) : (
  <span className="text-gray-500">No</span>
)}

              </td>
              <td className="py-3 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
                  onClick={() => handleEdit(customer.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2 focus:outline-none focus:shadow-outline-red hover:bg-red-600"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
