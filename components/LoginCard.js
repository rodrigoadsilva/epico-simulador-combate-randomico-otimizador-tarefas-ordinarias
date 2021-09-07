import { Card, Form, Button } from 'react-bootstrap';


const cardStyle = {
    width: "40%",
    backgroundColor: "#222222",
}

export default function LoginCard() {
    return (
        <Card className="text-white" style={cardStyle}>
            <Card.Body>
                <Card.Title className="mb-3">
                    <h3>Login</h3>
                </Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Fulano" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control size="sm" type="password" placeholder="*********" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lembre me" />
                    </Form.Group>
                    <Button variant="success" size="sm" type="submit">
                        Entrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}