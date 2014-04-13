from django.core.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.conf import settings
from django.contrib.auth.models import User
from django.core.paginator import Paginator
from django import forms
from grid.models import Pattern

def index(request, **kwargs):

    # Check for authentication
    if not request.user.is_authenticated():
        return HttpResponseRedirect('/labs/logon/');
    else:   
        templatePath = settings.TEMPLATE_DIRS[0] + '/grid.html'
        context = { \
            'mediaPath': settings.MEDIA_URL, \
            'username': request.user.username,
        }
        context.update(csrf(request))
        return render_to_response(templatePath, context)
        
# Get Pattern

class GetPatternForm(forms.Form):
    patternID = forms.IntegerField(required=True)

@csrf_exempt
def getPattern(request):
    if not request.user.is_authenticated():
        return HttpResponse("0") #failed
        
    form = GetPatternForm(request.POST)
    if not form.is_valid():
        return HttpResponse("0") #failed
        
    patternID = form.cleaned_data['patternID']
    pattern = Pattern.objects.get(id=patternID)
    
    return HttpResponse(pattern.code)
        
# Get Pattern Table

class GetPatternTableForm(forms.Form):
    requestedPage = forms.IntegerField(required=True)
    mineOnly = forms.BooleanField(required=False)
    
@csrf_exempt
def getPatternTable(request, **kwargs):
    if not request.user.is_authenticated():
        return HttpResponse("0") #failed
        
    form = GetPatternTableForm(request.POST)
    if not form.is_valid():
        return HttpResponse("0") #failed
    
    patternList = []
    patternListAll = []
    requestedPage = form.cleaned_data['requestedPage']
    mineOnly = form.cleaned_data['mineOnly']

    if mineOnly:
        patternListAll = Pattern.objects.filter(owner=request.user).order_by('-size')
    else:
        patternListAll = Pattern.objects.all().order_by('-size')
        
    pager = Paginator(patternListAll, 10)
    
    if pager.count < requestedPage:
        requestedPage = pager.count # Just return the last page instead of an error
    if requestedPage < 1:
        requestedPage = 1 # Just return the first page instead of an error
    
    if pager.num_pages > 0:
        nextPage = pager.page(requestedPage)
        patternList = nextPage.object_list
    
    templatePath = settings.TEMPLATE_DIRS[0] + '/renderRow.html'
    context = { \
        'totalPages': pager.num_pages, \
        'currentPage': requestedPage, \
        'patternList': patternList,
    }
    
    return render_to_response(templatePath, context)
        
# Save Pattern
        
class SavePatternForm(forms.Form):
    name = forms.CharField(max_length=30, required=True)
    pattern = forms.CharField(required=True)
    squareCount = forms.IntegerField(required=True)

@csrf_exempt       
def savePattern(request, **kwargs):

    if not request.user.is_authenticated():
        return HttpResponse("0") #failed
        
    form = SavePatternForm(request.POST)
    if not form.is_valid():
        return HttpResponse("0") #failed
    
    patternName = form.cleaned_data['name']
    patternString = form.cleaned_data['pattern']
    squareCount = form.cleaned_data['squareCount']
        
    pattern = Pattern(name=patternName, code=patternString, size=squareCount, owner=request.user)
    try:
        pattern.save()
    except:
        return HttpResponse("0") #failed
        
    return HttpResponse("1")
    
