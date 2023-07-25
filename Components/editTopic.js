"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditDynamicTopic = ({id, description , title}) => {
    const router = useRouter();
    const [newTitle,setNewTitle] = useState(title)
    const [newDescription,setNewDescription] = useState(description)
    const handleSubmit= async(e) =>{
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,
            { 
                method : "PUT",
                headers: {
                    "Content-type" : "application/json",
                },
                body: JSON.stringify({newTitle, newDescription})
            });
            if (!res.ok){
             throw new Error("failed to fetch topic")
            }
            router.refresh();
            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <div>
        <h1 className="text-center text-4xl my-3 text-green-400">edit Topic</h1>
        <form onSubmit={handleSubmit} className="flex justify-center border border-1 p-4 flex-col items-center gap-5 max-w-4xl mx-auto">
            <input onChange={e=>setNewTitle(e.target.value)} value={newTitle} className="shadow-xs border-green-300 bg-gray-100 p-2 text-base  outline-1 w-full mb-5" type="text" placeholder="write your title.." />
            <textarea onChange={e=>setNewDescription(e.target.value)} value={newDescription} type="text" className="shadow-xs bg-gray-100 py-4  p-2 w-full text-base  border-green-300 mb-5" placeholder="write your Description.." />
            <button className="bg-green-400 text-xl text-white w-fit px-3 py-1 hover:bg-green-700 transition">Submit</button>
        </form>
    </div>
     );
}
 
export default EditDynamicTopic;