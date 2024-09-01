const collapseFooter = () => {
    const showHideSubFooter = document.querySelectorAll(".showHideSubFooter");
    const footerText = document.querySelectorAll(".footerText");
    
    for (let i = 0; i < showHideSubFooter.length; i++) {
        showHideSubFooter[i].addEventListener("click", (e) =>{
            for (let j = 0; j < footerText.length; j++) {
                if (j === i) {                    
                    if (footerText[j].classList.contains("hidden")) {
                        footerText[j].classList.remove("hidden");
                    }else{
                        footerText[j].classList.add("hidden");
                    }
                }
            }
        })
    }
}
collapseFooter();