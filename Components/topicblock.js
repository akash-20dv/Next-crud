import { FaPen } from 'react-icons/fa'
import { BsFillTrashFill } from 'react-icons/bs'
import Link from 'next/link';
 export default function SectionBlock() {
    return (
        <div className="topic-block flex justify-between items-center px-4 py-4 my-3 gap-2 bg-slate-50 shadow-md">
            <div className="content-area">
                <h1 className='text-gray-900 text-2xl font-bold'>Tile</h1>
                <div className='text-gray-700 text-base '>Description</div>
            </div>
            <div className="button-area flex items-center gap-2">
                <Link href="/edit" className='text-gray-500 hover:text-green-500 transition'><FaPen fontSize={24}/></Link>
               <button className='text-red-200 hover:text-red-600 transition'> <BsFillTrashFill fontSize={24}/> </button>
            </div>

        </div>
     );
}
 
