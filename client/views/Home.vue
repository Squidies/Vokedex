<template lang="pug">
  #home
    .container
      img.logo(src="static/images/vokedex_lg_opt.svg")
      .load(v-if="hasSpecies")
        div.shake.disabled
          img.vball(src="static/images/vpb-opt.svg")
          p Loading...
      .load(v-else)
        div
          router-link(to="/vokedex")
            img.vball(src="static/images/vpb-opt.svg")
            p Loaded

</template>

<script>
import _ from 'lodash'

export default {
  computed: {
    hasSpecies () {
      return _.isEmpty(this.$store.state.species) ? true : false
    }
  },
  created () {
    let isListEmpty = _.isEmpty(this.$store.state.species) ? true : false
    if (isListEmpty) this.$store.dispatch('getInitalData') // get initial pokedata
  }
}

</script>

<style lang="sass">
@import 'static/sass/vars'
@import 'static/sass/mixins'
@import 'static/sass/animations'

#home
  height: 100%
  background: $color-white

.container
  @include container
  text-align: center

.flex
  display: flex
  flex-direction: column
  align-items: center

.logo
  max-width: 600px
  margin: 2rem

.disabled
  opacity: 0.66
  cursor: progress

.vball
  width: 150px

.load
  font-family: 'VT323', monospace
  max-width: 300px
  margin: auto

  p,
  a
    font-size: 1.33rem
    color: $vue-green
  a
    text-decoration: none

  p
    position: relative
    top: -65px
</style>
