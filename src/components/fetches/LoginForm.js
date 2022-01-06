// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function LoginForm({ setCurrentUser }) {

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then(() => navigate("/"));
//       } 
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   console.log(formData)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData),
//       }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           setCurrentUser(user);
//           navigate('/');
//         });
//       } else {
//         r.json().then((errors) => {
//           console.error(errors);
//         });
//       }
//     });
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//         <h1>Log In</h1>
//         <p>
//             <label htmlFor="email">Email </label>
//             <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={(e) => handleChange(e)}
//             />
//         </p>
//         <p>
//             <label htmlFor="password">Password </label>
//             <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={(e) => handleChange(e)}
//             />
//         </p>
        
//             <button type="submit"> Log In</button>
        
//         <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//     </form>
    
//   );
// }

// export default LoginForm;
