import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Facebook.css';

function Facebook() {

  let [Uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");
  let [Admins, setAdmin] = useState([]);
  let [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("http://localhost:1000/Admin");
        let data = await res.json();
        setAdmin(data);
      } catch (error) {
        console.log("Failed to fetch admin data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(Admins);

  let isPresent = Admins.filter((user) => {
    return (
      user.name === Uname && user.password === pwd
    )
  })
  console.log(Uname);

  function Val_Facebook() {
    if (isPresent.length > 0) {
      alert("Login Successfull")
    }
    else {
      alert("Login Failed")
    }
  }

  return (
    <>
      <div className="facebook">
        <div className="thumbnail">
          <h1>facebook</h1>
        </div>
        <form action="">
          <h2>Log in to Facebook</h2>
          <input value={Uname} onChange={(e) => { setUname(e.target.value) }} type="text" placeholder='Enter email or mobile number' />
          <div className='password-container'>
            <input value={pwd} onChange={(e) => { setPwd(e.target.value) }} type={showPassword ? 'text' : 'password'} placeholder='Enter Password' />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button className='btn' onClick={Val_Facebook}>Log in</button>
          <a href="">Forgot Password</a>
        </form>
      </div>
    </>
  )
}

export default Facebook
