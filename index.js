    let add=document.querySelector("#add");
    let count=0;
    let tableData = [];
    add.addEventListener("click",function()
    {
        const tbody=document.querySelector("tbody");
        const tr=document.createElement("tr");
        tbody.appendChild(tr);
        count++;
        let td=document.createElement("th");
        td.innerText=count;
        tr.appendChild(td);
        const inp = document.querySelector("input").value;
        const td1 = document.createElement("th");
        td1.innerText = inp;
        tr.appendChild(td1);
        const td2 = document.createElement("th");
        const div =document.createElement("div");
        div.classList.add="done";
        div.innerText="✔";
        td2.appendChild(div);
        tr.appendChild(td2);
        let currentColor1 = "#20c997";
        div.addEventListener("click", function() {
            currentColor1 = currentColor1 === "#20c997" ? "#333" : "#20c997";
            div.style.backgroundColor = currentColor1;
            setTimeout(function() {
                completeTask();
            }, 500);  // هنا يمكنك
        });
        const td3 = document.createElement("th");
        const div2 =document.createElement("div");
        div2.innerText="✖";
        td3.appendChild(div2);
        tr.appendChild(td3);
        let currentColor = "#dc3545"; // initialize the current color
        div2.addEventListener("click", function() {
            currentColor = currentColor === "#dc3545" ? "#333" : "#dc3545";
            div2.style.backgroundColor = currentColor;
        });
        tableData.push({
            id: count,
            inp: inp,
            done: false
        });
        localStorage.setItem("tableData", JSON.stringify(tableData));
    });
        let emailInput = document.querySelector("#exampleInputEmail1");
        let passwordInput = document.querySelector("#exampleInputPassword1");
        let saveButton = document.querySelector(".save");
        let displayDiv = document.querySelector(".div-x");
        saveButton.addEventListener("click", function() {
            let emailValue = emailInput.value;
            let passwordValue = passwordInput.value;

            localStorage.setItem("email", emailValue);
            localStorage.setItem("password", passwordValue);

            updateDisplay();
        });

        function updateDisplay() {
            let emailDisplay = document.getElementById("x1");
            let passwordDisplay = document.getElementById("x2");

            emailDisplay.innerText = "Email: " + localStorage.getItem("email");
            passwordDisplay.innerText = "Password: " + localStorage.getItem("password");
        }
        // Check if local storage items exist and display them if they do
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            updateDisplay();
        }
        const messages = [
            "استمر في العمل الرائع!",
            "أنت تستطيع إنجاز كل شيء!",
            "خطوة بخطوة، ستصل!",
            "كل مهمة تُنجز تجعلك أقرب للنجاح!",
            "تصرف وكانه من المستحيل ان تفشل",
            "اجعل محاولات إحباطك هي الشرارة التي تضيء لك طريق النجاح",
            "يكمن الحظ في صعوبة العمل."
        ];
        
        document.getElementById('motivational-message').innerText = 
            messages[Math.floor(Math.random() * messages.length)];
        let change=document.getElementById("change");
        let b=document.querySelector(".container-fluid")
        let b1=document.querySelector(".x1")
        let b2=document.querySelectorAll(".x2")
        let h=document.querySelectorAll(".heading");
        let tb=document.querySelectorAll(".tbody");
        change.addEventListener("click",function(){
            b.style.backgroundColor="white";
            b1.style.backgroundColor="white";
            b2.forEach(element => {
                element.style.backgroundColor="white";  
            });
            h.forEach(element => {
                element.style.color="black";
            });
            tb.forEach(element => {
                element.style.color="black";
            });
        })
        function showMood(mood) {
            const messages = {
                '😀': "يبدو أنك في مزاج رائع! استمر!",
                '😞': "لا بأس، خذ استراحة قصيرة!",
                '😎': "أنت في قمة النشاط، أتمم مهامك!"
            };
            document.getElementById('mood-message').innerText = messages[mood];
        }
        function completeTask() {
            let audio = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');
            audio.play();
            alert(" رائع! لقد أكملت المهمة!استمر يا شطور");
        }
        
