
import EditDynamicTopic from "@/Components/editTopic";

const getTopicById = async(id) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,
       { cache: "no-store ",});
       if (!res.ok){
        throw new Error("failed to fetch topic")
       }
       return res.json()
    } catch (error) {
        console.log(error)
    } 
}
const EditTopic = async ({ params } ) => {
    const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

    return ( 
        <EditDynamicTopic id={id} title = { title } description={description}/>
     );
}
 
export default EditTopic;