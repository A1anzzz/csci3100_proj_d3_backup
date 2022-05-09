from django.contrib import admin
from post.models import Item, Comment, PostImage
# Register your models here.

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_dispaly = ('postDate','title','author','tradeType')

    list_filter = ('tradeType','complete')

    fieldsets = (
        (None, {
            'fields': ('id','title','author','itemType','price','describe','location','postDate','image')
        }),
        ('state', {
            'fields': ('tradeType', 'complete')
        }),
    )

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('date','match', 'maker','valid')

@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    list_display = ('title','content','file')
