import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    // return ['a', 'b', 'c', 'd'];
    return RSVP.hash({
      members: fetch('https://ember-beta-website.netlify.com/data/team-members/all.json').then(res => res.json()),
      scientists: ['a', 'b', 'c', 'd']
    })
  }
});
