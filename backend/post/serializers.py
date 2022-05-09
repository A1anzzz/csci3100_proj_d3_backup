from rest_framework import serializers
from post.models import Item, Comment,PostImage

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields =('id','title','author','itemType',
                'price','describe','location','postDate',
                'tradeType', 'complete','image')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields =('match','maker','date','content','valid')
        
class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields =('title','content','file')