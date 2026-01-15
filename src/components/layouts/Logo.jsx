import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-1'>
            <Image 
            alt='logo-toy-story'
            src={"/assets/logo.png"}
            width={70}
            height={60} />
            <h2 className='text-2xl font-bold'>Toy <span className='text-primary'>Story</span></h2>
        </Link>
    );
};

export default Logo;