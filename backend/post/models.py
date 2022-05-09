from django.db import models
from django.urls import reverse 
import uuid 
# Create your models here.

class Item(models.Model):
    """
    Model representing a item.
    """
    # basic information
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text="Unique ID")
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    describe = models.TextField(max_length=1000, help_text="Enter a brief description of the item")
    itemType = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    postDate = models.DateField(null=True, blank=True)
    image = models.CharField(max_length=200,null=True, blank=True)
    # status
    complete = models.BooleanField(default=False)

    TRADE_TYPE = (  
    # for customer
    # for poster, the condition is on the contrary
        ('s', 'want to sell'),
        ('b', 'want to buy'),
    )
    tradeType = models.CharField(max_length=1, choices=TRADE_TYPE, blank=True, default='s', help_text='Trade type')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('item-detail', args=[str(self.id)])

class Comment(models.Model):
    match = models.CharField(max_length=200)
    maker = models.CharField(max_length=100)
    date = models.DateField()
    content = models.TextField(max_length=1000, help_text="make a comment")
    valid = models.BooleanField(default=False)

class PostImage(models.Model):
    title = models.CharField(max_length=100,null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    file = models.ImageField(upload_to='PostImage/')
