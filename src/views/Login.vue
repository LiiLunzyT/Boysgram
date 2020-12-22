<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div class="col1">
        <h1>Boysgram</h1>
        <p>
          Chào mừng đến với <a href="https://savvyapps.com/" target="_blank">Boysgram Apps</a>, ứng dụng mạng xã hội thu nhỏ phát triển bởi Vue.js và Firebase.
        </p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Chào mừng bạn trở lại</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Mật khẩu</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button @click="login()" class="button">Đăng nhập</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Quên mật khẩu</a>
            <a @click="toggleForm()">Tạo tài khoản mới</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Đăng ký nào</h1>
          <div>
            <label for="name">Tên của bạn</label>
            <input v-model.trim="signupForm.name" type="text" placeholder="Võ Thành Luân" id="name" />
          </div>
          <div>
            <label for="address">Địa chỉ</label>
            <input v-model.trim="signupForm.address" type="text" placeholder="Địa chỉ" id="address" />
          </div>
          <div>
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
          </div>
          <div>
            <label for="password2">Mật khẩu</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="ít nhất 6 ký tự" id="password2" />
          </div>
          <button @click="signup()" class="button">Đăng ký</button>
          <div class="extras">
            <a @click="toggleForm()">Trở về đăng nhập</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        address: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        address: this.signupForm.address
      })
      .then((error) => {
        console.log(error)
      })
    }
  }
}
</script>
