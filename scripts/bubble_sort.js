var red_color ="#EF4444";
var blue_color="#3B82F6";
var yellow_color ="#F59E0B";
var purple_color="#8B5CF6";

bubble_button.addEventListener("click", Bubble);



function Bubble() {
    c_delay = 0;
    disable_buttons();
    bubble_button.style = "background-color:#4B5563; color:white";

    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array_size - 1; i++) {
            div_update(divs[i], div_sizes[i], yellow_color); //Color update

            if (div_sizes[i] > div_sizes[i + 1]) {
                div_update(divs[i], div_sizes[i], red_color); //Color update
                div_update(divs[i + 1], div_sizes[i + 1], red_color); //Color update

                // Swap elements
                var temp = div_sizes[i];
                div_sizes[i] = div_sizes[i + 1];
                div_sizes[i + 1] = temp;

                div_update(divs[i], div_sizes[i], red_color); //Height update
                div_update(divs[i + 1], div_sizes[i + 1], red_color); //Height update

                swapped = true;
            }
            div_update(divs[i], div_sizes[i], blue_color); //Color update
        }
        div_update(divs[i], div_sizes[i], purple_color); //Color update
    } while (swapped);

    div_update(divs[0], div_sizes[0], purple_color); //Color update

    enable_buttons();
}
