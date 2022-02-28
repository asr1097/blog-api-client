fetch("https://sheltered-anchorage-95159.herokuapp.com/api", {mode: "no-cors"})
    .then(posts_raw => posts_raw.json())
    .then(posts => {
        let list = document.getElementById("list");
        
        posts.forEach(post => {
            let list_item = document.createElement("li");
            list_item.textContent = post;
            list.appendChild(list_item);
        })
    })
