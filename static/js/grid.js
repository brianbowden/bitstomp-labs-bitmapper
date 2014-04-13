var isMineOnly = false;

$(document).ready(function() {
    
    setSpeedSlider();
    $("#saveMenuButton").button("option", "icons", {secondary:'ui-icon-triangle-1-s'})
    .click(showSaveMenu);
    $("#saveButton").click(saveName);
    $("#saveName").keypress(saveOnEnter);
    
    $("#buildMenuButton").button("option", "icons", {secondary:'ui-icon-triangle-1-s'})
    .click(showBuildMenu);
    $("#mineOnlyChk").change(toggleMineOnlyFilter);
    
    $("#resetButton").click(resetAll);
    
    $("#optionsButton").button("option", "icons", {secondary:'ui-icon-triangle-1-s'})
    .click(showOptionsMenu);
    
    $("#helpTabs").accordion();
    $("#helpDialog").dialog({autoOpen: false, resizable: false, height: 550, width: 550, title: "About Project BitMapper"});
    
    loadRenderPage(1);
    
    // Fixes a strange jQuery error where buttons mysteriously become disabled on refresh
    $("#menuOptions").find("button").button("option", "disabled", false);
});

function openHelpDialog()
{
    $("#helpDialog").dialog("open");
}

function toggleMineOnlyFilter()
{
    isMineOnly = !isMineOnly;
    loadRenderPage(1);
}

function loadRenderPage(pageNum)
{
    mineOnly = 'False';
    if (isMineOnly)
    {
        mineOnly = 'True';
    }

    var renderTable = 
        $.ajax({
        type: "POST",
        url: "/labs/grid/getpatterntable/",
        data: {'requestedPage': pageNum, 'mineOnly': mineOnly},
        async: false,
        }).responseText;
        
    if (renderTable == "0")
    {
        renderTable = "There has been an error";
    }
    $("#renderContentDynamic").html(renderTable);
    
    $("#rightArrow")
    .button({ text: false, icons: {primary:'ui-icon-circle-arrow-e'} })
    .click(loadNextRenderPage);
    $("#leftArrow")
    .button({ text: false, icons: {primary:'ui-icon-circle-arrow-w'} })
    .click(loadPrevRenderPage);
    $(".renderRow")
    .mouseover(function() { $(this).addClass('renderRow_hover'); } ) 
    .mouseout(function() { $(this).removeClass('renderRow_hover'); } )
    .click(loadPattern)
    .css('cursor', 'pointer');
    
    if ($("#currPage").text() == $("#totalPageCount").text())
    {
        $("#rightArrow").button("option", "disabled", true);
    }
    if ($("#currPage").text() == "1")
    {
        $("#leftArrow").button("option", "disabled", true);
    }
}

function loadPrevRenderPage()
{
    var prevPage = $("#currPage").text();
    prevPage--;
    if (prevPage > 0)
    {
        loadRenderPage(prevPage);
    }
}

function loadNextRenderPage()
{
    var nextPage = $("#currPage").text();
    nextPage++;
    loadRenderPage(nextPage);
}

function showMenuItem(menuID, btn)
{
    $(btn).blur();

    if ($(btn).text() == menuSelected)
    {
        $("#" + menuID).hide();
        menuSelected = '';
        return false;
    }
    else
    {
        $(".dropdownBox").hide();
        $("#" + menuID).show();
        menuSelected = $(btn).text();
        return true;
    }
}

function loadPattern()
{
    var patternID = $(this).attr("id");
    var patternString = 
        $.ajax({
        type: "POST",
        url: "/labs/grid/getpattern/",
        data: {'patternID': patternID},
        async: false,
        }).responseText;
    
    if (patternString == "0" && patternString.length < 3)
    {
        showErrorDialog("Unable to load design!", "Server Error");
        return;
    }
    
    hideMenus();
    renderPattern(patternString);
}

function savePattern(patternString)
{
    $("#saveButton").button( "option", "disabled", true);
    
    var code = 
        $.ajax({
        type: "POST",
        url: "/labs/grid/savepattern/",
        data: {'name': $("#saveName").val(), 'pattern': patternString, 'squareCount': squareCount },
        async: false,
        }).responseText;
        
    if (code != "1")
    {
        showErrorDialog("Unable to save!", "Server Error");
    }
    else
    {
        $("#saveButton").button("option", "label", "Saved!");
        $("#saveName").val("");
    }
    
    // Reload render table so you can see that it saved
    loadRenderPage(1);
    
    $("#saveButton").button( "option", "disabled", false);
    setTimeout(function(){ 
            $("#saveButton").button("option", "label", "Okay");
            if (menuSelected == $("#saveMenuButton").text())
            {
                $("#saveMenu").hide();
                menuSelected = '';
            }
        }, 2000);
}

function saveName()
{
    var patternString = getPattern();

    if (validateName() && validatePattern(patternString))
    {
        savePattern(patternString);
    }
}

function validatePattern(patternString)
{
    var patternArray = [];
    patternArray = eval(patternString);
    
    if (patternArray.length < 1)
    {
        showErrorDialog("Nothing to save. Only black squares are considered part of the design.", "Nothing to Save");
        return false;
    }
    else
    {
        return true;
    }
}

function validateName()
{
    if ($.trim($("#saveName").val()).length == 0)
    {
        $("#saveName").css("background-color", "#FF9348");
        return false;
    }
    else
    {
        $("#saveName").css("background-color", "lightgray");
        return true;
    }
}

function saveOnEnter(e)
{
    if (e.keyCode != 13)
    {
        return;
    }

    $("#saveButton").click();
}

function showSaveMenu()
{
    showMenuItem("saveMenu", this);
    $("#saveName").focus();
}

function showBuildMenu()
{
    showMenuItem("renderMenu", this);
}

function showOptionsMenu()
{
    showMenuItem("optionsMenu", this);
}

function resetAll()
{
    $(".dropdownBox").hide();
    menuSelected = '';
    resetGrid();
}

function showErrorDialog(error, errorTitle)
{
    $("#mainDialog").text(error).dialog('option', 'title', errorTitle);
    $("#mainDialog").dialog('open');
}

function setSpeedSlider()
{
    $("#speedSlider").slider({
		value:10,
		min: 1,
		max: 20,
		step: 1,
		slide: function( event, ui ) {
		    isSpeedAdjusting = true;
			$("#speedAmount").html( ui.value );
			masterTimeMultiplier = (21 - ui.value) / 10;
			
			if (ui.value >= 8 && ui.value <= 12)
			{
                $("#speedWarning").html("Stable");
			}
			else if (ui.value < 8 && ui.value >= 4)
			{
                $("#speedWarning").html("Very Stable");
			}
			else if (ui.value < 4 && ui.value >= 2)
			{
                $('#speedWarning').html("Extremely Stable");
			}
			else if (ui.value < 2)
			{
                $('#speedWarning').html("Rock of Gibraltar");
			}
			else if (ui.value > 12 && ui.value <= 16)
			{
                $('#speedWarning').html("Slightly Unstable");
			}
			else if (ui.value > 16 && ui.value <= 18)
			{
                $('#speedWarning').html("Extremely Unstable");
			}
			else if (ui.value > 18)
			{
                $('#speedWarning').html("Guaranteed Disaster!");
			}
		},
	    stop: function( event, ui ) { isSpeedAdjusting = false; }
	});

}
