async function fetchdata(){
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const searchBtn=document.getElementById("search-btn");
        searchBtn.addEventListener("click",singleitem)
        //first ten posts -display
        function firstten(){
            const firstten=data.slice(0,10);

            const list =document.getElementById("posts");
            firstten.forEach(post => {
                const li=document.createElement("li");
                li.textContent=post.title;
                list.appendChild(li);
            });
        }
        firstten();
        //fetch single item
        function singleitem(){
            const singleItem=Number(document.getElementById("single-item").value);
            if(!singleItem){
                document.getElementById("field-error").textContent="give input";
            }
            else{
                document.getElementById("field-error").textContent="";
            }
            if(singleItem > 0){
                data.forEach(post => {
                    if(post.id === singleItem){
                        document.getElementById("userid-item").textContent=post.title;
                        return;
                    }
                    else{
                        document.getElementById("single-item").textContent="not availble";
                    }
                })
            }
           // document.getElementById("userid-item").textContent=data.singleItem;
        }
        const addBtn=document.getElementById("add-btn");
        addBtn.addEventListener("click",addTask);
        async function addTask(){
            const title=document.getElementById("title").value;
            const body = document.getElementById("body").value;
            if(!title || !body){
                document.getElementById("form-error").textContent="invalid";
                return;
            } 
            else{
                document.getElementById("form-error").textContent="";
            }
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({title,body,userId:1})
            });
            const newPost= await response.json();
            console.log("New Post Added:",newPost);

            const list=document.getElementById("posts");
            const li=document.createElement("li");
            li.textContent=newPost.title;
            list.appendChild(li);
        }
        catch(e){
            document.getElementById("form-error").textContent="invalid";
        }
    }
    async function updatePost(){
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
                {
                    method: "PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        id:1,
                        title:"updated title",
                        body:"this is the updated body content",
                        userId:1
                    })
                }
            );
            const updatePost=await response.json();
            console.log("Updated Post",updatePost);
        }
        catch(error){
            console.error("Error updating post:",error);
        }
    }
    updatePost();
    async function deletePost(){
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
                method: "DELETE"
            });
            if(response.ok){
                console.log("Post deleted sucessfully. Status:",response.status);
            }
            else{
                console.log("Failed to delete post. status:",response.status);
            }
        }
        catch(e){
            console.e("Error deleting post:",error);
        }
    }
    deletePost();
    }
    catch(e){
        const error=document.getElementById("post-error");
        e.textContent="While Loading ...some network issue";
    }
    
}
fetchdata();

