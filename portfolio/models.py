from django.db import models


class About(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    profile_picture = models.ImageField(upload_to='about/', null=True, blank=True)
    technologies = models.TextField(help_text="List technologies separated by commas")

    def __str__(self):
        return self.title


class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    company_logo = models.ImageField(upload_to='company_logos/', null=True, blank=True)  # Add this field
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} at {self.company}"


class Responsibility(models.Model):
    experience = models.ForeignKey(Experience, related_name='responsibilities', on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.description


class Certificate(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='certificates/')

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title
