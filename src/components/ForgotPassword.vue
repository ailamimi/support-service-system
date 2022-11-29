<template>
    <!-- ############ LAYOUT START-->

  <div class="center-block w-xxl w-auto-xs p-y-md">
    
    <div class="p-a-md box-color r box-shadow-z1 text-color m-a">
      <div class="m-b">
        Forgot your password?
        <p class="text-xs m-t">Enter your email address below and we will send you instructions on how to change your password.</p>
      </div>
      <form name="reset">
        <div class="md-form-group">
          <input type="email" class="md-input" v-model="email" required>
          <label>Your Email</label>
        </div>
        <button type="submit" class="btn primary btn-block p-x-md">Send</button>
      </form>
    </div>
    <p id="alerts-container"></p>
    <div class="p-v-lg text-center">
            <div class="m-b"><a ui-sref="access.forgot-password" @click="signin"
                    class="text-primary _600">Sign in</a>
            </div>
        </div>
  </div>
<!-- ############ LAYOUT END-->
</template>

<script>
export default {
    name: 'ForgotPassword',

    methods: {
      signin() {
        this.$router.push({ name: 'SignIn' })
      }
    }
}
</script>

<style>
.text-center a{
text-align: center;
}
</style>