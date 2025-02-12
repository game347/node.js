import './App.css';
import { useState } from 'react';

function App() {
  // Use React state to track user data
  const [userData, setUserData] = useState([
    { name: 'John Doe', number: '123456789', country: 'USA' },
    { name: 'Jane Smith', number: '987654321', country: 'Canada' },
    { name: 'Alice Johnson', number: '555555555', country: 'Australia' },
    { name: 'Bob Brown', number: '666666666', country: 'UK' }
  ]);

  // The function to manually add user input data
  const handleSubmit = (name, number, country) => {
    const newUser = { name, number, country };
    // Update the userData state with the new entry
    setUserData([...userData, newUser]);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navdiv">
          <div className="logo"><a href="#">Home</a></div>
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Input Form */}
      <div>
        <h2>User Data Form</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const number = e.target.number.value;
          const country = e.target.country.value;
          handleSubmit(name, number, country);
          e.target.reset();  // Reset form fields after submission
        }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            type="text"
            name="number"
            placeholder="Enter your number"
          />
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Table to display user data */}
      <div>
        <h2>Submitted Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="set_center">
        <h1>Click to another page</h1>
        <p>My name is Thanakorn Kongboon, 66011262</p>
        <button onClick={() => window.location.href = 'https://www.google.com'}>Yes to Google</button>
      </div>
    </>
  );
}

export default App;
