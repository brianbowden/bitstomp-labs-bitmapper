var isSignUp = false;

$(document).ready(function() {
    $("input").keypress(function(e){ submitOnEnter(e); });
    $("#loginButton").click(submitForm);
    
    if ($("#serverError").text().length > 0)
    {
        showError($("#serverError").text());
    }
});

function submitForm()
{
    if (!validateInput())
    {
        return false;
    }
    else if (!isSignUp)
    {
        $('form:first').attr('action', '/labs/logon/login/');
        $('form:first').submit();
    }
    else
    {
        $('form:first').attr('action', '/labs/logon/adduser/');
        $('form:first').submit();
    }
    
    $("#loginButton").unbind('click');
}

function validateUsername()
{
    var code = 
        $.ajax({
        type: "POST",
        url: "/labs/logon/checkuser/",
        data: { 'username': $("#username_in").val() },
        async: false,
        }).responseText;
    
    if (code != 2 && code != 1 && code != 0)
    {
        code = 0;
    }
    
    return code;
}

function showError(error)
{
    $("#errorDialogText").text(error);
    $("#errorDialog").show();
}

function hideError()
{
    $("#errorDialog").hide();
}

function validateInput()
{
    var username = $.trim($("#username_in").val());
    var password = $.trim($("#password_in").val());

    if (username.length == 0)
    {
        showError("- Username is missing");
        return false;
    }
    else if (isSignUp)
    {
        switch (validateUsername())
        {
            case '0':
                showError("- Username is invalid");
                return false;
                break;
            case '1':
                showError("- Username is already taken");
                return false;
                break;
        }
    }
    if (password.length == 0)
    {
        showError("- Password is missing");
        return false;
    }
    if (isSignUp && !validatePasswords())
    {
        showError("- Passwords do not match");
        return false;
    }
    
    hideError();
    
    return true;
}

function validatePasswords()
{
    if ($("#password_in").val() != $("#confirm_in").val())
    {
        return false;
    }
    
    return true;
}

function submitOnEnter(e)
{
    if (e.keyCode != 13)
    {
        return;
    }

    $("#loginButton").click();
}

function toggleSignUp()
{
    if (isSignUp)
    {
        $(".loginOnly").show();
        $(".signupOnly").hide();
        $("#newUserLink").text("I'm new here");
        $("#loginButton").button("option", "label", "Log In");
        isSignUp = false;
    }
    else
    {
        $(".loginOnly").hide();
        $(".signupOnly").show();
        $("#newUserLink").text("Wait, I have an account");
        $("#loginButton").button("option", "label", "Sign Up");
        isSignUp = true;
    }
    $("#username_in").focus();
}
