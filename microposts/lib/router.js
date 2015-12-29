Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  //posts route
  this.route('posts', {
      path: '/',
      template: 'posts'
  });

  //about Router
  this.route('about');

  //profile Router
  this.route('profile');
});
