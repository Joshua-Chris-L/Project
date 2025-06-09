import { SquarePen } from 'lucide-react';
import { LampFloor } from 'lucide-react';
import { BookText } from 'lucide-react';
import { Clapperboard } from 'lucide-react';

function Divider() {
  return (
    <div className="h-40 mr-30 ml-30 bg-gray-300 flex items-center justify-center rounded-md">
        <div className='text-center p-60'>
            <h3> WELCOME TO NEWS BULLETIN </h3>
            <h1 className='text-2xl'> 
                Craft narratives <SquarePen className='inline'/> that ignite
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> inspiration </span> 
                <LampFloor className='inline'/>,
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> knowledge </span>
                 <BookText className='inline'/>, and 
                 <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> entertainment </span>
                 <Clapperboard className='inline mr-2 ml-2' />
            </h1>
        </div>
    </div>
  )
}
export default Divider;