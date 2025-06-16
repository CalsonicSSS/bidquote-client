import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className='sticky top-0 z-50 bg-theme-blue text-white'>
      <div className='container mx-auto px-5 h-20 flex justify-between items-center'>
        <Link href='/' className='font-roboto text-2xl font-bold hover:text-blue-200 transition-colors'>
          Bidquote
        </Link>
        <div className='flex items-center gap-4'>
          <SignedOut>
            <Link href='/sign-in'>
              <Button variant='ghost' className='font-roboto text-white hover:bg-blue-300'>
                Login
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button className='font-roboto bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors'>Sign Up</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
