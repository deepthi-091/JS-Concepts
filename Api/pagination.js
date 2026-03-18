async function pagination(){
    const response =await fetch("https://jsonplaceholder.typicode.com/posts");
    const data= await response.json();

    const postsperpage=5;
    const currentpage=1;

    function renderpage(page){
        const start=(page -1) * postsperpage;
        const end=start + postsperpage;
        const pageItems=data.slice(start,end);

        const list=document.getElementById("posts");
        list.innerHTML=""
        pageItems.forEach(post => {
            const li=document.createElement("li");
            li.textContent=post.title;
            list.appendChild();
        });
        document.getElementById("page-info").textContent=`page ${page}of ${Math.ceil(data.length/postsperpage)}`;
        document.getElementById("prev-btn").disabled=page === 1;
        document.getElementById("next-btn").disabled = page === Math.ceil(data.length / postsperpage);

        document.getElementById("prev-btn").addEventListener("click",()=>{
            if(currentpage > 1){
                currentpage++;
                renderpage(currentpage);
            }
        });
        document.getElementById("next-btn").addEventListener("click",()=>{
            
        })
    }
}