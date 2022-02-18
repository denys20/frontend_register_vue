<template>
    <div class="register-container p-2 shadow mb-5">
        <div class="close-container">
            <BIconXLg />
        </div>
        <div class="px-5 py-2">
            <header class="form-header">Create a new account</header>
            <form @submit="handleSubmit" class="text-start">
                <div v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for-key="error in errors">{{ error }}</li>
                    </ul>
                </div>

                <div class="email-container">
                    <label>Email</label>
                    <input type="email" v-model="email" required>
                    <BIconFileEarmarkPerson />
                </div>

                <label>Confirm Email</label>
                <input type="email" v-model="confirmemail" required>
                
                <div class="username-container">
                    <label>Username</label>
                    <input type="text" v-model="username" required>
                    <p>Username requires 3 to 20 characters using letters,digits and optionally a single punctuation_character.</p>
                </div>

                <div class="password-container">
                    <label>Password</label>  
                    <input type="password" v-model="password" required>            
                    <!-- <div v-if="passwordError" class="error">{{ passwordError }} </div> -->
                    <p>Password must be at least 8 characters long, contain one lowercase letter,contain one uppercase letter and include at least one number(0-9)</p>
                </div>                
                
                <div class="confirmpassword-container">
                    <label>Confirm Password</label>  
                    <input type="password" v-model="confirmpassword" required> 
                    <BIconArrowClockwise />
                    <!-- <div v-if="confirmError" class="error">{{ confirmError }} </div> -->
                </div>

                <div>
                    <input type="checkbox" class="receive" v-model="receive">
                    <label>I want to receive emails from VenewLive and its partners about upcoming shows <br> and information.</label>
                </div>

                <div class="checkbox-container">
                    <input type="checkbox" class="terms" v-model="terms" required>
                    <label>By submitting this form I agree to the <span>Terms of Service</span> and <span>Privacy Notice</span></label>
                </div>

                <div class="text-center">
                    <button class="submit-btn" type="submit">Submit</button>
                </div>
                <div class="text-center my-4">
                    <span class="to-login-span">Go to Log In</span>
                </div>
            </form>       
        </div>
    </div>
</template>

<script>
export default{

    data() {
        return {
            errors:[],
            email: null,
            confirmemail: null,
            username: null,
            password: null,
            confirmpassword: null,
            // role: 'designer',
            // education: [],
            terms: false,
            // passwordError: '',
            // confirmError: ''
        }
    },
    methods: {
   
           handleSubmit: function (e) {
            this.errors = [];

            if (!this.username) {
                this.errors.push("Name required.");
            }
            if (!this.username) {
                this.errors.push('Username required.');
            } else if (!this.validUsername(this.username)) {
                this.errors.push('Valid Username required.');
            }
            if (!this.email) {
                this.errors.push('Email required.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }
            if (!this.password) {
                this.errors.push('Password required.');
            } else if (!this.validPassword(this.password)) {
                this.errors.push('Valid password required.');
            }

            if (!this.errors.length) {
                return true;
                
            }
            // window.alert('ok');

            e.preventDefault();
            },

            validUsername: function (username) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(username) && username.length >= 3 && username.length <= 20;
            },
            validPassword: function (password) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(password) && password.length >= 8;
            },
            validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            }
    }    
}
</script>

<style> 
@import url('../assets/register.css');
</style>