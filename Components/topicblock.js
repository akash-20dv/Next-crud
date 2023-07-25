import { FaPen } from 'react-icons/fa'
import Link from 'next/link';
import RemoveButton from './removeBtn';
const getTopics = async () => {
    try {
        const res = await fetch ("http://localhost:3000/api/topics", {
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log("error loading topics", error)
    }
}
 export default async function  SectionBlock() {
    const {topics} = await getTopics();
 
    return (
        <>
        { topics.map((topic)=> (
                    <div key={topic.id} className="topic-block flex justify-between items-center px-4 py-4 my-3 gap-2 bg-slate-50 shadow-md">
                        <div className="content-area">
                            <h1 className='text-gray-900 text-2xl font-bold'>{topic.title}</h1>
                            <div className='text-gray-700 text-base '>{topic.description}</div>
                        </div>
                        <div className="button-area flex items-center gap-2">
                            <Link href={`/edit/${topic._id}`} className='text-gray-500 hover:text-green-500 transition'><FaPen fontSize={24}/></Link>
                        <RemoveButton  id={topic._id}/>
                        </div>

                    </div>
        )) }
        </>
     )
}
 
