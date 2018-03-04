import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// pokeapi urls
const url = {
  base: 'https://pokeapi.co/api/v2/',
  gen: 'generation/',
  poke: 'pokemon/',
  species: 'pokemon-species/'
}

const state = {
  generations: null,
  species: [],
  current: null,
  description: null,
  isSearching: false,
  zoom: false
}

const mutations = {

  UPDATE_GENERATIONS (state, gen) {
    state.generations = gen
  },

  ADD_SPECIES (state, species) {
    state.species.push(species)
  },

  CURRENT_SPECIES (state, species) {
    state.current = species
  },

  CURRENT_DESCRIPTION (state, desc) {
    state.description = desc
  },

  IS_SEARCHING (state, isSearching) {
    state.isSearching = isSearching
  },

  RESET_SPECIES (state, reset) {
    state.current = reset
  },

  TOGGLE_ZOOM (state, zoom) {
    state.zoom = zoom
  }
}

const actions = {
  // get inital pokedata
  getInitalData (context) {
    axios.get(url.base + url.gen)
      .then((response) => {
        console.log(response)
        // getGameGens(response)
        let gameGens = response.data.results
        context.commit('UPDATE_GENERATIONS', gameGens)
        context.dispatch('getVokeList', gameGens)
      })
      .catch((error) => { console.log(error) })
  },

  // get list of pokemon
  getVokeList (context) {
    let g = context.state.generations

    _.each(g, (value, index) => {
      // get species from each gen
      axios.get(value.url)
        .then((response) => {
          let s = response.data.pokemon_species
          _.each(s, (val) => {
            context.commit('ADD_SPECIES', val)
          })
        })
        .catch((error) => { console.log(error) })
    })
  },
  getCurrentMon (context, id) {
    id = id.replace(/^0+/, '') // strip prepended 0's
    context.commit('IS_SEARCHING', true)

    axios.get(url.base + url.poke + id)
      .then((response) => {
        let currentmon = response.data
        context.commit('CURRENT_SPECIES', currentmon)
        context.commit('IS_SEARCHING', false)
      })
      .catch((error) => { console.log(error) })

    axios.get(url.base + url.species + id)
      .then((response) => {
        let descArr = response.data.flavor_text_entries
        // console.log(descArr)
        let desc = _.find(descArr, function(desc) {
          return desc.language.name == "en"
        })
        context.commit('CURRENT_DESCRIPTION', desc.flavor_text)
      })
      .catch((error) => { console.log(error) })
  },
  resetCurrentMon (context) {
    context.commit('RESET_SPECIES', null)
  },
  toggleZoom (context) {
    console.log(state.zoom)
    if (state.zoom == false) context.commit('TOGGLE_ZOOM', true)
    else context.commit('TOGGLE_ZOOM', false)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
