import { useState } from 'react';
import './Form.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [titulo, setTitulo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [verified, setVerified] = useState(false)

    const onChange = (value) => {
        console.log("Captcha value:", value);
        setVerified(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3005/form', {
            nombre,
            email,
            titulo,
            mensaje
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className='form'>
            <h2>¡Envianos tus comentarios y suscribete a nuestro newsletter!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="name" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección E-mail</Form.Label>
                    <Form.Control type="email" placeholder="e-mail" onChange={(event) => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        No compartiremos tu correo con nadie más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="title" placeholder="Titulo" onChange={(event) => setTitulo(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTextarea">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="¿Qué nos quieres contar? :D" onChange={(event) => setMensaje(event.target.value)} />
                </Form.Group>
                <ReCAPTCHA
                    className='captcha'
                    sitekey="6LdOci8lAAAAANK1eZTdmT5-XxClelIpTH1WS3qR"
                    onChange={onChange}
                />
                <Button variant="primary" type="submit" disabled={!verified}>
                    ¡Enviar!
                </Button>
            </Form>
        </div>
    );
}

export default Formulario;
