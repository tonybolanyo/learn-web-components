import Template from './template.js';


class BizCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Template.render({
      first_name: 'Tony',
      last_name: 'G. Bolaño',
      title: 'Chief of Technology Officer',
      phone: '555-5555',
      email: 'tony@example.com',
      website: 'www.example.com'
    })
  }
}

if (!customElements.get('biz-card')) {
  customElements.define('biz-card', BizCard);
}