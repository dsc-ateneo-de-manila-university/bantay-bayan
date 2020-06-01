function toggleFaqBox(number) {
    let faq = document.getElementById(`faq-${number}`)
    for (var i = 0; i < faq.childNodes.length; i++) {
        if (faq.childNodes[i].className === "body") {
            if (faq.childNodes[i].style.display === "none") {
                faq.childNodes[i].style.display = "block"
            } else {
                faq.childNodes[i].style.display = "none";
            }
        }
    }

    for (var i = 0; i < faq.childNodes.length; i++) {
        if (faq.childNodes[i].className === "header") {
            const header = faq.childNodes[i];
            for (var i = 0; i < header.childNodes.length; i++) {
                if (header.childNodes[i].className === "anchor-up") {
                    if (header.childNodes[i].style.display === "none") {
                        header.childNodes[i].style.display = "block"
                    } else {
                        header.childNodes[i].style.display = "none";
                    }
                } else if (header.childNodes[i].className === "anchor-down") {
                    if (header.childNodes[i].style.display === "none") {
                        header.childNodes[i].style.display = "block"
                    } else {
                        header.childNodes[i].style.display = "none";
                    }
                }
            }
        }
    }
}


window.addEventListener("scroll", function(){
    var sidebar = document.querySelector(".sidebar");
    var footer = document.querySelector("footer");
    if(this.innerWidth > 768){
        if(this.scrollY <= (document.body.scrollHeight * 0.825)){
            sidebar.style.paddingTop = `${this.scrollY}px`
        }  
    }
})


