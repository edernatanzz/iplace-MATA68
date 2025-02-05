import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-left">
                    <h2 className="text-5xl font-bold text-gray-800">
                        A <span className="text-orange-500">Escolha</span> Inteligente Para o <span className="text-red-500">Futuro</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A iPlace é uma plataforma inovadora de educação que une tecnologia, diversidade e justiça digital. 
                        Nosso objetivo é capacitar indivíduos com conhecimento crítico sobre Inteligência Artificial e suas 
                        implicações sociais, promovendo um aprendizado acessível e de qualidade.
                    </p>
                    <div className="mt-6 flex items-center bg-white shadow-md rounded-full p-2 w-full max-w-lg">
                        <input
                            type="text"
                            placeholder="Saiba mais sobre a iPlace..."
                            className="flex-grow px-4 py-2 outline-none rounded-l-full text-gray-700"
                        />
                        <button className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold">
                            Descubra
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
                    <img src="section1.png" alt="Imagem Ilustrativa" className="w-full max-w-md border-4 rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
