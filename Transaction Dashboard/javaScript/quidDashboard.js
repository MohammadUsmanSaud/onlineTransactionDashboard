const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        // toggle the icon
        this.classList.toggle("bi-eye");
    });

    // prevent form submit
    const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });


        
    // Sidebar
    function myFunction(){
        var element = document.getElementById("main-wrapper");
        element.classList.toggle("sidebarSmall"); 
        // element.classList.toggle("contentLarge");
        
    }

    // Notification Pop Up
    function popupFunction(){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    //  // Account
    //  function accountFunction(){
    //     var accpopUp1 = document.getElementById("accPopUp");
    //     accpopUp1.classList.toggle("showAcc");
    // }