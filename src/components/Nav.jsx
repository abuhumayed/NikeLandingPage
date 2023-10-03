import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';


const Nav = () =>
{
  return (
      <header className='padding-x py-8 absolute z-10 w-full '>  
          <nav className='flex justify-between items-center max-container'>
              <a href="/">
                  <img
                      src={headerLogo}
                      alt='Nike'
                      width={130}
                      height={29}
                  />
              </a>
              {/* This is for large sized screen to display Nav contents */}
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((item) => (
                      <li key={item.label}>
                          <a href={item.href}
                              className='font-montserrat leading-normal text-lg text-slate-gray'
                          >
                              {item.label}
                          </a>
                        </li>
                  ))}
                  
              </ul>

              {/* ABove 1024 screen px size the hamburger will become invisible  */}
              <div className='hidden max-lg:block '>
                  <img src={hamburger} alt="hamburger" width={25} height={25}/>
              </div>
          </nav>
   </header>
  )
}

export default Nav