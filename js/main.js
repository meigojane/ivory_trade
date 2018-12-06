const r = new Router(
    {
      about: new Layout(new Page('menu.html'), new Page('about.html')),
      home: new Layout(new Page('menu.html'), new Page('home.html')),
      org: new Layout(new Page('menu.html'), new Page('org.html'), new Page('footer.html')),
      info: new Layout(new Page('menu.html'), new Page('info.html'), new Page('footer.html')),
      action: new Layout(new Page('menu.html'), new Page('action.html'), new Page('footer.html')),
      article: new Layout(new Page('menu.html'), new Page('article.html'), new Page('footer.html')),
      '#default': new Layout(new Page('menu.html'), new Page('home.html')),
    },
    document.querySelector('main')
  );