<template lang="pug">
  #vokedex(:class="{ magnified:zoom }")
    .vdex
      voke-display
      voke-menu
</template>

<script>
import VokeMenu from 'components/VokeMenu'
import VokeDisplay from 'components/VokeDisplay'

export default {
  components: {
    'voke-menu': VokeMenu,
    'voke-display': VokeDisplay
  },
  computed: {
    zoom () {
      return this.$store.state.zoom
    }
  },
  created () {
    let isListEmpty = _.isEmpty(this.$store.state.species) ? true : false
    if (isListEmpty) this.$store.dispatch('getInitalData') // get initial pokedata
  }
}

</script>

<style scoped lang="sass">
@import 'static/sass/vars'
@import 'static/sass/mixins'

#vokedex
  @include container
  background: url('/static/images/bg_vokedex_opt.svg') no-repeat center 50px
  background-size: 800px

.vdex
  display: flex
  width: 775px
  margin: auto

.magnified::after // modal faded background
  display: block
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: rgba(22, 22, 22, 0.5)
  content: ''

</style>
