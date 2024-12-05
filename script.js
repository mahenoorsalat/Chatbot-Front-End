function start() {
    let res_msg = document.createElement("div");
    res_msg.innerHTML = "Hello myself Aco, How can I help You!";
    res_msg.classList.add("left");
    document.getElementById('msg').appendChild(res_msg);
}

document.getElementById('reply').addEventListener("click", (e) => {
    e.preventDefault();
    var req = document.getElementById('msg_send').value;
    if (req === undefined || req === "") {
        alert("Please enter a message!");
    } else {
     
        let simulatedResponses = {
            hello: "Hi there! How can I assist you?",
            help: "Sure! Let me know what you need help with.",
            bye: "Goodbye! Have a great day!",
        };

        let res = simulatedResponses[req.toLowerCase()] || "I'm sorry, I didn't understand that.";

        let msg_req = document.createElement('div');
        let msg_res = document.createElement('div');

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.classList.add("right");
        msg_res.classList.add("left");

        let message = document.getElementById("msg");
        message.appendChild(msg_req);
        message.appendChild(msg_res);

        document.getElementById("msg_send").value = "";

        message.scrollTop = message.scrollHeight;
    }
});

