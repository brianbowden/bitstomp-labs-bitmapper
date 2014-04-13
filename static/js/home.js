var fontRatio = 0.2; 
var maxSquareSize = 80;
var minSquareSize = 15;
var colCount = 0;
var rowCount = 0;
var pattern= [];
var subPattern = [];
var subPatternCache = [];
var nextPattern = true;
var timeDivisor = 1;
var masterTimeMultiplier = 1;
var delayMultiple = 0;
var screenHeight = 0;
var screenWidth = 0;
var patternCompleted = true;
var haltDrawing = false;
var isSpeedAdjusting = false;
var previousNode = '';

$(document).ready(function() {
    // Create basic grid based on resolution of screen

    screenWidth  = screen.width;
    screenHeight = screen.height;
    
    $(".headMenu").width(screenWidth+ + maxSquareSize * 2);
    $("#mainMenuBg").css({opacity: 0.8});
    $("#mainDialog").dialog({ autoOpen: false });
    $("button").button();
    if ($("#speedSlider").length > 0)
    {
        setSpeedSlider();
    }

    resetGrid();

    //importPattern("[  [ 8,5, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ] ,4 ] ,-2, [ -1, [ 1,2,3,4 ] ,2,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 1,2,4 ] ,-2, [ 2,4 ] ,-3, [ 2,3,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 9,5, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2 ] ,-2, [ 1,2,4 ] ,-3, [ 1,2 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 10,5, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,3 ] ,-4, [ 1,4 ]  ]  ]  ] , [ 11,5, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 12,5, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,3 ] ,-3, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 2,4 ] ,-3, [ 2,3,4 ]  ]  ]  ] , [ 8,6, [ -1, [ 1,2,-3, [ 3 ]  ] ,-2, [ 1,2 ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3 ]  ] ,-4, [ -1, [ 3,4 ] ,-2, [ 3 ] ,-3, [ 1,3,4 ] ,-4, [ 1,3,4 ]  ]  ]  ] , [ 9,6, [ -1, [ 1,2,-3, [ 4 ]  ] ,-2, [ 1,2 ] ,-3, [ -1, [ 2,4 ] ,-2, [ 3,4 ] ,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1 ] ,-3, [ 4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 10,6, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ]  ] , [ 11,6, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ]  ] , [ 12,6, [ -1, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ]  ] ,-2, [ 1 ]  ]  ]  ] ");
    //importPattern("[  [ 2,0, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ] , [ 3,0, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ] , [ 4,0, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ] , [ 5,0, [ -3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ] , [ 6,0, [ -3, [ 3,4 ] ,-4, [ 3 ]  ]  ] , [ 2,1, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ] ,4 ] ,-2, [ -1, [ 1,2,3,4 ] ,2,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 1,2,4 ] ,-2, [ 2,4 ] ,-3, [ 2,3,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 3,1, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2 ] ,-2, [ 1,2,4 ] ,-3, [ 1,2 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 4,1, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,3 ] ,-4, [ 1,4 ]  ]  ]  ] , [ 5,1, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 6,1, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,3 ] ,-3, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 2,4 ] ,-3, [ 2,3,4 ]  ]  ]  ] , [ 2,2, [ -1, [ 1,2,3,4 ] ,-2, [ 1,2,3,4 ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3 ]  ] ,-4, [ -1, [ 4 ] ,-2, [ 3 ] ,-3, [ 1,3,4 ] ,-4, [ 1,3,4 ]  ]  ]  ] , [ 3,2, [ -1, [ 1,2,3,4 ] ,-2, [ 1,2,3,4 ] ,-3, [ -1, [ 2,4 ] ,-2, [ 3,4 ] ,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1 ] ,-3, [ 4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 4,2, [ -1, [ 1,2,3,4 ] ,-2, [ 1,2,3,4 ]  ]  ] , [ 5,2, [ -1, [ 1,2,3,4 ] ,-2, [ 1,2,3,4 ]  ]  ] , [ 6,2, [ -1, [ -1, [ 1,3 ] ,2,-3, [ 1,3,4 ] ,4 ] ,-2, [ 1,3 ]  ]  ]  ]");
    //importPattern("[]");
    //importPattern("[  [ 5,0, [ -4, [ -4, [ 2,3,4 ]  ]  ]  ] , [ 6,0, [ -3, [ -3, [ 1,2 ] ,-4, [ 1,2 ]  ] ,-4, [ -3, [ 1,3,4 ]  ]  ]  ] , [ 5,1, [ -2, [ -2, [ 1,3 ] ,-4, [ 1,3 ]  ] ,-4, [ -2, [ 1,3 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 6,1, [ -2, [ -1, [ 2,4 ] ,-3, [ 2,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-3, [ 2,4 ]  ]  ]  ] , [ 5,2, [ -2, [ -2, [ 1,3 ] ,-4, [ 1,3 ]  ] ,-4, [ -2, [ 1,3 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 6,2, [ -1, [ 1,-2, [ 2,3,4 ] ,3,4 ] ,-2, [ -1, [ 2,4 ] ,-3, [ 2,4 ]  ] ,-3, [ 1,2,-3, [ 1,2,3 ] ,4 ] ,-4, [ -1, [ 2,4 ] ,-3, [ 2,4 ]  ]  ]  ] , [ 4,3, [ -4, [ -4, [ 4 ]  ]  ]  ] , [ 5,3, [ -1, [ -4, [ 4 ]  ] ,-2, [ -1, [ 4 ] ,-2, [ 1 ] ,-3, [ 1,4 ] ,4 ] ,-3, [ -1, [ 4 ] ,-2, [ 1,4 ] ,-3, [ 1,4 ] ,4 ] ,4 ]  ] , [ 6,3, [ 1,-2, [ -1, [ 2 ] ,-2, [ 3 ] ,3,-4, [ 2,3 ]  ] ,-3, [ -1, [ 2,3,4 ] ,-2, [ 1,2,4 ] ,3,4 ] ,4 ]  ] , [ 7,3, [ -1, [ -3, [ 3 ]  ] ,-3, [ -1, [ 2,3 ] ,-2, [ 3 ] ,3,-4, [ 2,3 ]  ] ,-4, [ -3, [ 3 ]  ]  ]  ] , [ 4,4, [ -1, [ -4, [ 4 ]  ] ,-2, [ -1, [ 4 ] ,-2, [ 1,4 ] ,-3, [ 1,4 ] ,4 ] ,-3, [ -1, [ 4 ] ,-2, [ 1,4 ] ,-3, [ 2 ] ,-4, [ 3,4 ]  ] ,-4, [ 1,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 5,4, [ 1,-2, [ -1, [ 1,3,4 ] ,2,-3, [ 1,2,4 ] ,4 ] ,-3, [ 1,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ 1,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 6,4, [ -1, [ -1, [ 2,3,4 ] ,-2, [ 1,2,4 ] ,-3, [ 1,3,4 ] ,-4, [ 1,2,3 ]  ] ,-2, [ -1, [ 1,2,3,4 ] ,2,3,-4, [ 2,3,4 ]  ] ,-3, [ 1,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ 1,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 7,4, [ 1,-2, [ -1, [ 2,3 ] ,-2, [ 3 ] ,3,-4, [ 2,3 ]  ] ,-3, [ -1, [ 2,3,4 ] ,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ] ,-4, [ 1,2,-3, [ 3,4 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 8,4, [ -1, [ -3, [ 3 ]  ] ,-3, [ -1, [ 2,3 ] ,-2, [ 3 ] ,-3, [ 3,4 ] ,-4, [ 1 ]  ]  ]  ]  ]");
    //importPattern("[  [ 12,2, [ -1, [ -2, [ 1,2,3 ] ,-3, [ 2,4 ] ,-4, [ 1,2 ]  ] ,-2, [ -1, [ 1,2,4 ] ,-3, [ 1,2 ] ,-4, [ 1,3 ]  ] ,-3, [ -1, [ 2,4 ] ,-3, [ 2,4 ]  ] ,-4, [ -2, [ 1,3 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 11,3, [ -4, [ -3, [ 4 ] ,-4, [ 2,3,4 ]  ]  ]  ] , [ 12,3, [ -1, [ -1, [ 2,4 ] ,-3, [ 2,4 ]  ] ,-2, [ -2, [ 1,3 ] ,-4, [ 1,3 ]  ] ,-3, [ -1, [ 2,4 ] ,3 ] ,-4, [ -2, [ 1,3 ] ,4 ]  ]  ] , [ 13,3, [ -3, [ -3, [ 1,3,4 ] ,-4, [ 3 ]  ]  ]  ] , [ 11,4, [ -1, [ -1, [ 4 ] ,2,3 ] ,-2, [ -1, [ 1,2 ]  ] ,-3, [ 1,-3, [ 2 ] ,-4, [ 3,4 ]  ]  ]  ] , [ 13,4, [ -1, [ -2, [ 1,2 ]  ] ,-2, [ 1,-2, [ 3 ] ,4 ] ,-4, [ 2,-3, [ 3,4 ] ,-4, [ 1 ]  ]  ]  ] , [ 11,5, [ -1, [ -2, [ 2 ]  ] ,-2, [ -1, [ 1,4 ] ,-2, [ 3,4 ]  ]  ]  ] , [ 12,5, [ -1, [ -1, [ 3,4 ] ,-2, [ 3,4 ]  ] ,-2, [ -1, [ 3,4 ] ,-2, [ 3,4 ]  ]  ]  ] , [ 13,5, [ -1, [ -1, [ 3,4 ] ,-2, [ 2,3 ]  ] ,-2, [ -1, [ 1 ]  ]  ]  ]  ]");
    //importPattern("[  [ 6,1, [ -4, [ -2, [ 4 ] ,-3, [ 4 ] ,4 ]  ]  ] , [ 7,1, [ 3,4 ]  ] , [ 8,1, [ 3,4 ]  ] , [ 9,1, [ -3, [ -1, [ 3 ] ,3,-4, [ 3 ]  ]  ]  ] , [ 6,2, [ 2,4 ]  ] , [ 7,2, [ -1, [ -1, [ 1,2,3 ]  ] ,-3, [ -3, [ 1,3,4 ]  ]  ]  ] , [ 8,2, [ -2, [ -2, [ 1,2,4 ]  ] ,-4, [ -4, [ 2,3,4 ]  ]  ]  ] , [ 9,2, [ 1,3 ]  ] , [ 6,3, [ -2, [ -1, [ 2 ] ,2,-4, [ 2 ]  ]  ]  ] , [ 7,3, [ 1,2 ]  ] , [ 8,3, [ 1,2 ]  ] , [ 9,3, [ -1, [ 1,-2, [ 1 ] ,-3, [ 1 ]  ]  ]  ]  ]");
    //buildNextPattern();
});

function resetGrid()
{
    // Reset auto-draw arrays
    haltDrawing = true;

    if (!patternCompleted)
    {
        setTimeout(function(){ resetGrid(); }, 5);
        return;
    }

    haltDrawing = false;

    colCount = Math.round(screenWidth / maxSquareSize) + 1;
    rowCount = Math.round(screenHeight / maxSquareSize) + 1;

    $("#mainFrame").html('');
    $("#mainFrame").width(screenWidth + maxSquareSize * 2);
    $("#mainFrame").height(screenHeight + maxSquareSize * 2);
    for (y=0; y < rowCount; y++)
    {
        for (x=0; x < colCount; x++)
        {
            var num = $("<div>").addClass("num").text("0");
            var sqr = $("<div>").addClass("sqr0").addClass("sqrWhite").append(num);

            sqr.addClass("sqr");
            $("#mainFrame").append(sqr);
        }

        $("#mainFrame").append("<div style='clear: left'></div>");
    }

    $(".sqr").height(maxSquareSize).width(maxSquareSize);
    var numMargin = Math.round(maxSquareSize / 2) - 10;
    $(".num").css("margin-top", numMargin)
    .css('-moz-user-select', 'none')
    .attr('unselectable', 'on');

    $(".sqr0")
    .mousedown(fadeToDivide)
    .mouseup(stopFade);
}

function drawLogo()
{
    if (!haltDrawing)
    {
        resetGrid();
    }

    if (!patternCompleted)
    {
        // Wait until previous pattern is completed
        setTimeout(function(){ drawLogo(); }, 10);
        return;
    }   

    importPattern("[  [ 8,5, [ -1, [ -1, [ 1,2,3 ] ,-2, [ 1,2 ] ,-3, [ 1,3 ] ,4 ] ,-2, [ -1, [ 1,2,3,4 ] ,2,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 1,2,4 ] ,-2, [ 2,4 ] ,-3, [ 2,3,4 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 9,5, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2 ] ,-2, [ 1,2,4 ] ,-3, [ 1,2 ] ,-4, [ 2,4 ]  ]  ]  ] , [ 10,5, [ -1, [ 1,2,-3, [ 1 ] ,-4, [ 1,2,4 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,-4, [ 1,2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,3 ] ,-4, [ 1,4 ]  ]  ]  ] , [ 11,5, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,2,-3, [ 1,2,3 ] ,-4, [ 1,2,4 ]  ] ,-3, [ -1, [ 1,3 ] ,-2, [ 1,2,3,4 ] ,-3, [ 1,3 ] ,4 ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1,3 ] ,-3, [ 2,4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 12,5, [ -1, [ 1,2,-3, [ 1,2,3,4 ] ,-4, [ 1,2 ]  ] ,-2, [ 1,3 ] ,-3, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ] ,-4, [ 1,2 ]  ] ,-4, [ -1, [ 2,4 ] ,-3, [ 2,3,4 ]  ]  ]  ] , [ 8,6, [ -1, [ 1,2,-3, [ 3 ]  ] ,-2, [ 1,2 ] ,-3, [ -1, [ 1,3 ] ,-3, [ 1,3,4 ] ,-4, [ 3 ]  ] ,-4, [ -1, [ 3,4 ] ,-2, [ 3 ] ,-3, [ 1,3,4 ] ,-4, [ 1,3,4 ]  ]  ]  ] , [ 9,6, [ -1, [ 1,2,-3, [ 4 ]  ] ,-2, [ 1,2 ] ,-3, [ -1, [ 2,4 ] ,-2, [ 3,4 ] ,-3, [ 2,4 ] ,-4, [ 2,3,4 ]  ] ,-4, [ -1, [ 2,4 ] ,-2, [ 1 ] ,-3, [ 4 ] ,-4, [ 1,3 ]  ]  ]  ] , [ 10,6, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ]  ] , [ 11,6, [ -1, [ 1,2 ] ,-2, [ 1,2 ]  ]  ] , [ 12,6, [ -1, [ -1, [ 1,3 ] ,2,-3, [ 1,3 ]  ] ,-2, [ 1 ]  ]  ]  ]");

    startAutoDraw();
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

function fadeToDivide()
{
    var isAutoDrawn = $(this).hasClass("autoGen");
    var currTimeDivisor = 1;
    if (isAutoDrawn)
    {
        currTimeDivisor = timeDivisor;
    }

    $(this).removeClass("noInterrupt");
    $(this).animate({ backgroundColor: "#FF9348", borderRightColor: "#FF9348", borderBottomColor: "#FF9348" }, adjustTime(600, currTimeDivisor), divideSquare);
}

function adjustTime(time, divisor) // Get Adjusted Time
{
    var currTimeDivisor = timeDivisor;

    if (divisor != null)
    {
        currTimeDivisor = divisor;
    }

    return Math.round(time * (1 / currTimeDivisor) * masterTimeMultiplier);
}

function stopFade()
{
    if (!$(this).hasClass("noInterrupt"))
    {
        $(this).stop();
        $(this)
        .css('backgroundColor', '')
        .css('borderRightColor', '')
        .css('borderBottomColor', '');
        toggleSquare($(this));
    }
}

function divideSquare()
{
    if ($(this).height() >= minSquareSize)
    {
        nextPattern = false;
    
        var subSqrSize = Math.round($(this).height() / 2);
        var oddDiff = $(this).height() % 2;
        var fontSize = Math.round(subSqrSize * fontRatio);
        var numMargin = Math.round(subSqrSize / 1.70) - fontSize;
        var currTimeDivisor = 1;
        var isAutoDrawn = $(this).hasClass("autoGen");

        if (subSqrSize < 15)
        {
            oddDiff = 1;
        }
        if (subSqrSize < 8)
        {
            oddDiff = 0;
        }

        if (isAutoDrawn)
        {
            // For auto-drawn patterns, use the dynamically-adjusted time divisor
            currTimeDivisor = timeDivisor;
        }

        var exBox = $("<div>")
        .height($(this).height() + 4)
        .width($(this).width() + 4)
        .addClass("sqrBox")
        .css('font-size', fontSize + 'px');
        $(this).html('');
        $(this).append(exBox);
        exBox.append($("<div>").addClass("sqr0").addClass("0").height(subSqrSize + oddDiff).width(subSqrSize + oddDiff));
        exBox.append($("<div>").addClass("sqr0").addClass("1").height(subSqrSize + oddDiff).width(subSqrSize - oddDiff));
        exBox.append($("<div>").addClass("sqr0").addClass("2").height(subSqrSize - oddDiff).width(subSqrSize + oddDiff).css('clear', 'left'));
        exBox.append($("<div>").addClass("sqr0").addClass("3").height(subSqrSize - oddDiff).width(subSqrSize - oddDiff));

        $(this).find(".sqr0")
        .append(
            $("<div>")
            .addClass("num")
            .css("margin-top", numMargin)
            .css('-moz-user-select', 'none')
            .attr('unselectable', 'on')
            .text("0")
        )
        .addClass("sqrWhite")
        .addClass("noInterrupt")
        .addClass("sqr");
        
        var delayMultiple = 0;
        for (var i=0; i <= 3; i++)
        {
            var delayTime = 100 * delayMultiple;
        
            if (isAutoDrawn && foundInCache(i + 1))
            {
                var childSqr = $(this).find("." + i)
                .mousedown(fadeToDivide)
                .mouseup(stopFade);
                toggleSquare(childSqr);
                delayMultiple--;
            }
            else
            {
                $(this).find("." + i)
                .delay(adjustTime(delayTime, currTimeDivisor))
                .switchClass("sqrWhite", "sqrWhiteTransition", adjustTime(200, currTimeDivisor))
                .delay(adjustTime(200,currTimeDivisor))
                .switchClass("sqrWhiteTransition", "sqrWhite", adjustTime(200, currTimeDivisor))
                .mousedown(fadeToDivide)
                .mouseup(stopFade);
            }

            delayMultiple++;
        }

        setTimeout(function(){ allowNextPattern(); }, adjustTime(600 + 100 * delayMultiple, currTimeDivisor));

        $(this)
        .unbind('mousedown')
        .unbind('mouseup')
        .css({ opacity: 1 })
        .removeClass("sqrBlack")
        .addClass("sqrEmpty")
        .height($(this).height() + 1)
        .width($(this).width() + 1);
    }
    else
    {

    }
}

function allowNextPattern()
{
    nextPattern = true;
}

function foundInCache(num)
{
    var index = subPatternCache.indexOf(num);

    if (index > -1)
    {
        return true;
    }

    return false;
}

function toggleSquare(element)
{
    var isAutoGen = element.hasClass('autoGen');

    if (element.hasClass('sqrWhite'))
    {
        if (isAutoGen)
        {
            element.switchClass("sqrWhite", "sqrBlack", 0).delay(adjustTime(200));
        }
        else
        {
            element.removeClass('sqrWhite').addClass('sqrBlack');
        }
        element.find(".num").text("1");
    }
    else
    {
        if (isAutoGen)
        {
            element.switchClass("sqrBlack", "sqrWhite", 0).delay(adjustTime(200));
        }
        else
        {
            element.removeClass('sqrBlack').addClass('sqrWhite');
        }
        
        element.find(".num").text("0");
    }
}

function viewPattern()
{
    output = [];

    for (y=0; y < rowCount; y++)
    {
        for (x=0; x < colCount; x++)
        {
            var bigSquare = [];
        
            var childNum = x + y * colCount;
            var node = $("#mainFrame").children(".sqr:eq(" + childNum + ")");
            if (node.hasClass("sqrBlack"))
            {
                bigSquare.push(x);
                bigSquare.push(y);        
            }
            else if (node.hasClass("sqrEmpty"))
            {
                var subPattern = getSubPattern(node);
                if (subPattern.length > 0)
                {
                    bigSquare.push(x);
                    bigSquare.push(y);
                    bigSquare.push(subPattern);     
                }
            }

            if (bigSquare.length > 0)
            {
                output.push(bigSquare);
            }
        }
    }

    $("#mainDialog").text(nestedOut(output)).dialog('option', 'title', 'View Coordinates');
    $("#mainDialog").dialog('open');
}

function getSubPattern(node)
{
    var childs = node.children(":eq(0)").children(".sqr");
    var output = [];

    if (childs.size() == 0)
        return output;

    for (var i=0; i < 4; i++)
    {
        if (childs.eq(i).hasClass("sqrBlack"))
        {
            output.push(i + 1);
        }
        else if (childs.eq(i).hasClass("sqrEmpty"))
        {
            var subPattern = getSubPattern(childs.eq(i));
            if (subPattern.length > 0)
            {
                output.push((i + 1) * -1);
                output.push(subPattern);
            }
        }
    }

    return output;
}

function nestedOut(outItem)
{
    var printedOut = '';

    if ($.isArray(outItem))
    {
        printedOut += " [ ";
        for (var i=0; i < outItem.length; i++)
        {
            printedOut += nestedOut(outItem[i]);

            if (i < outItem.length - 1)
            {
                printedOut += ",";
            }
        }
        printedOut += " ] ";
    }
    else
    {
        printedOut += outItem;
    }

    return printedOut;
}

function importPattern(patternInput)
{
    pattern = [];
    pattern = eval(patternInput);
}

function startAutoDraw()
{
    patternCompleted = false;
    buildNextPattern();
}

function buildNextPattern()
{
    timeDivisor = 1;

    if (!nextPattern || isSpeedAdjusting || !previousPatternCompleted())
    {
        setTimeout(function(){ buildNextPattern(); }, 10); // Wait until current pattern is finished
        return;
    }

    if (haltDrawing)
    {
        pattern = [];
    }

    if (pattern.length == 0)
    {
        patternCompleted = true;
        $("#mainFrame").find(".autoGen").removeClass("autoGen");
        return;
    }

    var chunk = pattern[0];
    var childNum = chunk[0] + chunk[1] * colCount;
    var node = $("#mainFrame").children(".sqr:eq(" + childNum + ")").eq(0);
    pattern.shift();
    subPatternCache = [];

    // Load the subpattern array if needed
    if (chunk.length > 2)
    {
        subPattern = [];
        setSubPattern(chunk[2]);
        previousNode = node;
        subPatternCache = subPattern[0].slice(0);
        stripNegsFromCache();
        node.addClass('autoGen');
        node.trigger('mousedown');
        timeDivisor++;
        setTimeout(function(){ buildNextSubPattern(node, 0); }, adjustTime(600));
        return;
    }
    
    node.trigger('mouseup');
    setTimeout('buildNextPattern()', adjustTime(600));
}

function buildNextSubPattern(parent, level)
{
    if (!nextPattern || isSpeedAdjusting || !previousPatternCompleted())
    {
        setTimeout(function(){ buildNextSubPattern(parent, level); }, 10);
        return;
    }

    if (haltDrawing)
    {
        buildNextPattern();
        return;
    }
    
    if (level == 0 && subPattern[0].length == 0)
    {
        subPattern = [];
        subPatternCache = [];
        previousNode = '';
        buildNextPattern();
        return;
    }

    if (subPattern[level].length == 0)
    {
        subPatternCache = [];
        previousNode = '';
        timeDivisor--;
        buildNextSubPattern(parent.parent().parent(), getPreviousUnemptySubPattern(level));
        return;
    }
    

    var chunk = subPattern[level][0];
    var node = '';


    if (chunk > -1)
    {
        //node = parent.children().eq(0).children().eq(chunk - 1);
        //node.trigger('mouseup');
        subPattern[level].shift();
        setTimeout(function(){ buildNextSubPattern(parent, level); }, adjustTime(600));
        return;
    }
    else
    {
        var nextUnemptyLevel = getNextUnemptySubPattern(level);
        node = parent.children().eq(0).children().eq((chunk * -1) - 1);

        if (node.length == 0)
        {
            // Add some resilience, since we don't have a ton of control over the client's timing
            setTimeout(function(){ buildNextSubPattern(parent, level); }, 10);
            return;
        }

        if (!nextPattern)
        {
            setTimeout(function(){ buildNextSubPattern(parent, level); }, 10);
            return;
        }
        
        previousNode = node;
        subPatternCache = subPattern[nextUnemptyLevel].slice(0);
        stripNegsFromCache();

        node.addClass('autoGen');
        node.trigger('mousedown');
        timeDivisor++;
        setTimeout(function(){ buildNextSubPattern(node, nextUnemptyLevel); }, adjustTime(1200 + 100 * delayMultiple));
        return;
    }
}

function previousPatternCompleted()
{
    if (previousNode != '')
    {
        for (var i=0; i < subPatternCache.length; i++)
        {
            var square = subPatternCache[i] - 1;
        
            if (subPatternCache[i] < 0)
            {
                continue;
            }
            else if (!previousNode.children().eq(0).children().eq(square).hasClass("sqrBlack"))
            {
                return false;
            }
        }
    }
    
    return true;
}

function stripNegsFromCache()
{
    // Strip negative values from the cache
    var index = 0;
    while (index < subPatternCache.length)
    {
        if (subPatternCache[index] < 0)
        {
            subPatternCache.splice(index, 1);
            continue;
        }
        index++;
    }
}

function setSubPattern(sp)
{
    var arrayCache = [];
    var currArray = [];

    for (var i=0; i < sp.length; i++)
    {
        if ($.isArray(sp[i]))
        {
            arrayCache.push(sp[i]);
        }
        else
        {
            currArray.push(sp[i]);
        }
    }

    subPattern.push(currArray);
    for (var i=0; i < arrayCache.length; i++)
    {
        setSubPattern(arrayCache[i]);
    }
}

function getPreviousUnemptySubPattern(currentLevel)
{
    for (var i=currentLevel - 1; i >= 0; i--)
    {
        if (subPattern[i].length > 0)
        {
            subPattern[i].shift();
            return i;
        }
    }
}

function getNextUnemptySubPattern(currentLevel)
{
    for (var i=currentLevel + 1; i < subPattern.length; i++)
    {
        if (subPattern[i].length > 0)
        {
            return i;
        }
    }
}
