'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
const AddTopic = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if(!title || !description){
            alert("please fill both the entries")
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/topics',{
                 method: "POST",
                 headers: {
                   "Content-type" : "application/json",
                },
                body: JSON.stringify({title, description}),
            });
            if(res.ok){
                router.push("/")
                // console.log("submitted")
            }
            else{
                throw new Error('Failed to create new topic!');
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    return ( 
       <div>
            <h1 className="text-center text-4xl my-3 text-green-400">Add Topic</h1>
            <form onSubmit={handleSubmit} className="flex justify-center border border-1 p-4 flex-col items-center gap-5 max-w-4xl mx-auto">
                <input onChange={event => setTitle(event.target.value)} value={title} className="shadow-xs border-green-300 bg-gray-100 p-2 text-base  outline-1 w-full mb-5" type="text" placeholder="write your title.." />
                <textarea type="text" onChange={event => setDescription(event.target.value)} value={description} className="shadow-xs bg-gray-100 py-4  p-2 w-full text-base  border-green-300 mb-5" placeholder="write your Description.." />
                <button type="submit" className="bg-green-400 text-xl text-white w-fit px-3 py-1 hover:bg-green-700 transition">Submit</button>
            </form>
       </div>
     );
}
 
export default AddTopic;