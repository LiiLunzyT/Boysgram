<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>Boysgram</h3>
        </router-link>
        <ul class="inline" style="font-weight: bold;">
          <li>
            <router-link to="/">TRANG CHỦ</router-link>
          </li>
          <li>
            <router-link to="/settings">THIẾT LẬP</router-link>
          </li>
          <li><a @click="logout()">ĐĂNG XUẤT</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
