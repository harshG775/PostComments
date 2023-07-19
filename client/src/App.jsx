import { useEffect, useState } from "react";

export default function App() {
    const [serverData, setServerData] = useState(["dummy data"]);
	
    useEffect(() => {
        const fetchData = async () => { try {
                const response = await fetch("/api/data");
                const data = await response.json();
				// console.log(data)
                setServerData(data);
		}catch (err) {console.log(err)}};
        fetchData();
    }, []);
    return (
	<div>
		{
            serverData.comments?.map((comment,i)=>(
                <div key={i}>
                    <h3>{comment.username}</h3>
                    <p>{comment.comment}</p>
                </div>
            ))
		}	
	</div>);
}
