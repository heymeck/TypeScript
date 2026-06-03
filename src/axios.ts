import axios,{type AxiosResponse} from "axios";

// jsonplaceholder.typicode.com/todos/1

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log(response.data);
//   });

const fetchData= async ()=>{
    try {
        const response:AxiosResponse<todo>=await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error",error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
