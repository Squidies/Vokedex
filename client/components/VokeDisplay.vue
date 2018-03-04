<template lang="pug">
  #vokedisplay
    .screen(:class="{ magnified:zoom }" v-if="current && !searching")
        .X(@click="toggleZoom()" v-if="zoom")
        img.ico(:src="current.sprites.front_default")
        vue-scrollbar(classes="stats-scrollbar" ref="DisplayStatsScrollbar")
          ul.stats
            li Name: #[span.bold {{ current.name | capitalize }}]
            li #id: #[span.bold {{ current.id }}]
            li Height: #[span.bold {{ current.height }}]
            li Weight: #[span.bold {{ current.weight }}]
            li BaseXP: #[span.bold {{ current.base_experience }}]
            li Description: #[span.bold {{ current_description }}]

    .screen(v-else-if="searching")
      .loading
        h1 Loading
        img.vball.spin(src="static/images/vpb-opt.svg")

    .screen(v-else)
      .loading
        img.ico(src="static/images/vpb-opt.svg")

    //- voke-controls
    dex-controls

</template>

<script>
import VueScrollbar from 'vue2-scrollbar'
import DexControls from './DexControls'

export default {

  computed: {
    current () {
      return this.$store.state.current
    },
    current_description () {
      return this.$store.state.description
    },
    searching () {
      return this.$store.state.isSearching
    },
    zoom () {
      return this.$store.state.zoom
    }
  },
  filters: {
    capitalize (val) {
      return _.capitalize(val)
    }
  },
  methods: {
    toggleZoom() {
      this.$store.dispatch('toggleZoom')
    }
  },
  components: {
    VueScrollbar,
    'dex-controls': DexControls }
}


</script>

<style lang="sass">
@import 'static/sass/vars'
@import 'static/sass/animations'

#vokedisplay
  min-width: 50%
  min-height: 100%

.screen
  width: 325px
  height: 245px
  display: flex
  margin: 145px 0 0 46px
  border-radius: 8px
  padding: 15px
  padding-right: 0
  font-family: 'VT323', monospace;
  &.magnified
    position: relative
    z-index: 100
    background: $screen-green
    border: 2px solid $vue-blue
    transform: scale(1.66) translate(45%, -15%)

.loading
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  .vball
    width: 50px

.screen-scrollbar
  max-height: 215px

.ico
  width: 90px
  height: 90px
  margin: 0 15px

.stats
  list-style: none
  margin: 0
  padding: 0

  li
    padding: 1px

.stats-scrollbar
  background: transparent
  padding-right: 15px

.X
  position: absolute
  z-index: 100
  right: 15px
  top: 5px
  font-size: 2rem
  width: 30px
  height: 30px
  display: flex
  align-items: center
  justify-content: center
  background: $vue-green
  border-radius: 50%
  cursor: pointer
  color: $vue-blue
  &:active
    background: $vue-blue
    color: $vue-green
  &::after
    display: inline-block
    content: 'X'

.bold
  font-size: 1.33rem
</style>
