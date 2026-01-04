<script setup>
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

const CONFIG = {
    SERVICE_ID : 'service_snie5zo',
    TEMPLATE_ID : 'template_f1uytvr',
    PUBLIC_KEY: 'l64Hl9eJuHzqGHZaH',
    MY_EMAIL: 'tsynayut2004@gmail.com'
}

const formData = reactive({
    name : '',
    company_name: '',
    email: '',
    message:'',
})

const isSending = ref(false)
const errorMessage = ref('')
const successMessage= ref(false)
const myEmail = ref(CONFIG.MY_EMAIL)

const sendEmail = async() => {
    if(!formData.name || !formData.company_name || !formData.email || !formData.message){
        errorMessage.value = 'Please fill in all required fields.'
        setTimeout (() => errorMessage.value = '' , 3000)
        return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errorMessage.value = 'Please enter a valid email address.';
        setTimeout(() => errorMessage.value = '', 3000);
        return;
    }
     isSending.value = true;
     successMessage.value = '';
     errorMessage.value = '';
     try{
        const response = await emailjs.send(
            CONFIG.SERVICE_ID,
            CONFIG.TEMPLATE_ID,
            {
                type:'html',
                from_name:formData.name,
                from_company_name:formData.company_name,
                message:formData.message,
                from_email:formData.email,
                reply_to:myEmail.value,
                date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
                })
            },
            CONFIG.PUBLIC_KEY  
        )
           successMessage.value = 'Message sent successfully! I\'ll get back to you within 24 hours.';
               formData.name = '';
                formData.email = '';
                formData.message = '';

                setTimeout(() => {
                successMessage.value = '';
                }, 5000);
     }catch(error) {
        if(error.text){
            errorMessage.value = `Error: ${error.text}`;
        }else {
  errorMessage.value = 'Failed to send message. Please try again or contact me directly.';
}


    setTimeout(() => {
  errorMessage.value = '';
}, 5000);
     }finally{
        isSending.value = false
     }
}

// Contact info data
const contactInfo = {
    phone: '081362673', // Replace with your phone number
    email: 'tsynayut2004@gmail.com',
    github: 'https://github.com/Synayut-tonGo', // Replace with your GitHub
    facebook: 'https://www.facebook.com/goo.joe.75', // Replace with your Facebook
    linkedin: 'https://www.linkedin.com/in/thach-synayut-826085278/', // Optional LinkedIn
    telegram: 'https://t.me/Synayut' // Optional Telegram
}

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        // Show a temporary success message
        const originalText = event.target.innerHTML;
        event.target.innerHTML = '<i class="pi pi-check text-green-500"></i> Copied!';
        setTimeout(() => {
            event.target.innerHTML = originalText;
        }, 2000);
    });
}
</script>

<template>
    <div id="contact" class="relative z-47 top-0 px-4 pb-10 bottom-0 dark:bg-gray-900 bg-white w-full h-auto text-gray-900 dark:text-white">
        <div class="mb-10">
            <h1 class="text-6xl text-center mb-4 font-bold">Let's Connect</h1>
            <h3 class="text-center text-[15.5px]">Whether you have a project in mind, want to collaborate, or just want to say hello - I'm always excited to connect with fellow developers, designers, and creators.</h3>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <div class="w-full">
                <form action="" @submit.prevent="sendEmail" class="space-y-3 w-full h-auto bg-gray-800 p-5 rounded-lg">
                    <div>
                        <h1 class="text-white text-5xl font-semibold">Quick Contact</h1>
                    </div>                
                    <div>
                        <label class="block text-sm font-medium text-white mb-2">
                            Your Name <span class="text-red-500">*</span>
                        </label>
                        <input type="text" v-model="formData.name" required
                            class="w-full px-2 py-2 rounded-lg dark:bg-gray-700 border-none outline-[0.5px] dark:outline-none bg-white"
                            placeholder="John Doe">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white mb-2">
                            Your Company Name <span class="text-red-500">*</span>
                        </label>
                        <input type="text" v-model="formData.company_name" required
                            class="w-full px-2 py-2 rounded-lg dark:bg-gray-700 border-none outline-[0.5px] dark:outline-none bg-white"
                            placeholder="Company Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white mb-2">
                            Your Email <span class="text-red-500">*</span>
                        </label>
                        <input type="text" v-model="formData.email" required
                            class="w-full px-2 py-2 rounded-lg dark:bg-gray-700 border-none outline-[0.5px] dark:outline-none bg-white"
                            placeholder="example@gmail.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white mb-2">
                            Your Message <span class="text-red-500">*</span>
                        </label>
                        <textarea v-model="formData.message" required
                            class="w-full px-2 py-2 rounded-lg dark:bg-gray-700 border-none outline-[0.5px] dark:outline-none bg-white min-h-[150px]"
                            placeholder="Your Message"></textarea>
                    </div>
                    <button
                        type="submit"
                        :disabled="isSending"
                        class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                        <span v-if="isSending" class="flex items-center">
                            <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                        <span v-else>Send Message</span>
                    </button>
                    
                    <!-- Status Messages -->
                    <div v-if="successMessage" class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div class="flex items-center">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3"></i>
                            <p class="text-green-800 dark:text-green-300 font-medium">{{ successMessage }}</p>
                        </div>
                    </div>

                    <div v-if="errorMessage" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div class="flex items-center">
                            <i class="pi pi-exclamation-triangle text-red-500 text-xl mr-3"></i>
                            <p class="text-red-800 dark:text-red-300 font-medium">{{ errorMessage }}</p>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Direct Contact Info Box -->
            <div class="w-full">
                <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl h-full">
                    <h2 class="text-white text-4xl font-bold mb-6 flex items-center">
                        <i class="pi pi-comments mr-3 text-blue-400"></i>
                        Direct Connect
                    </h2>
                    <p class="text-gray-300 mb-8">Prefer a more direct approach? Connect with me through any of these platforms:</p>
                    
                    <!-- Contact Methods Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <!-- Phone -->
                        <div class="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
                             @click="copyToClipboard(contactInfo.phone)">
                            <div class="flex items-center">
                                <div class="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:bg-blue-500/30 transition-all">
                                    <i class="pi pi-phone text-blue-400 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold">Phone</h3>
                                    <p class="text-gray-300 text-sm mt-1">{{ contactInfo.phone }}</p>
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to copy number
                            </div>
                        </div>

                        <!-- Email -->
                        <a :href="`mailto:${contactInfo.email}`" 
                           class="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer block no-underline">
                            <div class="flex items-center">
                                <div class="bg-green-500/20 p-3 rounded-full mr-4 group-hover:bg-green-500/30 transition-all">
                                    <i class="pi pi-envelope text-green-400 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold">Email</h3>
                                    <p class="text-gray-300 text-sm mt-1">{{ contactInfo.email }}</p>
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to send email
                            </div>
                        </a>

                        <!-- GitHub -->
                        <a :href="contactInfo.github" target="_blank" 
                           class="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer block no-underline">
                            <div class="flex items-center">
                                <div class="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-gray-900 transition-all">
                                    <i class="pi pi-github text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold">GitHub</h3>
                                    <p class="text-gray-300 text-sm mt-1">View my projects</p>
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Open my GitHub profile
                            </div>
                        </a>

                        <!-- Facebook -->
                        <a :href="contactInfo.facebook" target="_blank" 
                           class="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer block no-underline">
                            <div class="flex items-center">
                                <div class="bg-blue-600/20 p-3 rounded-full mr-4 group-hover:bg-blue-600/30 transition-all">
                                    <i class="pi pi-facebook text-blue-500 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold">Facebook</h3>
                                    <p class="text-gray-300 text-sm mt-1">Connect socially</p>
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Message me on Facebook
                            </div>
                        </a>

                        <!-- LinkedIn (Optional) -->
                        <a v-if="contactInfo.linkedin" :href="contactInfo.linkedin" target="_blank" 
                           class="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer block no-underline">
                            <div class="flex items-center">
                                <div class="bg-blue-700/20 p-3 rounded-full mr-4 group-hover:bg-blue-700/30 transition-all">
                                    <i class="pi pi-linkedin text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold">LinkedIn</h3>
                                    <p class="text-gray-300 text-sm mt-1">Professional network</p>
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Connect professionally
                            </div>
                        </a>

                        <!-- Telegram (Optional) -->
                        <a v-if="contactInfo.telegram" :href="contactInfo.telegram" target="_blank" 
                           class="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer block no-underline">
                            <div class="flex items-center">
                                <div class="bg-blue-400/20 p-3 rounded-full mr-4 group-hover:bg-blue-400/30 transition-all">
                                    <i class="pi pi-telegram text-blue-400 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold">Telegram</h3>
                                    <p class="text-gray-300 text-sm mt-1">Instant messaging</p>
                                </div>
                            </div>
                            <div class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Message me on Telegram
                            </div>
                        </a>
                    </div>

                    <!-- Response Time Info -->
                    <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 class="text-white font-semibold mb-2 flex items-center">
                            <i class="pi pi-clock text-yellow-400 mr-2"></i>
                            Response Time
                        </h4>
                        <p class="text-gray-300 text-sm">
                            <span class="text-green-400 font-semibold">✓ Quick Response:</span> I typically respond within 24 hours on weekdays.
                        </p>
                        <p class="text-gray-300 text-sm mt-2">
                            <span class="text-blue-400 font-semibold">⏰ Business Hours:</span> Monday-Satursday(haft day), 8AM-5PM (Your Timezone)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add hover effects */
.group:hover .text-blue-400 {
    transform: scale(1.1);
    transition: transform 0.2s ease;
}

/* Ensure links don't have default styling */
a {
    color: inherit;
    text-decoration: none;
}

/* Animation for copied feedback */
@keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

.copied-feedback {
    animation: fadeInOut 2s ease-in-out;
}
</style>