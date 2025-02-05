"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Features = () => {
    const modules = [
        {
            title: 'Observatório de IA e Ética Digital',
            description: 'Monitoramento de casos de uso da IA e seus impactos sociais.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOncT08JH0LMcOwfLCbMbFr90cnqKvZ19MqA&s',
        },
        {
            title: 'Laboratório de Diversidade',
            description: 'Estudos sobre algoritmos e desigualdades sociais.',
            imageUrl: 'https://thumbs.dreamstime.com/b/pouca-diversidade-de-crian%C3%A7as-negras-caucasianas-e-africanas-aprendendo-qu%C3%ADmica-no-laborat%C3%B3rio-escolar-professores-meninas-192466636.jpg',
        },
        {
            title: 'Alfabetização Algorítmica',
            description: 'Cursos sobre ética digital e combate à desinformação.',
            imageUrl: 'https://gammon.br/site_antigo/wp-content/uploads/2023/01/GAMMON-ACONTECE-DEZEMBRO-GAMMON-LAVRAS-090123-4-1024x1024.png',
        },
        {
            title: 'Módulo de Checagem de Fatos',
            description: 'Ferramenta para verificar a veracidade de informações e combater a desinformação.',
            imageUrl: 'https://nerdweb.com.br/uploads/1677871697-cropit-.jpg?w=372&h=177&q=90',
        },
        {
            title: 'Biblioteca de Conteúdos Culturais e Educacionais',
            description: 'Acervo de materiais educativos e culturais para consulta e estudo.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JAoa2Ja9AeuDUiLwUiKAQMz5oBK9FtqyRA&s',
        },
        {
            title: 'Guia de Software Livre e Soberania Digital',
            description: 'Recursos e orientações sobre o uso de software livre e a importância da soberania digital.',
            imageUrl: 'https://uploads.sempreupdate.com.br/2024/11/vBnwgCMP-gnu-linux-libre-768x433.webp',
        },
        {
            title: 'Seção de Educação Midiática',
            description: 'Materiais e cursos focados em alfabetização midiática e desenvolvimento do pensamento crítico.',
            imageUrl: 'https://abpeducom.org.br/wp-content/uploads/2019/05/ilustra_ed_midiatica-e1556805340623.jpg',
        },
        {
            title: 'Justiça Algorítmica e Inclusão Digital',
            description: 'Análise crítica dos efeitos da IA em diferentes comunidades.',
            imageUrl: '/justica-algoritmica.jpg', // Deve estar na pasta `public/`
        },
        {
            title: 'Palestras e Workshops',
            description: 'Eventos com especialistas para discutir os impactos da inteligência artificial, justiça digital e diversidade algorítmica.',
            imageUrl: 'https://conceitoturismo.wordpress.com/wp-content/uploads/2011/03/curso.gif',
        },
    ];

    const [visibleModules, setVisibleModules] = useState(6);

    return (
        <section id='modulos' className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Nossos Módulos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {modules.slice(0, visibleModules).map((module, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image 
                                src={module.imageUrl} 
                                alt={module.title} 
                                width={400} 
                                height={300} 
                                className="w-full h-48 object-cover rounded-md" 
                            />
                            <h3 className="mt-4 text-xl font-semibold text-purple-700">{module.title}</h3>
                            <p className="mt-2 text-gray-600">{module.description}</p>
                        </div>
                    ))}
                </div>
                {visibleModules < modules.length && (
                    <button
                        onClick={() => setVisibleModules(modules.length)}
                        className="mt-6 px-6 py-2 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition"
                    >
                        Ver mais
                    </button>
                )}
            </div>
        </section>
    );
};

export default Features;
