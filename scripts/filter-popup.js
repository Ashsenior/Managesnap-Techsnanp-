var filter_popup = document.getElementsByClassName("filter-popup")[0]
var filter_btn = document.getElementsByClassName("filter-btn")[0]
var navi = document.getElementsByClassName("navigation")[0]
var body_ = document.getElementsByClassName("body")[0]
var filter_close = document.getElementsByClassName("filter-close")[0]
var panel = document.getElementsByClassName("side-panel-container")[0]

filter_btn.addEventListener("click", () => {
    filter_popup.style.display = "block"
    body_.style.filter = "blur(10px)"
    navi.style.filter = "blur(10px)"
    panel.style.filter = "blur(10px)"
    document.body.style.overflowY = "hidden"
})

filter_close.addEventListener("click", () => {
    filter_popup.style.display = "none"
    body_.style.filter = "none"
    navi.style.filter = "none"
    panel.style.filter = "none"
    document.body.style.overflowY = "scroll"
})
