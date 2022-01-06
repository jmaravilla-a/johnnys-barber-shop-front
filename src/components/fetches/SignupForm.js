// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const SignupForm = ({ setCurrentUser }) => {
//   useEffect(() => {
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then(() => navigate("/"));
//       } 
//     });
//   }, []);

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });


//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   function handleSubmit(e) {
//     e.preventDefault();

//     fetch("/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           setCurrentUser(user);
//           navigate("/");
//         });
//       } else {
//         r.json().then((errors) => {
//           console.error(errors);
//         });
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Sign Up</h1>
//       <label htmlFor="first-name">First Name:</label>
//       <input
//         id="first-name-signup"
//         type="text"
//         name="first_name"
//         value={formData.first_name}
//         onChange={handleChange}
//       />
//       <p>
//         <label htmlFor="last-name">Last Name:</label>
//         <input
//           id="last-name-signup"
//           type="text"
//           name="last_name"
//           value={formData.last_name}
//           onChange={handleChange}
//         />
//       </p>
//       <p>
//         <label htmlFor="email">Email:</label>
//         <input
//           id="email-signup"
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </p>
//       <p>
//         <label htmlFor="password">Password:</label>
//         <input
//           id="password-signup"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </p>
      
//         <button type="submit">Submit</button>
      
//         <p>Have an account? <Link to="/login">Log In</Link></p>
//     </form>
//   );
// };

// export default SignupForm;