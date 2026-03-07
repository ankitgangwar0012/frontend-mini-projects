function passCheck() {

    let pass = prompt("Enter the Secret Password");

    if (pass === "1234") {

        let validation = confirm("✅ Access Granted. Enter the website?");

        if (validation) {
            location.href = "https://netflax-dotcom.netlify.app/";
        }

    }
    else {

        alert("❌ Access Denied\nHint: password is 1234");

    }

}