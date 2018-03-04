<template lang="pug">
  #vokemenu
    .currentpoke
      h2(v-if="current && !searching") \#{{ current.id }}:{{ current.name | capitalize }}
      img.dexlogo(v-else src="static/images/vokedex_lg_opt.svg")
    .pokesearch
      input.search(type="text" v-model="searchString" placeholder="Search by Pokémon or Poké#ID")
      menu
        vue-scrollbar(classes="menu-scrollbar" ref="MenuScrollbar")
          ul.monList
            li(v-for="p in species" @click="selectCurrentMon(p)") \#{{ p.id | getId }} {{ p.name | capitalize }}
</template>

<script>
import VueScrollbar from 'vue2-scrollbar'

export default {
  computed: {
    species () {
      let s = this.$store.state.species
      let spIds = []
      _.each(s, (sp) => {
        let name = sp.name
        let url = sp.url
        let id = url.match(/(\/\d{1,3}\/)/g)[0].replace(/\/*\//g, '').toString() // capture #id from url string and remove slashes
        spIds.push({
          'name': name,
          'url': url,
          'id': id.padStart(4, '0')
        })
      })
      spIds = _.orderBy(spIds, 'id')
      return spIds.filter(spIds => {
        if(this.searchString == '') {
          // return all the mons if blank input
          return spIds.name
        } else if (isNaN(this.searchString)) {
          // if searching by name
          return spIds.name.toLowerCase().includes(this.searchString.toLowerCase())
        } else if (!isNaN(this.searchString)) {
          // if searching by id
          return spIds.id.replace(/^0+/, '').includes(this.searchString.replace(/^0+/, ''))
        }
      })
    },
    current () {
      return this.$store.state.current
    },
    searching () {
      return this.$store.state.isSearching
    }
  },
  filters: {
    capitalize (val) {
      return _.capitalize(val)
    },
    getId (id) {
      return id.replace(/^0+/, '')
    }
  },
  methods: {
    selectCurrentMon (mon) {
      this.$store.dispatch('getCurrentMon', mon.id)
    }
  },
  created () {
    // check again for data, just to be sure
    let isEmpty = _.isEmpty(this.$store.state.species) ? true : false
    if(isEmpty) this.$store.dispatch('getInitalData')
  },
  data () {
    return {
      searchString: ''
    }
  },
  components: { VueScrollbar }
}

</script>

<style lang="sass">
@import 'static/sass/vars'

#vokemenu
  margin: 75px 0px 0px 20px
  width: 100%
  max-height: 485px
  padding: 15px


menu
  padding: 0
  ul
    padding: 0
    margin: 0
    list-style: none
  li
    padding: 4px 18px
    &:hover
      background: $menu-hover
      cursor: pointer

.menu-scrollbar
  max-height: 250px
  background: $screen-green
  border-radius: $radius
  opacity: 0.66
  &:hover
    opacity: 1

.pokesearch
  margin-top: 50px

.search
  appearance: none
  width: 100%
  background: $color-white
  padding: 8px 16px
  border-radius: $radius
  border: 2px solid transparent
  opacity: 0.88
  &:focus
    outline: 0
    border: 2px solid $vue-blue
    opacity: 1

.currentpoke
  min-height: 100px
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 15px
  background: transparentize($color-white, 0.33)
  border-radius: $radius

  h2
    font-size: 2rem
    font-family: 'pokemon', serif
    color: $vue-blue
    margin: 0

.dexlogo
  width: 190px
  transform: rotate(-2deg)

</style>
