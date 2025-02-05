"use client";
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
            description: 'Análise crítica dos efeitos da IA em diferentes comunidades. Exploração da regulamentação para mitigar desigualdades e estratégias para assegurar a ética na inteligência artificial.',
            imageUrl: 'data:image/jpeg;base64,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',
        },
        {
            title: 'Palestras e Workshops',
            description: 'Eventos com especialistas para discutir os impactos da inteligência artificial, justiça digital e diversidade algorítmica.',
            imageUrl: 'https://conceitoturismo.wordpress.com/wp-content/uploads/2011/03/curso.gif',
        }
    ];

    const [visibleModules, setVisibleModules] = useState(6);

    return (
        <section id='modulos' className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Nossos Módulos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {modules.slice(0, visibleModules).map((module, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={module.imageUrl} alt={module.title} className="w-full h-48 object-cover rounded-md" />
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
