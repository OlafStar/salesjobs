import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4">
            <Link href={'/'}>{'Logo'}</Link>
            <div className="flex gap-4">
                <Link href={'/pricing'}>{'Post a job'}</Link>
                <div>{'Sign in'}</div>
            </div>
        </nav>
    );
};

export default Navbar;
