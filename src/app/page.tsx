import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Star, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      {/* Header Section */}
      <header className='sticky top-0 z-50 bg-theme-blue text-white'>
        <div className='container mx-auto px-5 h-20 flex justify-between items-center'>
          <div className='font-roboto text-2xl font-bold'>Bidquote</div>
          <div className='flex items-center gap-4'>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className='font-roboto bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors'>Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center'>
        <Image src='/images/hero/hero-background.jpg' alt='Home maintenance professionals at work' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className='container mx-auto px-5 relative z-10'>
          <div className='max-w-3xl'>
            <h1 className='font-inter text-5xl md:text-6xl font-bold text-white mb-6 leading-tight'>Home maintenance with competitive bidding</h1>
            <p className='font-inter text-xl text-gray-200 mb-8'>Post your job and get multiple bids from qualified contractors with us.</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='/sign-up'>
                <Button className='font-roboto w-full sm:w-auto px-8 py-4 text-lg bg-theme-blue hover:bg-blue-600 text-white'>Post a Job</Button>
              </Link>
              <Link href='/sign-up'>
                <Button variant='outline' className='font-roboto w-full sm:w-auto px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-700 bg-transparent'>
                  Find Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div>
              <div className='font-inter text-4xl font-bold text-theme-blue mb-2'>10,000+</div>
              <div className='font-roboto text-gray-800 font-medium uppercase tracking-wide'>Jobs Posted</div>
            </div>
            <div>
              <div className='font-inter text-4xl font-bold text-theme-blue mb-2'>95%</div>
              <div className='font-roboto text-gray-800 font-medium uppercase tracking-wide'>Customer Satisfaction</div>
            </div>
            <div>
              <div className='font-inter text-4xl font-bold text-theme-blue mb-2'>4.7 ★</div>
              <div className='font-roboto text-gray-800 font-medium uppercase tracking-wide'>Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-16 bg-blue-50'>
        <div className='container mx-auto px-5'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex justify-center mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='h-6 w-6 text-yellow-400 fill-current' />
              ))}
            </div>
            <blockquote className='font-inter text-xl md:text-2xl text-gray-700 mb-6 italic'>
              "Bidquote made it so easy to setup my service on the platform and and expose my business to new customers. The bidding process is straightforward and I love how I can
              compare multiple contractors quickly."
            </blockquote>
            <cite className='font-roboto text-gray-600'>— Xuhan S., PVC Contracting Inc.</cite>
          </div>
        </div>
      </section>

      {/* Job Success Section - Following Jiffy's exact design */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-5'>
          {/* First Row */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16'>
            {/* Left side - Cards in diagonal arrangement like Jiffy */}
            <div className='relative h-96 flex justify-center lg:justify-center'>
              {/* Background card - rotated */}
              <div className='absolute top-4 left-24 w-80 h-72 bg-blue-100 rounded-lg transform rotate-3'></div>
              {/* Main job card */}
              <div className='absolute top-0 left-12 w-80 bg-white rounded-lg shadow-lg transform -rotate-2 p-6'>
                <div className='text-blue-500 font-roboto font-semibold text-sm mb-3 uppercase tracking-wide'>BID SUBMITTED</div>
                <h3 className='font-inter text-lg font-bold mb-2 text-gray-900'>Hi Sarah,</h3>
                <p className='text-gray-700 mb-4'>Meet Mike, your Kitchen Renovation Pro.</p>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center'>
                    <span className='font-roboto font-semibold text-gray-600'>M</span>
                  </div>
                  <div>
                    <div className='font-roboto font-semibold text-gray-900'>Mike</div>
                    <div className='text-blue-600 text-sm'>✓ Bidquote Verified Pro</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className='text-center lg:text-left'>
              <h2 className='font-inter text-4xl font-bold text-gray-900 mb-6'>Get multiple competitive bids in minutes.</h2>
              <div className='flex items-center gap-3 mb-6 justify-center lg:justify-start'>
                <Clock className='h-6 w-6 text-blue-600' />
                <span className='font-inter text-lg text-blue-600'>Average 10 minute response time</span>
              </div>
              <p className='font-inter text-gray-600 mb-8 text-lg'>
                Your job posting instantly goes out to our network of contractors who are nearby, available, and ready to bid on your project.
              </p>
              <Link href='/sign-up'>
                <Button className='font-roboto px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full'>Get multiple bids</Button>
              </Link>
            </div>
          </div>

          {/* Second Row */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            {/* Left side - Content */}
            <div className='text-center lg:text-left order-2 lg:order-1'>
              <h2 className='font-inter text-4xl font-bold text-gray-900 mb-6'>Quality contractors you can trust.</h2>
              <div className='flex items-center gap-3 mb-6 justify-center lg:justify-start'>
                <CheckCircle className='h-6 w-6 text-green-600' />
                <span className='font-inter text-lg text-green-600'>Background checked & verified</span>
              </div>
              <p className='font-inter text-gray-600 mb-8 text-lg'>
                All contractors on Bidquote are licensed, insured, and background-checked. If you're not satisfied with the work, we'll make it right with our satisfaction
                guarantee.
              </p>
            </div>

            {/* Right side - Image */}
            <div className='relative h-96 flex justify-center lg:justify-end order-1 lg:order-2'>
              <div className='w-80 h-72 bg-gray-200 rounded-lg flex items-center justify-center'>
                <Image src='/images/contractor-profile.jpg' alt='Professional contractor at work' fill className='object-cover rounded-lg shadow-xl' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-5'>
          <h2 className='font-inter text-4xl font-bold text-center text-gray-900 mb-20'>How it works</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>1</div>
              <h3 className='font-roboto font-semibold mb-2'>Post Your Job</h3>
              <p className='font-inter text-gray-600'>Describe your project with details and requirements</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>2</div>
              <h3 className='font-roboto font-semibold mb-2'>Get Bids</h3>
              <p className='font-inter text-gray-600'>Receive up to 5 competitive bids from qualified contractors</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>3</div>
              <h3 className='font-roboto font-semibold mb-2'>Choose & Pay</h3>
              <p className='font-inter text-gray-600'>Select your preferred contractor and confirm the job</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>4</div>
              <h3 className='font-roboto font-semibold mb-2'>Get It Done</h3>
              <p className='font-inter text-gray-600'>Work directly with your chosen contractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-5'>
          <h2 className='font-inter text-4xl font-bold text-center text-gray-900 mb-12'>What jobs are done with Bidquote</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: 'Plumbing',
                desc: 'Repairs, installations, and maintenance',
                image: '/images/services/plumbing.jpg',
                alt: 'Plumbing services',
              },
              {
                title: 'Fencing',
                desc: 'Installation and repair of fences',
                image: '/images/services/fencing.jpg',
                alt: 'Fencing services',
              },
              {
                title: 'Painting',
                desc: 'Interior and exterior painting services',
                image: '/images/services/painting.jpg',
                alt: 'Painting services',
              },
              {
                title: 'Landscaping',
                desc: 'Garden design and maintenance',
                image: '/images/services/landscaping.jpg',
                alt: 'Landscaping services',
              },
            ].map((service, index) => (
              <Card key={index} className='hover:shadow-lg transition-shadow overflow-hidden'>
                <div className='relative h-48 bg-gray-200'>
                  <Image src={service.image} alt={service.alt} fill className='object-cover' />
                </div>
                <CardContent className='p-6'>
                  <h3 className='font-roboto font-semibold text-lg mb-2'>{service.title}</h3>
                  <p className='font-inter text-gray-600 text-sm'>{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-12'>
        <div className='container mx-auto px-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <div className='font-roboto text-2xl font-bold mb-4'>Bidquote</div>
              <p className='font-inter text-gray-400'>Connecting homeowners with quality contractors.</p>
            </div>
            <div>
              <h4 className='font-roboto font-semibold mb-4'>Company</h4>
              <ul className='font-inter space-y-2 text-gray-400'>
                <li>About Us</li>
                <li>How It Works</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className='font-roboto font-semibold mb-4'>Follow Us</h4>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <DynamicIcon name='facebook' size={32} color='#1877f2' />
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <DynamicIcon name='instagram' size={32} color='#e1306c' />
                </a>
              </div>
            </div>
          </div>
          <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
            <p className='font-inter text-gray-400'>© 2025 Bidquote Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
