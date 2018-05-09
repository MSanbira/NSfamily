
function openTab(tabType) {
    var i, tabContent, tabBtn;
    tabContent = document.getElementsByClassName("tab-content");
    tabBtn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabContent.length; i++) {
        if (tabContent[i].getAttribute('id') == tabType) {
            if (tabType == 'pictures') {
                tabContent[i].style.display = "flex";
            }
            else {
                tabContent[i].style.display = "block";
            }
            tabBtn[i].style = "background-color: darkgrey; color: whitesmoke;";
        }
        else {
            tabContent[i].style.display = "none";
            tabBtn[i].style = "background-color: white; color: inherit;";
        }
    }
}

function openFaq(num) {
    var panel = document.getElementsByClassName('panel');
    if (panel[num].style.display === "block") {
        panel[num].style.display = "none";
    }
    else {
        panel[num].style.display = "block";
    }
}
