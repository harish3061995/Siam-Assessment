$(document).ready(function(){
  // tab
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });
// color picker
    function plugin(picker, selector, defaultColor, type){
      $(picker).spectrum({
        color: defaultColor, 
        showInput: true,
        hideAfterPaletteSelect:true,
        showPalette:true,
        chooseText: "Set color",
        palette: [
            ['black', 'white', 'blanchedalmond', 'rgb(255, 128, 0);', 'hsv 100 70 50'],
            ['red', 'yellow', 'green', 'blue', 'violet']
        ],
        move: function(color) {
          hexColor = color.toHexString();
          type == "color" ? $(selector).css("color", hexColor) : $(selector).css("background-color", hexColor);
        }
    });
    }
    plugin("#Background_color", ".Background_color", "#e80014", "background-color");
    plugin("#Menu_text_color", ".Menu_text_color", "#ffffff", "color");
    plugin("#Your_Name", ".Your_Name", "#ffffff", "color");
    plugin("#Designation", ".Designation", "#ffffff", "color");
    plugin("#Contact_button_color", ".Contact_button_color", "#ffffff", "background-color");
    plugin("#Contact_button_text_color", ".Contact_button_text_color", "#e80014", "color");
    plugin("#Get_In_Touch_button_color", ".Get_In_Touch_button_color", "#e61904", "background-color");
    plugin("#Get_In_Touch_text_color", ".Get_In_Touch_text_color", "#fff", "color");
    plugin("#Website_button_color", ".Website_button_color", "#e61904", "background-color");
    plugin("#Website_button_text_color", ".Website_button_text_color", "#fff", "color");
    plugin("#Phone_color", ".Phone_color", "#000", "color");
    plugin("#Sidebar_color", ".Sidebar_color", "#f1c4c4", "background-color");
    plugin("#Profile_Background_color", ".Profile_Background_color", "#f1c4c4", "background-color");
    plugin("#Profile_text_color", ".Profile_text_color", "#000", "color");
    plugin("#Proflie_button_color", ".Proflie_button_color", "#e80014", "background-color");
    plugin("#Profile_button_text_color", ".Profile_button_text_color", "#fff", "color");
    plugin("#Hypertink_color", ".Hypertink_color", "#caaf6e", "color");
})