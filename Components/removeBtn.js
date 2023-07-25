"use client"
import { BsFillTrashFill } from 'react-icons/bs'
import { useRouter } from "next/navigation";
const RemoveButton = ( {id } ) => {
    const router = useRouter();
    const removeTopic  = async() =>{
        const confirmed = confirm("Are you sure, you want to delete this topic?")
        if(confirmed){
          const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method: "DELETE"
            })

            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (  
        <button onClick={removeTopic} className='text-red-200 hover:text-red-600 transition'> <BsFillTrashFill fontSize={24}/> </button>
    );
}
 
export default RemoveButton;