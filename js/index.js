/*SELECT BUTTON*/
    document.getElementById("legend_select").addEventListener("change", function () {
        let value = this.value;

        let temp_legend = document.getElementById("temp_legend");
        let moist_legend = document.getElementById("moist_legend");

        if (value === "temp") {
            temp_legend.style.display = "flex";
            moist_legend.style.display = "none";
        } else if (value === "moist") {
            temp_legend.style.display = "none";
            moist_legend.style.display = "flex";
        } else if (value === "both") {
            temp_legend.style.display = "flex";
            moist_legend.style.display = "flex";
        }
    });



