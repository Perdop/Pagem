var searchInput = document.querySelector("#searchInput");
var duckduckgo = "https://duckduckgo.com/";

function search(){
    if(searchInput.value != ""){
        let url = duckduckgo + searchInput.value;
        window.open(url, '_self');
    }
}
