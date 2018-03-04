<template lang="pug">

.dex-controls
  button.reset(@click="resetCurrentMon()" title="Reset") Reset
  .magnification-controls(v-if="current")
    .zoom-in(@click="toggleZoom()" title="Zoom-In")
    .zoom-out(@click="toggleZoom()" title="Zoom-Out")

</template>

<script>

export default {
  methods: {
    resetCurrentMon (mon) {
      this.$store.dispatch('resetCurrentMon')
    },
    toggleZoom() {
      this.$store.dispatch('toggleZoom')
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    }
  }
}

</script>

<style lang="sass">
@import 'static/sass/vars'

.dex-controls
  background: rgba(255, 0, 0, 0)
  margin: 40px 15px 0 40px
  height: 100px
  padding: 5px
.reset
  margin: 15px 0 0 10px
  border: 0
  font-family: 'VT323', monospace
  color: $color-white
  cursor: pointer
  opacity: 0.88
  outline: 0
  &:active
    opacity: 1
    color: $vue-green

.magnification-controls
  width: 30px;
  height: 95px;
  float: right;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

.zoom-in,
.zoom-out
  padding: 12px 8px
  cursor: pointer

  &::after
    display: block
    width: 0
    height: 0
    border-left: 8px solid transparent
    border-right: 8px solid transparent
    border-bottom: 8px solid $color-white
    opacity: 0.88
    content: ''

  &:hover::after
    opacity: 1

  &:active::after
    border-bottom: 8px solid $vue-blue

.zoom-out
  transform: rotateX(180deg)

</style>
