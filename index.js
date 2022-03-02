fetch("https://sheltered-anchorage-95159.herokuapp.com/api")
    .then(posts_raw => posts_raw.json())
    .then(data => {
        let list = document.getElementById("list");
        
        data.forEach(post => {
            let list_item = document.createElement("li");
            let title = document.createElement("h3");
            let text = document.createElement("p");
            let date = document.createElement("p");
            let commentList = document.createElement("ul");
            let commentForm = document.createElement("form");
            let titleInput = document.createElement("input");
            let textInput = document.createElement("textarea");
            let userInput = document.createElement("input");
            let idInput = document.createElement("input");
            let submitInput = document.createElement("input");
            commentForm.action = "https://sheltered-anchorage-95159.herokuapp.com/api";
            commentForm.method = "post";
            titleInput.name = "title";
            titleInput.type = "text";
            textInput.name = "text";
            userInput.type = "text";
            userInput.name = "user";
            idInput.hidden = true;
            idInput.name = "_id";
            idInput.value = post._id;
            submitInput.type = "submit";
            title.textContent = post.title;
            text.textContent = post.text;
            date.textContent = post.timestamp;
            list_item.appendChild(title);
            list_item.appendChild(text);
            list_item.appendChild(date);
            post.comments.forEach(comment => {
                let singleComment = document.createElement("li");
                let title = document.createElement("h5");
                let text = document.createElement("p");
                let user = document.createElement("p");
                let date = document.createElement("p");
                title.textContent = comment.title;
                text.textContent = comment.text;
                user.textContent = comment.user;
                date.textContent = comment.timestamp;
                singleComment.appendChild(title);
                singleComment.appendChild(text);
                singleComment.appendChild(user);
                singleComment.appendChild(date);
                commentList.appendChild(singleComment);
            });
            commentForm.appendChild(titleInput);
            commentForm.appendChild(textInput);
            commentForm.appendChild(userInput);
            commentForm.appendChild(idInput);
            commentForm.appendChild(submitInput);
            commentList.appendChild(commentForm);
            list_item.appendChild(commentList);
            list.appendChild(list_item);

            commentForm.addEventListener("submit", (event) => {
                location.reload();
            })
        });
    });
