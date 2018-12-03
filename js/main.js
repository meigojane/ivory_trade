const r = new Router(
    {
      about: new Layout(new Page('menu.html'), new Page('about.html')),
      home: new Layout(new Page('menu.html'), new Page('home.html')),
      org: new Layout(new Page('menu.html'), new Page('org.html')),
      info: new Layout(new Page('menu.html'), new Page('info.html')),
      action: new Layout(new Page('menu.html'), new Page('action.html')),
      article: new Layout(new Page('menu.html'), new Page('article.html')),
      '#default': new Layout(new Page('menu.html'), new Page('home.html')),
    },
    document.querySelector('main')
  );