import Component from '@ember/component';
import { computed } from '@ember/object';
import { uniq } from '@ember/object/computed';

const people = [
  {
    "name": "Alex Matchneer",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Alex Navasardyan",
    "teams": [
      "cli"
    ]
  },
  {
    "name": "Amy Lam",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Brendan McLoughlin",
    "teams": [
      "data"
    ]
  },
  {
    "name": "Chad Hietala",
    "teams": [
      "corejs"
    ]
  },
  {
    "name": "Chris Manson",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Christoffer Persson",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Clemens Müller",
    "teams": [
      "data"
    ]
  },
  {
    "name": "Dan Gebhardt",
    "teams": [
      "corejs",
      "data"
    ]
  },
  {
    "name": "David Baker",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Edward Faulkner",
    "teams": [
      "corejs",
      "steering"
    ]
  },
  {
    "name": "Erik Bryn",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Godfrey Chan",
    "teams": [
      "corejs"
    ]
  },
  {
    "name": "Igor Terzic",
    "teams": [
      "corejs",
      "data"
    ]
  },
  {
    "name": "Jacob Bixby",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Jen Weber",
    "teams": [
      "learning",
      "corejs"
    ]
  },
  {
    "name": "Jessica Jordan",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Katie Gengler",
    "teams": [
      "corejs",
      "cli",
      "steering"
    ]
  },
  {
    "name": "Kelly Selden",
    "teams": [
      "cli"
    ]
  },
  {
    "name": "Kenneth Larsen",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Krati Ahuja",
    "teams": [
      "cli"
    ]
  },
  {
    "name": "Kris Selden",
    "teams": [
      "corejs"
    ]
  },
  {
    "name": "Leah Silber",
    "teams": [
      "corejs",
      "learning",
      "steering"
    ]
  },
  {
    "name": "Martin Muñoz",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Matthew Beale",
    "teams": [
      "corejs"
    ]
  },
  {
    "name": "Melanie Sumner",
    "teams": [
      "corejs",
      "learning",
      "steering"
    ]
  },
  {
    "name": "Nathan Hammond",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Peter Wagenet",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Ricardo Mendes",
    "teams": [
      "corejs",
      "learning"
    ]
  },
  {
    "name": "Robert Jackson",
    "teams": [
      "corejs",
      "cli"
    ]
  },
  {
    "name": "Sivakumar Kailasam",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Stanley Stuart",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Stefan Penner",
    "teams": [
      "corejs",
      "cli"
    ]
  },
  {
    "name": "Terence Lee",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Tobias Bieniek",
    "teams": [
      "cli"
    ]
  },
  {
    "name": "Todd Jordan",
    "teams": [
      "learning"
    ]
  },
  {
    "name": "Tom Dale",
    "teams": [
      "corejs",
      "steering"
    ]
  },
  {
    "name": "Trek Glowacki",
    "teams": [
      "alumni"
    ]
  },
  {
    "name": "Yehuda Katz",
    "teams": [
      "corejs",
      "steering"
    ]
  }
];

export default Component.extend({
  // people,

  init() {
    this._super(...arguments);
    this.people = people;
  },

  allTeams: computed('people.@each.teams', function() {
    return this.people.reduce((teams, person) => teams.concat(person.teams), []);
  }),

  teams: uniq('allTeams'),

  activeFilter: null,

  filteredPeople: computed('activeFilter', 'people.[]', function() {
    if (!this.activeFilter) { return this.people; }

    return this.people.filter(person => person.teams.includes(this.activeFilter));
  }),

  actions: {
    filterTeam(team) {
      this.set('activeFilter', team);
    },

    clearFilter() {
      this.set('activeFilter', null);
    }
  }
});
