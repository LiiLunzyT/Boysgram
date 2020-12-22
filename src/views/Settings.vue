<template>
  <section id="settings">
    <div class="col1">
      <h3>Cài đặt</h3>
      <p>Chỉnh sửa thông tin cá nhân</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success">Chỉnh sửa hoàn tất</p>
      </transition>

      <form @submit.prevent>
        <label for="name">Tên người dùng</label>
        <input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />

        <label for="address">Địa chỉ</label>
        <input v-model.trim="address" type="text" :placeholder="userProfile.address" id="address" />

        <button @click="updateProfile()" class="button">Lưu</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      name: '',
      address: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    updateProfile() {
      this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        address: this.address !== '' ? this.address : this.userProfile.address
      })

      this.name = ''
      this.address = ''

      this.showSuccess = true

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    }
  }
}
</script>
