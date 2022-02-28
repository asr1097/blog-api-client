fetch("https://sheltered-anchorage-95159.herokuapp.com/api")
    .then(posts_raw => posts_raw.json())
    .then(data => {
        let list = document.getElementById("list");
        
        data.posts.forEach(post => {
            let list_item = document.createElement("li");
            let title = document.createElement("h4");
            let text = document.createElement("p");
            let date = document.createElement("p");
            title.textContent = post.title;
            text.textContent = post.text;
            date.textContent = post.date;
            list_item.appendChild(title);
            list_item.appendChild(text);
            list_item.appendChild(date);
            list.appendChild(list_item);
        })
    })