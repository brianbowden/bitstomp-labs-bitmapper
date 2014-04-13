from django.conf.urls.defaults import *
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', 'logon.views.index'),
    (r'^labs/$', 'logon.views.index'),
    (r'^labs/grid/$', 'grid.views.index'),
    (r'^labs/grid/savepattern/$', 'grid.views.savePattern'),
    (r'^labs/grid/getpattern/$', 'grid.views.getPattern'),
    (r'^labs/grid/getpatterntable/$', 'grid.views.getPatternTable'),
    (r'^labs/logon/$', 'logon.views.index'),
    (r'^labs/logon/logout/$', 'logon.views.indexLogout'),
    (r'^labs/logon/err/(?P<err_code>\d+)/$', 'logon.views.index'),
    (r'^labs/logon/checkuser/$', 'logon.views.isUsernameValid'),
    (r'^labs/logon/adduser/$', 'logon.views.submitSignUp'),
    (r'^labs/logon/login/$', 'logon.views.submitLogin'),
    (r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    urlpatterns += patterns('',
            (r'^labs/static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
        )
