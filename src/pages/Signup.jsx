import { useState } from "react"
import { Card, Form, Button, Container } from "react-bootstrap"
import { registration } from "../services/AuthService"
import { useNavigate } from "react-router";

function Signup() {
   // useLoginGuard({ loggedIn: true, path: "/" });
   const navigate = useNavigate();


   const [username, setUsername] = useState()
   const [mail, setMail] = useState()
   const [password, setPassword] = useState()

   function Signup(username, password, mail) {
      registration(username, password, mail)

      navigate("/")
   }
   return (
      <Container className="w-75 pb-5 my-5">
         <Card >
            <Card.Body>
               <Card.Text>
                  <Form>
                     <Form.Label>Sing Up</Form.Label>
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control
                           type="text"
                           placeholder="Enter username"
                           onChange={e => { setUsername(e.target.value) }} />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                           type="email"
                           placeholder="Enter email"
                           onChange={e => { setMail(e.target.value) }}
                        />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
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
                           Signup(username, password, mail)
                        }}>
                        Sing Up
                     </Button>
                  </Form>
               </Card.Text>
            </Card.Body>
         </Card>
      </Container>
   )
}

export default Signup