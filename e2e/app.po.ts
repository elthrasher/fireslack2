export class Fireslack2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fireslack2-app h1')).getText();
  }
}
