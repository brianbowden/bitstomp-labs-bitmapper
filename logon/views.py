from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.conf import settings
from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django import forms

def getError(code):
    if code == '1':
        return "Form data is invalid"
    elif code == '2':
        return "Incorrect username or password"
    else:
        return ""

def index(request, **kwargs):
    errorCode = 0
    
    if request.user.is_authenticated():
        return HttpResponseRedirect('/labs/grid/');
    
    if 'err_code' in kwargs:
        errorCode = kwargs['err_code']
        
    templatePath = settings.TEMPLATE_DIRS[0] + '/login.html'
    context = { \
        'mediaPath': settings.MEDIA_URL, \
        'serverError': getError(errorCode), \
    }
    #context.update(csrf(request))
    return render_to_response(templatePath, context)

# Login

class LoginForm(forms.Form):
    username = forms.SlugField(max_length=30, required=True)
    password = forms.CharField(max_length=50, required=True)

@csrf_exempt
def submitLogin(request):
    form = LoginForm(request.POST)
    if form.is_valid():
        user = authenticate(username=form.cleaned_data['username'],password=form.cleaned_data['password'])
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/labs/grid/')
        else:
            return HttpResponseRedirect('/labs/logon/err/2')
    else:
        return HttpResponseRedirect('/labs/logon/err/1')
        

# Logout

@csrf_exempt
def indexLogout(request):
    logout(request)
    return index(request)

# Username Validation
    
class UsernameForm(forms.Form):
    username = forms.SlugField(max_length=30, required=True)
    
@csrf_exempt
def isUsernameValid(request):
    responseCode = 0 # invalid and not unique

    if request.method == 'POST':
        form = UsernameForm(request.POST)
        if form.is_valid():
            userMatches = User.objects.filter(username__iexact=form.cleaned_data['username'])
            if len(userMatches) > 0:
                responseCode = 1 # valid but not unique
            else:
                responseCode = 2 # valid and unique
        else:
            responseCode = 0
            
    return HttpResponse(responseCode)
    
# Sign Up processing

class SignUpForm(forms.Form):
    username = forms.SlugField(max_length=30, required=True)
    password = forms.CharField(max_length=50, required=True)
    confirm  = forms.CharField(max_length=50, required=True)

@csrf_exempt
def submitSignUp(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            userMatches = User.objects.filter(username__iexact=form.cleaned_data['username'])
            if len(userMatches) == 0:
                newUser = User.objects.create_user(form.cleaned_data['username'], '', form.cleaned_data['password'])
                user = authenticate(username=form.cleaned_data['username'],password=form.cleaned_data['password'])
                if user is not None:
                    login(request, user)
            else:
                return HttpResponseRedirect('/labs/logon/err/1')
            
            return HttpResponseRedirect('/labs/grid/');
        else:
            return HttpResponseRedirect('/labs/logon/err/1')
    
                
                
            
