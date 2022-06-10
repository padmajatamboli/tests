    function myfunction() {
        var name = document.getElementById("name").value;

        if (!name) {
            alert("please enter name");
        } else {
            if (name[0] == 'j' || name[0] == 'J') {
                alert("Hello " + "J" + name);
            } else {
                alert("Hello " + name);
            }
        }

    }