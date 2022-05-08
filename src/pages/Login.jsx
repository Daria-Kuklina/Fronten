import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { login } from "../services/AuthService"
import { useNavigate } from "react-router";

function Login() {
   const navigate = useNavigate();



   const [username, setUsername] = useState()
   const [password, setPassword] = useState()

   function Login(username, password) {
      login(username, password)

      navigate("/");
   }
   return (
      <div className="container w-75">
         <Card >
            <Card.Body>
               <Card.Text>
                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Enter login"
                           onChange={e => { setUsername(e.target.value) }} />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type="password"
                           placeholder="Enter password"
                           onChange={e => { setPassword(e.target.value) }}
                        />
                     </Form.Group>
                     <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => {
                           e.preventDefault()
                           Login(username, password)
                        }}>
                        Login
                     </Button>
                  </Form>
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Login