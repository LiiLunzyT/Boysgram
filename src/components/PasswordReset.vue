<template>
  <div class="modal">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">Đóng</div>
      <h3>Hồi phục mật khẩu</h3>
      <div v-if="!showSuccess">
        <p>Nhập Email cần hồi phục mật khẩu</p>
        <form @submit.prevent>
          <input v-model.trim="email" @keyup.enter="resetPassword()" type="email" placeholder="you@email.com" />
        </form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button @click="resetPassword()" class="button">Hồi phục</button>
      </div>
      <p v-else>Thành công! Vui lòng kiểm tra tin nhắn để hồi phục mật khẩu của bạn.</p>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  data() {
    return {
      email: '',
      showSuccess: false,
      errorMsg: ''
    }
  },
  methods: {
    async resetPassword() {
      this.errorMsg = ''

      try {
        await auth.sendPasswordResetEmail(this.email)
        this.showSuccess = true
      } catch (err) {
        this.errorMsg = "Không tồn tại tài khoản này trong hệ thống.\nCó thể tài khoản này đã bị xoá"
      }
    }
  }
}
</script>
