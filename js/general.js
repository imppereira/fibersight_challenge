
window.onload = function () {
    /* LIGHT/DARK MODE SWTICH -----------------------------------------------------------------------------------------------*/
    let darkemode_toggle = document.getElementById("darkemode_toggle");
    // Check localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        darkemode_toggle.checked = true;
    }
    darkemode_toggle.addEventListener('change', switchMode); //check whe clicked
    switchMode(); //check at begining 

    /* MENU -----------------------------------------------------------------------------------------------*/

    // create button function
    let map_button = document.getElementById("map_button");
    let svgMap = '<svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M19.4444 0L19.2667 0.0333333L13.3333 2.33333L6.66667 0L0.4 2.11111C0.166667 2.18889 0 2.38889 0 2.64444V19.4444C0 19.7556 0.244444 20 0.555556 20L0.733333 19.9667L6.66667 17.6667L13.3333 20L19.6 17.8889C19.8333 17.8111 20 17.6111 20 17.3556V0.555556C20 0.244444 19.7556 0 19.4444 0ZM13.3333 17.7778L6.66667 15.4333V2.22222L13.3333 4.56667V17.7778Z"  /></svg>'
    writeButtons(map_button, "Map", svgMap);

    let analytics_button = document.getElementById("analytics_button");
    let svgAnalytics = '<svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M19 18H2V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19C20 18.7348 19.8946 18.4804 19.7071 18.2929C19.5196 18.1054 19.2652 18 19 18Z"  /><path d="M6 15V10C6 9.73478 5.89464 9.48043 5.70711 9.29289C5.51957 9.10536 5.26522 9 5 9C4.73478 9 4.48043 9.10536 4.29289 9.29289C4.10536 9.48043 4 9.73478 4 10V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16C5.26522 16 5.51957 15.8946 5.70711 15.7071C5.89464 15.5196 6 15.2652 6 15ZM10 15V6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5C8.73478 5 8.48043 5.10536 8.29289 5.29289C8.10536 5.48043 8 5.73478 8 6V15C8 15.2652 8.10536 15.5196 8.29289 15.7071C8.48043 15.8946 8.73478 16 9 16C9.26522 16 9.51957 15.8946 9.70711 15.7071C9.89464 15.5196 10 15.2652 10 15ZM14 15V4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3C12.7348 3 12.4804 3.10536 12.2929 3.29289C12.1054 3.48043 12 3.73478 12 4V15C12 15.2652 12.1054 15.5196 12.2929 15.7071C12.4804 15.8946 12.7348 16 13 16C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15ZM18 15V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V15C16 15.2652 16.1054 15.5196 16.2929 15.7071C16.4804 15.8946 16.7348 16 17 16C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15Z"  /></svg>';
    writeButtons(analytics_button, "Analytics", svgAnalytics);

    let history_button = document.getElementById("history_button");
    let svgHistory = '<svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M13.8889 13.8889C13.4593 14.3184 12.7629 14.3184 12.3333 13.8889L8.88889 10.4444V5.55556C8.88889 4.94191 9.38635 4.44444 10 4.44444V4.44444C10.6137 4.44444 11.1111 4.94191 11.1111 5.55556V9.55556L13.8889 12.3333C14.3184 12.7629 14.3184 13.4593 13.8889 13.8889V13.8889ZM10 20C7.44444 20 5.21778 19.1526 3.32 17.4578C1.74455 16.052 0.727131 14.3559 0.267757 12.3697C0.114195 11.7057 0.650901 11.1111 1.33241 11.1111V11.1111C1.90559 11.1111 2.38098 11.5382 2.52469 12.0931C2.91111 13.5851 3.70363 14.8503 4.90222 15.8889C6.3563 17.1481 8.05556 17.7778 10 17.7778C12.1667 17.7778 14.0044 17.023 15.5133 15.5133C17.023 14.0044 17.7778 12.1667 17.7778 10C17.7778 7.83333 17.023 5.99519 15.5133 4.48556C14.0044 2.97667 12.1667 2.22222 10 2.22222C8.72222 2.22222 7.52778 2.51852 6.41667 3.11111C5.30556 3.7037 4.37037 4.51852 3.61111 5.55556H5.55556C6.16921 5.55556 6.66667 6.05302 6.66667 6.66667V6.66667C6.66667 7.28032 6.16921 7.77778 5.55556 7.77778H0V2.22222C0 1.60857 0.497462 1.11111 1.11111 1.11111V1.11111C1.72476 1.11111 2.22222 1.60857 2.22222 2.22222V3.72222C3.16667 2.53704 4.31963 1.62037 5.68111 0.972222C7.04185 0.324074 8.48148 0 10 0C11.3889 0 12.69 0.263704 13.9033 0.791111C15.1159 1.31926 16.1715 2.03222 17.07 2.93C17.9678 3.82852 18.6807 4.88407 19.2089 6.09667C19.7363 7.31 20 8.61111 20 10C20 11.3889 19.7363 12.6896 19.2089 13.9022C18.6807 15.1156 17.9678 16.1711 17.07 17.0689C16.1715 17.9674 15.1159 18.6807 13.9033 19.2089C12.69 19.7363 11.3889 20 10 20Z"  /></svg>';
    writeButtons(history_button, "History", svgHistory);

    let settings_button = document.getElementById("settings_button");
    let svgSettings = '<svg width="20" height="21" viewBox="0 0 20 21" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M8.41879 0C7.91712 0 7.48828 0.355523 7.39192 0.849023L7.04213 2.64961C6.18253 2.97549 5.3877 3.43077 4.68975 4.00518L2.9674 3.41045C2.49296 3.24665 1.97097 3.44333 1.71961 3.87803L0.140445 6.62197C-0.109865 7.05772 -0.0187645 7.61092 0.359319 7.94062L1.74007 9.14443C1.66826 9.58685 1.62142 10.0372 1.62142 10.5C1.62142 10.9628 1.66826 11.4131 1.74007 11.8556L0.359319 13.0594C-0.0187645 13.3891 -0.109865 13.9423 0.140445 14.378L1.71961 17.122C1.96992 17.5577 2.49296 17.7544 2.9674 17.5916L4.68975 16.9969C5.38747 17.5709 6.18292 18.0247 7.04213 18.3504L7.39192 20.151C7.48828 20.6445 7.91712 21 8.41879 21H11.5812C12.0829 21 12.5117 20.6445 12.6081 20.151L12.9579 18.3504C13.8175 18.0245 14.6123 17.5692 15.3102 16.9948L17.0326 17.5895C17.507 17.7533 18.029 17.5577 18.2804 17.122L19.8596 14.376C20.1099 13.9402 20.0188 13.3891 19.6407 13.0594L18.2599 11.8556C18.3317 11.4131 18.3786 10.9628 18.3786 10.5C18.3786 10.0372 18.3317 9.58685 18.2599 9.14443L19.6407 7.94062C20.0188 7.61092 20.1099 7.05772 19.8596 6.62197L18.2804 3.87803C18.0301 3.44228 17.507 3.24565 17.0326 3.4084L15.3102 4.00312C14.6125 3.42908 13.8171 2.97534 12.9579 2.64961L12.6081 0.849023C12.5117 0.355523 12.0829 0 11.5812 0H8.41879ZM10 6.3C12.3135 6.3 14.1893 8.18055 14.1893 10.5C14.1893 12.8194 12.3135 14.7 10 14.7C7.68647 14.7 5.81071 12.8194 5.81071 10.5C5.81071 8.18055 7.68647 6.3 10 6.3Z"  /></svg>';
    writeButtons(settings_button, "Settings", svgSettings);

    let notifications_button = document.getElementById("notifications_button");
    let svgNotifications = '<svg width="16" height="21" viewBox="0 0 16 21" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C7.172 0 6.5 0.7056 6.5 1.575V2.30508C3.91318 3.0052 2 5.46504 2 8.4V14.7L0.464844 15.9141H0.462891C0.320993 16.0089 0.204183 16.1399 0.123271 16.2947C0.0423585 16.4496 -3.99061e-05 16.6234 2.81839e-08 16.8C2.81839e-08 17.0785 0.105357 17.3455 0.292893 17.5425C0.48043 17.7394 0.734784 17.85 1 17.85H8H15C15.2652 17.85 15.5196 17.7394 15.7071 17.5425C15.8946 17.3455 16 17.0785 16 16.8C16 16.6234 15.9576 16.4496 15.8767 16.2947C15.7958 16.1399 15.679 16.0089 15.5371 15.9141L14 14.7V8.4C14 5.46504 12.0868 3.0052 9.5 2.30508V1.575C9.5 0.7056 8.828 0 8 0ZM6 18.9C6 20.055 6.9 21 8 21C9.1 21 10 20.055 10 18.9H6Z"  /></svg>';
    writeButtons(notifications_button, "Notifications", svgNotifications);

    let profile_button = document.getElementById("profile_button");
    let imgProfile = '<img src="./assets/img/icon/icon-profile.png" width="22" height="22">'
    writeButtons(profile_button, "Profile", imgProfile);

    // Change font weight function
    changeFontWeight(map_button, "index.html");
    changeFontWeight(analytics_button, "analytics.html");
    changeFontWeight(history_button, "history.html");
    changeFontWeight(settings_button, "settings.html");
}

/*FUNÇÕES-----------------------------------------------------------------------------------------------*/

//Change light/dark mode
function switchMode() {
    if (darkemode_toggle.checked) {
        document.body.classList.add('darkMode');
        localStorage.setItem("darkMode", "enabled"); // Save to localStorage
        document.getElementById("logo_company").src = "./assets/img/logo/white_logo_esoeste.png";
    }
    else {
        document.body.classList.remove('darkMode');
        localStorage.setItem("darkMode", "disabled"); // Save to localStorage
        document.getElementById("logo_company").src = "./assets/img/logo/logo_esoeste.png";
    }
}

// Create button function
function writeButtons(button_pai, text, link) {
    let button_icon = button_pai.querySelector('.button_icon');
    button_icon.innerHTML = link;

    let button_text = button_pai.querySelector('.button_text');
    button_text.innerText = text;
}

// Change page function
window.changePage = function (event) {
    if (!event) return; // Evita erro se 'event' for undefined

    let clickedButton = event.target.closest(".button"); // Find the right button
    if (!clickedButton) return; // If it's not a button, it exits the function

    let buttonText = clickedButton.querySelector(".button_text")?.textContent.trim() || "No text";
    console.log("Botão clicado:", buttonText);

    if (buttonText == "Map") {
        document.location.href = "index.html";
    }
    else if (buttonText == "Analytics") {
        document.location.href = "analytics.html";
    }
    else if (buttonText == "History") {
        document.location.href = "history.html";
    }
    else if (buttonText == "Settings") {
        document.location.href = "settings.html";
    }
};

// Change font weight function
function changeFontWeight(buttonName, link) {
    if (window.location.pathname.includes(link)) {
        let map_button_text = buttonName.querySelector(".button_text");
        map_button_text.style.fontWeight = "500";
    }
}