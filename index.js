fetch("https://sheltered-anchorage-95159.herokuapp.com/api")
    .then(posts_raw => posts_raw.json())
    .then(data => {
        let list = document.getElementById("list");
        
        data.posts.forEach(post => {
            let list_item = document.createElement("li");
            list_item.textContent = post;
            list.appendChild(list_item);
        })
    })