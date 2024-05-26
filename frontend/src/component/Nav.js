import React, { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import img1 from './image/logo.jpeg';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signUp')
    }
    return (
        <div>
            {/* <img alt="logo" className="logo" src={img1}/> */}
           { auth? <ul className="nav-ul">
                <li><Link to="/">Products<Link/></Link></li>
                <li><Link to="/add">Add Product<Link/></Link></li>
                <li><Link to="/update">update Product<Link/></Link></li>
             
                <li><Link to="/profile">Profile<Link/></Link></li>
                {/* <li>{auth ?<Link onClick={logout} to="/signUp">Logout<Link/></Link>:<Link to="/SignUp">Sing Up<Link/></Link>}</li>
                <li><Link to="/login">Login<Link/></Link></li> */}
                {
                    auth?<li><Link onClick={logout} to="/signUp">Logout  ({JSON.parse(auth).name})<Link/></Link></li>
                    :<>
                   
                    </>
                }
                

            </ul>
            :<ul className='nav-ul nav-right'>
                 <li><Link to="/SignUp">Sing Up<Link/></Link></li>
                    <li><Link to="/login">Login<Link/></Link></li>
            </ul>
}
        </div>
    )
}
export default Nav;