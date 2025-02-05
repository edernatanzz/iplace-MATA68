import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="iPlace Logo"
                        width={120}
                        height={40}
                        className="w-20 h-12 mr-2" 
                    />
                    <span className="text-2xl font-bold text-purple-700">iPlace</span>
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
