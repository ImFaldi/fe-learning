import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins(
    {
        subsets: ["latin"],
        weight: ['400', '700'],
    },
);

const Menu = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Mata Pelajaran',
        link: '/mata-pelajaran',
    },
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Contact',
        link: '/contact',
    },
]

const Sidebar = () => {
    return (
        <aside className="bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
            <div className="p-8">
                <h1 className={`${poppins.className} text-2xl font-semibold text-center`}>E-LearningHub</h1>
            </div>
            <ul className='flex flex-col gap-5 p-5'>
                {Menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <button className='w-full text-start p-4 border rounded-xl'>
                                {item.title}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;