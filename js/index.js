/*SELECT BUTTON*/
    document.getElementById("legend_select").addEventListener("change", function () {
        let value = this.value;

        let temp_legend = document.getElementById("temp_legend");
        let moist_legend = document.getElementById("moist_legend");
        let text_temp = document.getElementById("text_temp");
        let text_moist = document.getElementById("text_moist");

        if (value === "temp") {
            temp_legend.style.display = "flex";
            moist_legend.style.display = "none";
            text_temp.style.display = "none";
            text_moist.style.display = "none";
        } else if (value === "moist") {
            temp_legend.style.display = "none";
            moist_legend.style.display = "flex";
            text_temp.style.display = "none";
            text_moist.style.display = "none";
        } else if (value === "both") {
            temp_legend.style.display = "flex";
            moist_legend.style.display = "flex";
            text_temp.style.display = "block";
            text_moist.style.display = "block";
        }
    });



