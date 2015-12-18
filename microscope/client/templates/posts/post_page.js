Template.postPage.helpers({
  comments: function() {
    return Commetns.find({postId: this._id});
  }
});
