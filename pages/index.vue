<template>
  <div>
    <Tutorial />
    <div class="test">
      {{ userInfo.name }}
      {{ userInfo.age ||0 }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      age: 23
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'counter']),
    counter () {
      return this.$store.state.counter
    }
  },
  mounted () {
    this.$store.commit('update_user_info', { age: this.age })
  }
}
</script>

<style lang="scss" scoped>
.test {
  background-color: #f00;
}
</style>
