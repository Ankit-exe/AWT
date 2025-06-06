import React, { useState } from 'react'
import { JsVar } from './JsVar'
import { UseState } from './UseState'

export const Form = () => {
    const [activeComponent, setActiveComponent] = useState('jsvar')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const show = (component) => {
        setActiveComponent(component)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Data:', formData)
    }

    return (
        <>
        <div>
            <nav>
                <label 
                    htmlFor="jsvar"
                    onClick={() => show('jsvar')}
                    style={{ 
                        cursor: 'pointer',
                        marginRight: '20px',
                        color: activeComponent === 'jsvar' ? 'blue' : 'black'
                    }}
                >
                    <JsVar />
                </label>
                <label 
                    htmlFor="usestate"
                    onClick={() => show('usestate')}
                    style={{ 
                        cursor: 'pointer',
                        color: activeComponent === 'usestate' ? 'blue' : 'black'
                    }}
                >
                    <UseState />
                </label>
            </nav>
            {activeComponent === 'jsvar' && <JsVar />}
            {activeComponent === 'usestate' && <UseState />}

            <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ padding: '8px', width: '100%', maxWidth: '300px', minHeight: '100px' }}
                    />
                </div>

                <button 
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}
