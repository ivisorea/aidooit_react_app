import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import aidooit_logo from './aidooit_logo.png'
// import { Logo } from '../Logo'
import { Button, TextBtn } from './styles'
import { NavDropdown } from 'react-bootstrap'
import './styles.css'
import { useAuth } from '../../context/AuthContext'
import { Popup } from '../Popup'
import { UserInfo } from '../UserInfo'


export const Toolbar = () => {
    const { isAuthenticated, user , signout} = useAuth();
    const [showPopup, setShowPopup] = useState(false);

    const editProfileHandler = () => {
       
    };
    return (
        <nav className="navbar navbar-light bg-light fixed-top rounded-bottom navbar">
                <a className="nav-link nav-logo" href="/">
                    {/* <Logo/> */}
                    <img 
                    src={aidooit_logo} 
                    width="190" 
                    className="d-inline-block align-top" 
                    alt="Aidooit_logo"/>
                </a>
                
                <div className=" d-flex justify-content-end">
                {isAuthenticated ? (
                    <>
                    <NavDropdown  
                            id='collasible-nav-dropdown navbar-menu' 
                            title={
                            <div className="icon-container">
                            <i class="fas fa-bars menu-icon"></i>
                            </div>
                            }>
                        <NavDropdown.Item href="#action/3.1">Welcome {user.first_name}</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="protected">
                        <i class="fas fa-house-user icon"></i>
                        Profile Page</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="protected/create-post">
                        <i class="far fa-plus-square icon"></i>
                            Add Post</NavDropdown.Item>
                        <NavDropdown.Item href="protected/edit-post">
                        <i class="far fa-edit icon"></i>
                        Edit Post</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => setShowPopup(!showPopup)}>
                        <i class="fas fa-cog icon"></i>
                        Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={signout} as={Link} to="login">
                        <i class="fas fa-sign-out-alt icon"></i>
                        Log Out</NavDropdown.Item>
                    </NavDropdown>
                    
                    
                    </>
                ) : (
                    <>
                    <Link to={`/login`} >
                        <Button className='btn'>
                       <TextBtn>Login</TextBtn>
                        </Button>
                        
                    </Link>
                    <Link to={`/register`}>
                        <Button className='btn'>
                        <TextBtn>Sign Up</TextBtn>
                        </Button>
                    </Link>
                    
                    </> 

                )}  
                </div>
                <Popup trigger={showPopup} setTrigger={setShowPopup}>
                        <h4>Settings Profile</h4>
                        <hr />
                        <UserInfo/>
                        
                </Popup>
            </nav>
       
    )
}


