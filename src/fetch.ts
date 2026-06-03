

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}



const fetchData=async()=>{
    try {
        const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!response.ok){
            throw new Error(`HTTPS error ${response.status}`)
        }
        const data:todo= await response.json();

        
    } catch (error:any) {
        throw error;
    }
}

