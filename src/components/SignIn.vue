<template>
    <!-- ############ LAYOUT START-->
    <div class="center-block w-xxl w-auto-xs p-y-md">
        <div class="navbar">
            <h2 class="text-center" style="color: rgba(176, 181, 189, 0.51);">SUPPORT SERVICE SYSTEM</h2>
        </div>
        <div class="p-a-md box-color r box-shadow-z1 text-color m-a">
            <div class="m-b text-sm">
                Sign In
            </div>
            <form name="form">
                <div class="md-form-group float-label">
                    <input type="text" class="md-input" v-model="ipAddress" required>
                    <label>IP Address</label>
                </div>
                <div class="md-form-group float-label">
                    <input type="text" class="md-input" v-model="username" required>
                    <label>Username</label>
                </div>
                <div class="md-form-group float-label">
                    <input type="password" class="md-input" v-model="password" required>
                    <label>Password</label>
                </div>
                <div class="m-b-md">
                    <label class="md-check">
                        <input type="checkbox"><i class="primary"></i> Keep me signed in
                    </label>
                </div>
                <button type="submit" class="btn primary btn-block p-x-md" @click="signin">Sign in</button>
            </form>
        </div>

        <div class="p-v-lg text-center">
            <div class="m-b"><a ui-sref="access.forgot-password" @click="forgotPassword"
                    class="text-primary _600">Forgot password?</a>
            </div>
        </div>
    </div>
    <!-- ############ LAYOUT END-->

</template>

<script>
// import { SSHConnection } from 'node-ssh-forward'

export default {
    name: 'SignIn',

    methods: {
        signin() {
            // this.$router.push({ name: '' })

            // const sshConnection = new SSHConnection({
            //     endHost: 'example.com',
            //     bastionHost: 'my-bastion-host.com'
            // })
            // await sshConnection.forward({
            //     fromPort: 9000,
            //     toPort: 80,
            //     toHost: 'imgur.com'
            // })
        },

        forgotPassword() {
            this.$router.push({ name: 'ForgotPassword' })
        }
    }
}
</script>

<style>

</style>

$ ssh -L 9000:localhost:80 -J your-jump-host.com example.com

const sshConnection = new SSHConnection({
    endHost: 'example.com',
    bastionHost: 'your-jump-host.com'
  })
  await sshConnection.forward({
    fromPort: 9000,
    toPort: 80,
  })
