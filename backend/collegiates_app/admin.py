from django.contrib import admin

# Register your models here.
from .models import BlogPost, College, Nandu, RegisteredEvents, Team, UserAccount

admin.site.register(BlogPost)
admin.site.register(College)
admin.site.register(Nandu)
admin.site.register(RegisteredEvents)
admin.site.register(Team)
admin.site.register(UserAccount)