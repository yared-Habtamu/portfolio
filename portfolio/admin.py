from django.contrib import admin
from .models import Experience, Responsibility, Certificate, Project, About


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('title',)


class ResponsibilityInline(admin.TabularInline):
    model = Responsibility
    extra = 1


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    inlines = [ResponsibilityInline]


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('title',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
