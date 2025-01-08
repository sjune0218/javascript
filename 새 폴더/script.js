        
        let myButton1 = document.querySelector("#alert-button1")
        let myButton2 = document.querySelector("#alert-button2")
        let myButton3 = document.querySelector("#alert-button3")
        let myButton4 = document.querySelector("#alert-button4")
        let myButton5 = document.querySelector("#alert-button5")

        myButton1.addEventListener("click", ()=>{
            alert("클릭했습니다")
        })                                                                                          
        myButton2.addEventListener("click", ()=>{
            alert("클릭했습니까?")
        })  
        myButton3.addEventListener("click", ()=>{
            alert("클릭했을겁니다")
        })  
        myButton4.addEventListener("click", ()=>{
            alert("클릭했겠죠?")
        })  
        myButton5.addEventListener("click", ()=>{
            alert("클릭했었었습니다")
        })  
        
        
        const colorButton = document.querySelector("#color-button");

        colorButton.addEventListener("click", () => {
            document.body.style.backgroundColor = "#FF5733";
        });


        /*const textbutton = document.querySelector("#change-text");
        const title = document.querySelector("#title")

        textbutton.addEventListener("click", () => {
            title.textContent = "새로운제목!!";
            title.style.backgroundColor = "#FF4433"
        });*/

        const namebutton = document.querySelector("#change-name");
        const name = document.querySelector("#name")

        namebutton.addEventListener("click", () => {
            name.textContent = "김성준!!";
            name.style.backgroundColor = "#FF6879"
            name.style.color = "#FF4857"
        });

        const title = document.querySelector("#title")
        const titleInput = document.querySelector("#title-input")
        const titleInputBtn = document.querySelector("#title-input-button")
        titleInputBtn.addEventListener("click", () => {           
            title.textContent = titleInput.value
        });

        const commentList = document.querySelector("#comment-list")
        const commentInput = document.querySelector("#comment-input")
        const commentInputBtn = document.querySelector("#comment-input-btn")

        commentInputBtn.addEventListener("click", () => {           
            const li = document.createElement("li");
            li.textContent = commentInput.value;
            commentList.append(li);
            commentInput.value = '';

        });

        



        