class Message{
    constructor(user_name,send_time,message_text){
        this.user_name=user_name;
        this.send_time=send_time;
        this.message_text=message_text;
    }
    toHtml(){
        return `<p>${this.send_time} ${this.user_name}: ${this.message_text}</ p>< /b>`;

    }
    
}
class Messenger{
    constructor(user_name,send_time,message_text){
        this.user_name=user_name;
        this.send_time=send_time;
        this.message_text=message_text;
    }
    
}
    let now = new Date();
    let newDate=`${now.getHours()}:${now.getMinutes()}`;
  document.querySelector("#send").addEventListener("click",addTask);
  function addTask(){
    let author=document.querySelector("#name").value;
    let text=document.querySelector("#message").value;
    document.querySelector(".list").innerHTML+=
    `
    <div style="border:1px solid black; width:max-content;">
    ${newDate} ${author}:${text}
    </div>`;
    }

