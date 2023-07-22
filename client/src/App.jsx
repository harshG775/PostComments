import { useEffect, useState } from "react";

export default function App() {
    const [serverData, setServerData] = useState(["dummy data"]);
	
    useEffect(() => {
        const fetchData = async () => { try {
                const response = await fetch("/api/comments");
                const data = await response.json();
				// console.log(data)
                setServerData(data);
		}catch (err) {console.log(err)}};
        fetchData();
    }, []);
    return (
	<div>
		{
            serverData?.map((comment,i)=>(
                <div key={i}>
                    <h3>{comment.username}</h3>
                    <p>{comment.comment}</p>
                </div>
            ))
		}
        <form method="post" action="/api/comment/new">
                <input type="text" name="username" placeholder="UserName"/>
                <input type="text" name="comment" placeholder="Comment..."/>
                <button>comment</button>
        </form>
	</div>);
}
