import React from 'react';

const Contact = () => {
    return (
        <section id="contato" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Contato</h2>
                <p className="mt-4 text-gray-600">Entre em contato conosco para colaborações ou mais informações:</p>
                <form className="mt-6 max-w-lg mx-auto">
                    <input type="text" placeholder="Seu nome" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 mb-4" required />
                    <input type="email" placeholder="Seu e-mail" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 mb-4" required />
                    <textarea placeholder="Sua mensagem" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 mb-4" required></textarea>
                    <button type="submit" className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
