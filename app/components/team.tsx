import React from 'react';

const Team = () => {
    return (
        <section id='equipe' className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Nossa Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="Lucas Júlio de Souza" className="w-16 h-16 rounded-full mx-auto" />
                        <h4 className="mt-4 text-xl font-semibold">Lucas Júlio de Souza</h4>
                        <p className="text-gray-600">Coordenação</p>
                    </div>
                    <div className="text-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp" alt="Elis Oliveira Vasconcelos" className="w-16 h-16 rounded-full mx-auto" />
                        <h4 className="mt-4 text-xl font-semibold">Elis Oliveira Vasconcelos</h4>
                        <p className="text-gray-600">Pesquisa</p>
                    </div>
                    <div className="text-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="Éder Natan Azevedo Figueiredo" className="w-16 h-16 rounded-full mx-auto" />
                        <h4 className="mt-4 text-xl font-semibold">Éder Natan Azevedo Figueiredo</h4>
                        <p className="text-gray-600">Desenvolvimento</p>
                    </div>
                    <div className="text-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp" alt="Nalanda Santana Pita" className="w-16 h-16 rounded-full mx-auto" />
                        <h4 className="mt-4 text-xl font-semibold">Nalanda Santana Pita</h4>
                        <p className="text-gray-600">Coordenação</p>
                    </div>
                    <div className="text-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="Jean Anderson Hugo" className="w-16 h-16 rounded-full mx-auto" />
                        <h4 className="mt-4 text-xl font-semibold">Jean Anderson Hugo</h4>
                        <p className="text-gray-600">Desenvolvimento</p>
                    </div>
                    <div className="text-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp" alt="Ingrid Freitas" className="w-16 h-16 rounded-full mx-auto" />
                        <h4 className="mt-4 text-xl font-semibold">Ingrid Freitas</h4>
                        <p className="text-gray-600">Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
