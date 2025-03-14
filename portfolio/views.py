from django.shortcuts import render
from .models import Experience, Certificate, Project,About


def home(request):
    about = About.objects.all()
    experiences = Experience.objects.all()
    certificates = Certificate.objects.all()
    projects = Project.objects.all()

    return render(request, 'portfolio/home.html', {
        'about': about,
        'experiences': experiences,
        'certificates': certificates,
        'projects': projects,
    })
