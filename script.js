function scrollTolement(elementSelector, instance = 0){
// Select all elements that watch the given selector
const elements = document.querySelectorAll(elementSelector);
// check if there are elements matchung theselector and if the request instance exist
    if(elementSelector.length > instance){
    // scroll to the specified istance of the element
        elements[instance].scrollIntoView({behavior: "smooth"})
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () =>{
    scrollTolement('.header');
});

link2.addEventListener("click", () =>{
    //scroll to the second element with "header" class
    scrollTolement('.header', 1);
});

link3.addEventListener("click", () =>{
    scrollTolement('.column');
});
