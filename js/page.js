class Page {
    constructor(url) {
      this.url = 'views/' + url;
    }
  
    load() {
      return $.get(this.url).then(res => this.html = res);
    }  
  
    show(el) {
      el.innerHTML = this.html;
    }
  }