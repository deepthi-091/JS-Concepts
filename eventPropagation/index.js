 const grandparent=document.getElementById("grandparent");
        const parent= document.getElementById("parent");
        const child=document.getElementById("child");

        grandparent.addEventListener("click",()=>{
            console.log("GrandParent(bubbling)");
        })
        parent.addEventListener("click",()=>{
            console.log("Parent (bubbuling)");
        })
        child.addEventListener("click",(e)=>{
            console.log("child(target-bubble)");
            
        })

        grandparent.addEventListener("click",()=>{
            console.log("Grandparent (capture)");
        },{capture:true});
        parent.addEventListener("click",()=>{
            console.log("parent (capture)");
        },{capture:true})
        child.addEventListener("click",(e)=>{
            console.log("child (target-capture)")
           
        },{capture:true})

        const neighbour=document.getElementById("neighbour");
        neighbour.addEventListener("click",()=>{
            console.log("neighbour-capture");
        },{capture:true});
        neighbour.addEventListener("click",()=>{
            console.log("neighbour-bubbling");
        },);
        document.addEventListener("click",()=>{
            console.log("body");
        })