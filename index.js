window.addEventListener("load",(tab)=>{
    const myTitle = document.querySelector("#title");
    mytab().then((data)=>(myTitle.innerHTML=data));


});

async function mytab(){
    let myOptions = {active:true, lastFocusedWindow:true};
    let [tab]=await chrome.tabs.query(myOptions);
    return tab.title;
}