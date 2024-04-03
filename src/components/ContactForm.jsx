import { useState } from "react";

import { validateEmail } from '../utils/helpers';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [required, setRequired] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Email is invalid.');
            return;
        }
        if (!name || !message) {
            setErrorMessage('Please fill in all input forms.')
            return;
        }
        alert(`Thank you for reaching out, ${name}.`);

        setName('');
        setEmail('');
        setMessage('');
    };

    const fieldRequired = (e) => {
        const { target } = e;
        if(!target.value) {
            setRequired('This field is required.');
            return;
        }

        setRequired('');
    }

    return (
        <div className="mb-3">
            <form className='form' onSubmit={handleFormSubmit}>
                <div className="mb-3">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={fieldRequired}
                    type='name'
                    placeholder="name"
                    className="form-control"
                />
                {required && (
                    <div>
                        <p className="required-message">{required}</p>
                    </div>
                )}
                </div>
                <div className="mb-3">
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={fieldRequired}
                    type='email'
                    placeholder="email"
                    className="form-control"
                />
                {required && (
                    <div>
                        <p className="required-message">{required}</p>
                    </div>
                )}
                </div>
                <div className="mb-3">
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={fieldRequired}
                    type='message'
                    placeholder="message"
                    className="form-control"
                />
                {required && (
                    <div>
                        <p className="required-message">{required}</p>
                    </div>
                )}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default ContactForm;