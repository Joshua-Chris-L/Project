import { SquarePen } from 'lucide-react';
import { BellDot } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

function Header() {
  return (
     <header className="container p-30 flex py-6 ">
        <div className='flex justify-between gap-x-7'>
            <h1 className="text-4xl font-bold mb-2 "> News Bulletin </h1>
            <div className='text-4xl'> | </div>
        </div>
        <div className='flex justify-between ml-16 mr-6  gap-x-6 items-center text-2xl'>
            <h2> Stories </h2>
            <h2> Community  </h2>
            <h2> Subscribe  </h2> 
        </div>
        <div className='flex justify-between items-center ml-70 mr-20  gap-x-2'>
            <SquarePen />
            <h2> Write </h2>
        </div>
        <div className='flex justify between items-center gap-x-10'>
            <BellDot />
            <CircleUserRound />
        </div>
     </header>
  )
}

export default Header