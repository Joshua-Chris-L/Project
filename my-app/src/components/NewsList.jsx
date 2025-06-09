import { MoveRight } from 'lucide-react';
import NewsContent from "./NewsContent"



function NewsList() {
  return (
    <div className="  pl-30 pr-30 mt-5">
      <div className='flex justify-between'>
        <h1 className='text-3xl'> Latest News </h1>
        <div className='flex'>
          <h3 className='bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text'> See all  </h3>
          <MoveRight />
        </div>
      </div>
      
      <div className="flex mt-5 space-x-3">
         <NewsContent />
         <NewsContent />
      </div>
       
    </div>
  )
}

export default NewsList;