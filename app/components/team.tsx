import Image from 'next/image';
import React from 'react';

const Team = () => {
    const members = [
        { name: 'Lucas Júlio de Souza', role: 'Coordenação', imageUrl: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' },
        { name: 'Elis Oliveira Vasconcelos', role: 'Pesquisa', imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp' },
        { name: 'Éder Natan Azevedo Figueiredo', role: 'Desenvolvimento', imageUrl: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' },
        { name: 'Nalanda Santana Pita', role: 'Coordenação', imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp' },
        { name: 'Jean Anderson Hugo', role: 'Desenvolvimento', imageUrl: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' },
        { name: 'Ingrid Freitas', role: 'Design', imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp' },
    ];

    return (
        <section id='equipe' className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Nossa Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {members.map((member, index) => (
                        <div key={index} className="text-center">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={64} 
                                height={64}
                                className="w-16 h-16 rounded-full mx-auto"
                            />
                            <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
