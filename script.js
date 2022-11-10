<script>
var i = 0;
function progressFunction() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        var width = 1;
        var id = setInterval(barFunction, 30);
        function barFunction() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                progressFunction();
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

progressFunction();
</script>
