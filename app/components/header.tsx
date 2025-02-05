import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="flex items-center">
                    <img src="Blue and Yellow Modern Education Logo(2).png" alt="iPlace Logo" className="w-20 h-12 mr-2" />
                    <span className="text-2xl font-bold text-purple-700"></span>
                </div>
                <nav className="space-x-6">
                    <a href="#sobre" className="text-gray-700 hover:text-purple-700 font-medium">Sobre</a>
                    <a href="#modulos" className="text-gray-700 hover:text-purple-700 font-medium">Módulos</a>
                    <a href="#equipe" className="text-gray-700 hover:text-purple-700 font-medium">Equipe</a>
                    <a href="#contato" className="text-gray-700 hover:text-purple-700 font-medium">Contato</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;