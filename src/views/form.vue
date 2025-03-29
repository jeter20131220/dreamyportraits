<script setup>
import { ref } from 'vue'
import axios from "axios";
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()


const imageOrTweet = ref('')
const tags = ref('')
const description = ref('')
const agree = ref(false)
const show = ref(false)

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

const showSuccessAlert = () => {
  Swal.fire({
    title: '✨ Thank you!',
    text: 'Your dreamy portrait has been submitted 🌿',
    icon: 'success',
    confirmButtonText: 'Yay!',
    background: '#fdfaf4',
    color: '#3b2e22',
    confirmButtonColor: '#a08972',
    customClass: {
      popup: 'rounded-2xl shadow-xl',
    }
  }).then(() => {
    router.push('/')
  })
}

const submitForm = async () => {
  if (!agree.value) {
    alert('Please agree to the privacy policy before submitting.')
    return
  }

  const payload = {
    image_url: imageOrTweet.value,
    tags: tags.value.split(' ').filter(tag => tag.startsWith('#')),
    description: description.value,
    agree: agree.value,
  }

  try {
    await axios.post(`${SUPABASE_URL}/rest/v1/submissions`, payload, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
    })
    showSuccessAlert()
    // alert('Submitted successfully! ✨')
    imageOrTweet.value = ''
    tags.value = ''
    description.value = ''
    agree.value = false
  } catch (error) {
    alert('Submission failed: ' + error.message)
    console.error(error)
  }
}

</script>
<template>

    <section id="form" class="min-h-screen bg-[#fdfaf4] flex items-center justify-center py-12 px-4">
        <div class="w-full max-w-2xl bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-[#c6b8a3]">
            <h2 class="text-3xl font-semibold text-[#4a3f34] mb-6 text-center">Submit Your Dreamy Portrait</h2>

            <form class="space-y-6">
                <!-- 圖片或推文連結 -->
                <div>
                    <label class="block text-[#5d4e41] font-medium mb-1" for="imageOrTweet">Image Upload or Tweet
                        URL</label>
                    <input type="text" id="imageOrTweet" name="imageOrTweet" v-model="imageOrTweet"
                        placeholder="Upload image or paste tweet link"
                        class="w-full bg-[#f3ede4] border border-[#c6b8a3] text-[#3d2e25] rounded-lg px-4 py-3 placeholder:text-[#b7a69a] focus:outline-none focus:ring-2 focus:ring-[#a08972]" />
                </div>

                <!-- 標籤 -->
                <div>
                    <label class="block text-[#5d4e41] font-medium mb-1" for="tags">Tags</label>
                    <input  v-model="tags"  type="text" id="tags" name="tags" placeholder="#forest #cat #flying"
                        class="w-full bg-[#f3ede4] border border-[#c6b8a3] text-[#3d2e25] rounded-lg px-4 py-3 placeholder:text-[#b7a69a] focus:outline-none focus:ring-2 focus:ring-[#a08972]" />
                </div>

                <!-- 描述 -->
                <div>
                    <label class="block text-[#5d4e41] font-medium mb-1" for="description">Description</label>
                    <textarea v-model="description" id="description" name="description" rows="4" placeholder="Tell us about your portrait..."
                        class="w-full bg-[#f3ede4] border border-[#c6b8a3] text-[#3d2e25] rounded-lg px-4 py-3 placeholder:text-[#b7a69a] focus:outline-none focus:ring-2 focus:ring-[#a08972]"></textarea>
                </div>

                <!-- 同意條款 -->
                <div class="flex items-start">
                    <input v-model="agree" id="agree" type="checkbox" class="mt-1 accent-[#a08972]" />
                    <label for="agree" class="ml-3 text-[#5d4e41] text-sm">
                        I agree to allow my submission to be publicly featured.
                        <button type="button" @click="show = true"
                            class="ml-1 underline text-[#2d4c65] hover:text-[#1e3344]">Privacy Policy</button>
                    </label>
                </div>

                <!-- 送出按鈕 -->
                <div class="text-center pt-4">
                    <button type="button" @click="submitForm"
                        class="bg-[#a08972] hover:bg-[#8b7560] text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                        Submit
                    </button>
                </div>
                <div class="text-center mt-4">
                    <router-link to="/" class="text-[#2d4c65] underline text-sm hover:text-[#1e3344] transition">
                        ← Back to Home
                    </router-link>
                </div>
            </form>
        </div>
        <!-- Modal -->
        <transition name="fade">
            <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div class="bg-white max-w-xl w-full p-6 rounded-xl shadow-xl relative text-[#3b2e22]">
                    <h2 class="text-xl font-bold mb-4">Privacy Policy</h2>
                    <p class="mb-2 text-sm">
                        We respect your privacy. Any images or links you submit are used solely for the purpose of
                        public display in the AI Portrait Hall of Fame. We do not sell, share, or reuse your data for
                        any commercial use beyond this project.
                    </p>
                    <p class="mb-2 text-sm">
                        By submitting your content, you agree that your artwork may be publicly showcased, credited with
                        your provided name or username, and may appear on social media or promotional visuals.
                    </p>
                    <p class="mb-4 text-sm">
                        You can request the removal of your submission at any time by contacting us.
                    </p>
                    <div class="text-right">
                        <button @click="show = false" class="text-sm text-[#2d4c65] font-semibold hover:text-[#1e3344]">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </transition>

    </section>

</template>

<style lang="scss">
#form {
    background-image: url(../assets/img/form.webp);
    /* 你可以換成自己的背景圖 */
    background-size: cover;
    background-position: center;
    height: 100vh;

    @media (max-width: 767px) {
        height: 80vh;
    }

}
</style>