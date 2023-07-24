const EditTopic = () => {
    return ( 
        <div>
            <h1 className="text-center text-4xl my-3 text-green-400">edit Topic</h1>
            <form className="flex justify-center border border-1 p-4 flex-col items-center gap-5 max-w-4xl mx-auto">
                <input className="shadow-xs border-green-300 bg-gray-100 p-2 text-base  outline-1 w-full mb-5" type="text" placeholder="write your title.." />
                <textarea type="text" className="shadow-xs bg-gray-100 py-4  p-2 w-full text-base  border-green-300 mb-5" placeholder="write your Description.." />
                <button className="bg-green-400 text-xl text-white w-fit px-3 py-1 hover:bg-green-700 transition">Submit</button>
            </form>
        </div>
     );
}
 
export default EditTopic;