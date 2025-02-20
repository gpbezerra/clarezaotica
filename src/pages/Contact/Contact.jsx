import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import logo from "../../assets/yellowLogo.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    });

    const handleFormData = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // Aplica a formatação e validação apenas para o campo de telefone
        if (name === "number") {
            // Remove tudo que não é número
            const cleanedValue = value.replace(/\D/g, '');

            // Aplica a máscara: (99) 99999-9999 ou (99) 9999-9999
            if (cleanedValue.length <= 10) {
                // Formato para números com 10 dígitos (sem o nono dígito)
                formattedValue = cleanedValue
                    .replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, "($1) $2-$3");
            } else {
                // Formato para números com 11 dígitos (com o nono dígito)
                formattedValue = cleanedValue
                    .replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, "($1) $2-$3");
            }

            // Remove caracteres extras que não fazem parte da máscara
            formattedValue = formattedValue.replace(/\D*$/, ''); // Remove caracteres não numéricos no final
        }

        setFormData(prevData => ({
            ...prevData,
            [name]: formattedValue
        }));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (number) => {
        // Remove a máscara para validar apenas os dígitos
        const cleanedNumber = number.replace(/\D/g, "");
        // Aceita 10 ou 11 dígitos (com ou sem o nono dígito)
        return cleanedNumber.length === 10 || cleanedNumber.length === 11;
    };

    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_PUBLIC_KEY;

    const submitForm = () => {
        const { name, number, email, message } = formData;

        if (name === "" || number === "" || email === "" || message === "") {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Por favor, insira um email válido.");
            return;
        }

        if (!validatePhoneNumber(number)) {
            toast.error("Por favor, insira um número de telefone válido (10 ou 11 dígitos, com DDD).");
            return;
        }

        emailjs.send(service_id, template_id, formData, public_key)
            .then((response) => {
                toast.success("Email enviado com sucesso!");
                setFormData({
                    name: "",
                    number: "",
                    email: "",
                    message: ""
                });
            }, (error) => {
                console.log(error);
                toast.error("Erro ao enviar email.");
            });
    };

    return (
        <div className="contact-container">
            {/* Toastify Container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="contact-social">
                <img src={logo} alt="" />
                <div className="contact-social-media">
                    <a href="https://www.facebook.com/profile.php?id=61558935020053"> <img src={facebook} alt="" /></a>
                    <a href="https://www.instagram.com/clarezaotica/"> <img src={insta} alt="" /></a>
                </div>
            </div>
            <div className="contact-form">
                <h1>Contato</h1>
                <p>Dúvidas? Propostas? Mande sua mensagem e em breve retornamos.</p>
                <input
                    name="name"
                    onChange={handleFormData}
                    value={formData.name}
                    type="text"
                    placeholder="Nome"
                />
                <input
                    name="number"
                    onChange={handleFormData}
                    value={formData.number}
                    type="text"
                    placeholder="Número"
                    maxLength={15} // Limita o campo a 15 caracteres (com a máscara)
                />
                <input
                    name="email"
                    onChange={handleFormData}
                    value={formData.email}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    name="message"
                    onChange={handleFormData}
                    value={formData.message}
                    placeholder="Mensagem"
                />
                <button onClick={submitForm}>Enviar</button>
            </div>
        </div>
    );
};

export default Contact;