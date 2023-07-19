import { useEffect, useState } from "react";

export default function App() {
    const [serverData, setServerData] = useState(["dummy data"]);
	
    useEffect(() => {
        const fetchData = async () => { try {
                const response = await fetch("http://localhost:4000/api/data");
                const data = await response.json();
				// console.log(data)
                setServerData(data);
		}catch (err) {console.log(err)}};
        fetchData();
    }, []);
    return (
	<div>
		{serverData.users?.map((user,i)=>(
            <p key={i}>{user}</p>
        ))}
	</div>);
}
