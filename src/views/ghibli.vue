<script setup>
import { ref, onMounted, nextTick } from 'vue';


const tweetLinks = [
    'https://x.com/urvashiicodes/status/1905281543117123750',
    'https://x.com/khushbooverma_/status/1905650364356936020',
    'https://x.com/Shivangi_scene/status/1905599702072005013',
    // 加更多推文連結
]

onMounted(async () => {
    await nextTick()
    if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load()
    }
})

const scrollToSection = () => {
    const target = document.getElementById('sec02')
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
    }
}

const originalSubmissions = [
  {
    // 日本道頓堀 旅遊照 男生
    image_url: new URL('@/assets/img/3.webp', import.meta.url).href,
    description: 'A solo walk through Osaka’s lights — still, quiet, and a little magical.',
    username: '@softwindcat',
    tags: ['#solojourney', '#cityglow', '#japantrip'],
    source_url: null,
  },
  {
    // 男生站在花海自然中 年輕
    image_url: new URL('@/assets/img/1.webp', import.meta.url).href,
    description: 'The wind was soft, the flowers endless — he looked like he belonged there.',
    username: '@bluelantern',
    tags: ['#flowermoment', '#quietlight', '#softboy'],
    source_url: null,
  },
  {
    // 日本旅遊 嵐山女生背景是山和水
    image_url: new URL('@/assets/img/2.webp', import.meta.url).href,
    description: 'In Arashiyama, she paused by the water — and the world paused with her.',
    username: '@milkclouds',
    tags: ['#mountainmagic', '#watersoul', '#japanescape'],
    source_url: null,
  },
  {
    // 阿公 老爺爺背景是樹
    image_url: new URL('@/assets/img/5.jpg', import.meta.url).href,
    description: 'He stood under the trees like he’d lived a hundred stories there.',
    username: '@leafandlight',
    tags: ['#oldwisdom', '#forestkeeper', '#timepause'],
    source_url: null,
  },
  {
    // 男生日本旅遊照 難波八阪神社
    image_url: new URL('@/assets/img/6.jpg', import.meta.url).href,
    description: 'Right in front of the lion’s mouth — and he was still calm as sky.',
    username: '@mosswhisper',
    tags: ['#urbanmystic', '#shrineenergy', '#liongate'],
    source_url: null,
  },
  {
    // 一家人在婚宴會場的合照
    image_url: new URL('@/assets/img/7.jpg', import.meta.url).href,
    description: 'A gentle celebration with the people who hold your history.',
    username: '@foxinthehills',
    tags: ['#familyglow', '#gatheringmagic', '#warmlight'],
    source_url: null,
  },
  {
  // 一家人聚餐的合照 生日聚餐
  image_url: new URL('@/assets/img/8.jpg', import.meta.url).href,
  description: 'Sunlight, chatter, clinking dishes — a birthday meal wrapped in warmth.',
  username: '@peachwindow',
  tags: ['#birthdaylunch', '#familysunday', '#quietjoy'],
  source_url: null,
},
  {
 // 一個男孩手裡抱著一隻貓
 image_url: new URL('@/assets/img/9.webp', import.meta.url).href,
  description: 'He didn’t say much. Just held the cat like it was the only thing that mattered.',
  username: '@mochiboy',
  tags: ['#catbond', '#quietafternoon', '#softmoment'],
  source_url: null,
  },
  {
  // 一隻可愛的小貓咪 趴在沙發上 看鏡頭
  image_url: new URL('@/assets/img/10.jpg', import.meta.url).href,
  description: 'She looked at me like she knew a secret — and wouldn’t tell unless I brought snacks.',
  username: '@couchcatclub',
  tags: ['#catvibes', '#sofalife', '#dreamyeyes'],
  source_url: null,
},
{
  // 一個金髮女孩在自己家拍照
  image_url: new URL('@/assets/img/11.webp', import.meta.url).href,
  description: 'I didn’t dress up for anything. Just wanted to capture how the light felt that day.',
  username: '@sunwindowgirl',
  tags: ['#homeselfie', '#quietlight', '#softgold'],
  source_url: null,
},
{
  // 一紅髮的外國女生 在自己房間拍照
  image_url: new URL('@/assets/img/12.webp', import.meta.url).href,
  description: 'Sometimes the mess is part of the magic.',
  username: '@gingerroom',
  tags: ['#indoorvibes', '#dreamroom', '#selfportrait'],
  source_url: null,
},
{
  // 一位在日本旅遊的少年 在日本馬路上 一邊走路一邊滑手機
  image_url: new URL('@/assets/img/13.webp', import.meta.url).href,
  description: 'Lost in Tokyo, not in a bad way.',
  username: '@cloudywalker',
  tags: ['#tokyotrip', '#everydaymagic', '#walkandwonder'],
  source_url: null,
},
{
  // 一對夫婦在日本櫻花樹下自拍
  image_url: new URL('@/assets/img/14.jpg', import.meta.url).href,
  description: 'The sakura fell like we planned it.',
  username: '@hanamihearts',
  tags: ['#sakurastory', '#together', '#cherryblossoms'],
  source_url: null,
},
{
  // 一位亞洲的長髮女孩靠在樹上微笑
  image_url: new URL('@/assets/img/15.webp', import.meta.url).href,
  description: 'The tree didn’t say anything, but I felt like it was listening.',
  username: '@treewhisper',
  tags: ['#forestpause', '#softsmile', '#stillness'],
  source_url: null,
},
{
  // 一對看起來慈祥的老爺爺老奶奶 據我所知老爺爺已經離開人世
  image_url: new URL('@/assets/img/16.jpg', import.meta.url).href,
  description: 'He’s gone now, but this is how I remember him — laughing beside her.',
  username: '@quietlegacy',
  tags: ['#forevermoment', '#familystory', '#timeless'],
  source_url: null,
},
{
  // 一個男孩在自己家裡對著鏡頭笑得非常開心
  image_url: new URL('@/assets/img/17.webp', import.meta.url).href,
  description: 'Mom said “smile like it’s your story” — so I did.',
  username: '@sunnykiddo',
  tags: ['#purejoy', '#homelight', '#smilebig'],
  source_url: null,
},

  
]

// Fisher–Yates 洗牌演算法
function shuffleArray(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// 傳給 v-for 用的資料（每次載入都不同順序）
const submissions = ref(shuffleArray(originalSubmissions))


</script>

<template>
    <div id="memes">
        <div class="mx-auto max-w-4xl pt-32 pb-10 sm:pt-48 lg:pt-40">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <!-- <div
                    class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                            class="absolute inset-0" aria-hidden="true" />Read more <span
                            aria-hidden="true">&rarr;</span></a>
                </div> -->
            </div>
            <!-- <div class="text-center">
                <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    Turn Your Photo into a Dreamy Anime World ✨
                </h1>
                <p class="mt-8 text-white text-lg font-medium text-gray-500 sm:text-xl/8">
                    Upload your photo and watch it transform into a soft, storybook-style illustration inspired by
                    iconic hand-drawn films.
                </p>
            </div> -->
            <div class="text-center">
                <!-- <h1
                    class="text-balance text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-6xl">
                    Turn Your Photo into a Dreamy Anime World ✨
                </h1> -->
                <h1
                    class="text-balance text-3xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    A dreamy, hand-drawn world is taking over the internet ✨
                </h1>

                <p
                    class="mt-6 text-white text-lg sm:text-2xl font-medium text-gray-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                    Inspired by timeless animation, soft skies, and nature’s magic <br>— these portraits feel like
                    stepping
                    into a story. Come be part of it.
                </p>
            </div>

        </div>
        <div class="mx-auto max-w-4xl">
            <div class="flex flex-col h-full">
                <!-- <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Template Img</label> -->
                <div
                    class="mt-2 flex justify-center flex-1 rounded-lg border-2 border-[#76967f] px-6 py-10 bg-[#c6d9c3] bg-opacity-80 hidden">
                    <div class="text-center">
                        <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true"></PhotoIcon>
                        <div class="mt-4 flex text-sm/6 text-gray-600">
                            <label for="file-upload"
                                class="relative cursor-pointer rounded-md bg-[#e8e6bc] font-semibold text-[#2f5169]  focus-within:ring-offset-2 hover:text-indigo-500 px-5">
                                <span>Upload a file</span>
                                <input @change="handleFileChange" id="file-upload" name="file-upload" type="file"
                                    class="sr-only" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                <!-- <div id="geminiResponse">{{ geminiResponse }}</div>  -->
                <div class="flex justify-center mt-5">
                    <router-link to="/form">
                        <button
                            class="cursor-pointer inline-block bg-[#e3dfb3] hover:bg-[#89b0a3] text-[#2d4c65] text-lg font-semibold py-3 px-6 rounded-full transition duration-300">
                            Submit Your Portrait
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- ↓ Scroll Down Arrow (Ghibli-inspired) ↓ -->
        <div class="flex justify-center mt-10 animate-bounce text-[#e3dfb3] cursor-pointer" @click="scrollToSection">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16 drop-shadow-md">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12.75L12 20.25L4.5 12.75" />
            </svg>
        </div>

    </div>

   <!-- Optional: Text-only submission callout -->
   <div class="mt-16 bg-[#f8f1e4] border border-[#d4cbb4] rounded-3xl p-6 text-center shadow-md hidden">
      <p class="text-[#5e4a3c] text-base italic max-w-2xl mx-auto">
        “Not ready to share a photo? You can still submit a line of text — a moment, a memory, a dream.”
      </p>
      <router-link to="/form">
        <button class="mt-4 bg-[#e0d6c4] hover:bg-[#cbbca8] text-[#4a3f34] font-semibold px-5 py-2 rounded-full text-sm shadow-sm transition">
          Submit a Thought ✍️
        </button>
      </router-link>
    </div>

    <section class="w-full bg-[#fdfaf4] py-12 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-center text-3xl font-bold text-[#4f4437] mb-10 drop-shadow-sm">
                Gallery of Dreamy Moments ✨
            </h2>
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                <div v-for="(item, index) in submissions" :key="index"
                    class="break-inside-avoid bg-[#f8f5e9] border border-[#d4cbb4] rounded-3xl shadow-xl p-4 transition-transform hover:scale-[1.015]">
                    <img :src="item.image_url" alt="submitted image" class="rounded-xl mb-4 shadow-md w-full" />

                    <p class="text-[#4f4437] text-sm italic mb-2">
                        {{ item.description }}
                    </p>

                    <div v-if="item.tags?.length" class="flex flex-wrap gap-2 mb-3">
                        <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex"
                            class="bg-[#e8dfcc] text-[#6d5844] text-xs font-medium px-3 py-1 rounded-full">
                            {{ tag }}
                        </span>
                    </div>

                    <div class="flex justify-between text-xs text-[#998e7b]">
                        <span>{{ item.username || 'Anonymous' }}</span>
                        <a v-if="item.source_url" :href="item.source_url" target="_blank" class="underline">
                            View ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="sec02" class="w-full mx-auto p-8 rounded-t-2xl shadow-lg bg-[#f7f5eb]">

        <div class="w-10/12 mx-auto">
            <!-- <h2 class="text-3xl sm:text-4xl font-bold text-[#3b4c4b] text-center mb-10 drop-shadow">
                A dreamy, hand-drawn world is taking over the internet<br> — come join the party ✨
            </h2> -->
            <h2 class="text-3xl sm:text-4xl font-bold text-[#3b4c4b] text-center mb-10 drop-shadow">
                You’re Not Alone — Everyone’s Getting Animated 💫
            </h2>
            <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                <!-- <div
                    class="bg-[#fdfaf4] border border-[#d4cbb4] rounded-3xl shadow-md p-4 space-y-3 transition hover:scale-[1.02]">
                    <img src="../assets/img/20250328_1709_Ghibli Style Art_remix_01jqe07abfew48zv0ybc2rcrr9.webp" class="rounded-xl shadow" />
                    <p class="text-[#4f4437] text-sm italic">"woke up feeling ghibli w/ a hint of desi 🤍"</p>
                    <div class="flex justify-between text-xs text-[#998e7b]">
                        <span>@username</span>
                        <span>March 27, 2025</span>
                    </div>
                </div> -->
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">woke up feeling ghibli w/ a hint of desi 🤍 <a
                            href="https://t.co/Vzn70VWp1h">pic.twitter.com/Vzn70VWp1h</a></p>&mdash; Vas | Capx AI
                    (@VasaviBhatia) <a
                        href="https://twitter.com/VasaviBhatia/status/1905206592741441997?ref_src=twsrc%5Etfw">March 27,
                        2025</a>
                </blockquote>
                <blockquote class="twitter-tweet">
                    <p lang="qme" dir="ltr">🥹🤌🏻 <a href="https://t.co/LWx4byCice">pic.twitter.com/LWx4byCice</a></p>
                    &mdash;
                    Srishti shukla (@dusky_drone) <a
                        href="https://twitter.com/dusky_drone/status/1905479249731178975?ref_src=twsrc%5Etfw">March 28,
                        2025</a>
                </blockquote>
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">fine, here is mine and simba :b (I loved this) <a
                            href="https://t.co/51Bar3jVjC">pic.twitter.com/51Bar3jVjC</a></p>&mdash; Shivangi
                    (@Shivangi_scene) <a
                        href="https://twitter.com/Shivangi_scene/status/1905599702072005013?ref_src=twsrc%5Etfw">March
                        28, 2025</a>
                </blockquote>


                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">Late to the ghibli party? 🙈 <a
                            href="https://t.co/KjVNz1zTqC">pic.twitter.com/KjVNz1zTqC</a></p>&mdash; Khushboo Verma
                    (@khushbooverma_) <a
                        href="https://twitter.com/khushbooverma_/status/1905650364356936020?ref_src=twsrc%5Etfw">March
                        28, 2025</a>
                </blockquote>
                <blockquote class="twitter-tweet">
                    <p lang="qme" dir="ltr">🥺❤️ <a href="https://t.co/lDU7MtcbIm">pic.twitter.com/lDU7MtcbIm</a></p>
                    &mdash;
                    Urvashi 🦢 (@urvashiicodes) <a
                        href="https://twitter.com/urvashiicodes/status/1905281543117123750?ref_src=twsrc%5Etfw">March
                        27,
                        2025</a>
                </blockquote>
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">best use of 23$ <a
                            href="https://t.co/ue8WzrstTJ">pic.twitter.com/ue8WzrstTJ</a></p>&mdash; khushi
                    (@meinnhibataungi) <a
                        href="https://twitter.com/meinnhibataungi/status/1905330719620301184?ref_src=twsrc%5Etfw">March
                        27, 2025</a>
                </blockquote>
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">Wow!!!! 🥳 I finally got my first piece of Ghibli art! Thanks <a
                            href="https://twitter.com/pseudokid?ref_src=twsrc%5Etfw">@pseudokid</a> <a
                            href="https://t.co/AfYaS6d31k">pic.twitter.com/AfYaS6d31k</a></p>&mdash; Lis Law
                    (@szewailaw_lis) <a
                        href="https://twitter.com/szewailaw_lis/status/1905313989120458815?ref_src=twsrc%5Etfw">March
                        27, 2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">Kapehe is back from the Vercel offsite!<br><br>Date night to our first
                        Colorado hockey game! <a href="https://t.co/kiYIXcxbzV">pic.twitter.com/kiYIXcxbzV</a></p>
                    &mdash; Chris Sev (@chris__sev) <a
                        href="https://twitter.com/chris__sev/status/1905486565062717504?ref_src=twsrc%5Etfw">March 28,
                        2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">one with love of my life ❤️ <a
                            href="https://t.co/NZJtWVlmUZ">pic.twitter.com/NZJtWVlmUZ</a></p>&mdash; Rishab Kumar
                    (@rishabincloud) <a
                        href="https://twitter.com/rishabincloud/status/1905266134854545644?ref_src=twsrc%5Etfw">March
                        27, 2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">See you in London next week at my first ever KubeCon! I&#39;ll bring the
                        IOPS. <a href="https://t.co/T6tQSZqyNQ">https://t.co/T6tQSZqyNQ</a> <a
                            href="https://t.co/jsv6S04NKF">pic.twitter.com/jsv6S04NKF</a></p>&mdash; Holly Guevara
                    (@hollylawly) <a
                        href="https://twitter.com/hollylawly/status/1905744524787548267?ref_src=twsrc%5Etfw">March 28,
                        2025</a>
                </blockquote>


                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">Someone stop me or I’ll AI my entire photo gallery! <a
                            href="https://t.co/1NtMWdGhqV">pic.twitter.com/1NtMWdGhqV</a></p>&mdash; Varsha Saha
                    (@saha_varsha) <a
                        href="https://twitter.com/saha_varsha/status/1905487444621070391?ref_src=twsrc%5Etfw">March 28,
                        2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">This would be me in a different world <a
                            href="https://t.co/M5U1K7oYWt">pic.twitter.com/M5U1K7oYWt</a></p>&mdash; Alena Tikhomirova
                    (@Alennushkaa) <a
                        href="https://twitter.com/Alennushkaa/status/1905646557854044306?ref_src=twsrc%5Etfw">March 28,
                        2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">Close enough <a
                            href="https://twitter.com/hashtag/studioghibli?src=hash&amp;ref_src=twsrc%5Etfw">#studioghibli</a>
                        <a href="https://t.co/xZYHLIkEwt">pic.twitter.com/xZYHLIkEwt</a>
                    </p>&mdash; Girl loves coding
                    👩‍💻 (@girllovescoding) <a
                        href="https://twitter.com/girllovescoding/status/1905638724932673756?ref_src=twsrc%5Etfw">March
                        28, 2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="zh" dir="ltr">人生终究还是免不了脱俗，我也来生成一张 <a
                            href="https://t.co/1Gdmde88Sk">pic.twitter.com/1Gdmde88Sk</a></p>&mdash; 萃猫警长
                    (@chimaosheriff) <a
                        href="https://twitter.com/chimaosheriff/status/1905127985465704690?ref_src=twsrc%5Etfw">March
                        27, 2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">Ghibli Sweeney <a
                            href="https://t.co/jxbmsL5O5x">pic.twitter.com/jxbmsL5O5x</a></p>&mdash; Serf
                    (@TheRoyalSerf) <a
                        href="https://twitter.com/TheRoyalSerf/status/1904973085574566341?ref_src=twsrc%5Etfw">March 26,
                        2025</a>
                </blockquote>

                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">You do not sell your Bitcoin. <a
                            href="https://t.co/PDw8CP0apn">pic.twitter.com/PDw8CP0apn</a></p>&mdash; Michael Saylor⚡️
                    (@saylor) <a href="https://twitter.com/saylor/status/1905233338782134525?ref_src=twsrc%5Etfw">March
                        27, 2025</a>
                </blockquote>


            </div>

        </div>


    </section>

    <section class="w-full bg-[#fdfaf4] py-12 px-4 hidden">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-center text-3xl font-bold text-[#4f4437] mb-10 drop-shadow-sm">
                Gallery of Dreamy Moments ✨
            </h2>
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                <!-- Card Start -->
                <div
                    class="break-inside-avoid bg-[#f8f5e9] border border-[#d4cbb4] rounded-3xl shadow-xl p-4 transition-transform hover:scale-[1.015]">
                    <img src="../assets/img/1.webp"
                        alt="tweet image" class="rounded-xl mb-4 shadow-md w-full" />
                    <p class="text-[#4f4437] text-sm italic mb-2">
                        "woke up feeling ghibli w/ a hint of desi 🤍"
                    </p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span
                            class="bg-[#e8dfcc] text-[#6d5844] text-xs font-medium px-3 py-1 rounded-full">#softsky</span>
                        <span
                            class="bg-[#e8dfcc] text-[#6d5844] text-xs font-medium px-3 py-1 rounded-full">#ghiblistyle</span>
                    </div>
                    <div class="flex justify-between text-xs text-[#998e7b]">
                        <span>@VasaviBhatia</span>
                        <a href="https://twitter.com/VasaviBhatia/status/1905206592741441997" target="_blank"
                            class="underline">View ↗</a>
                    </div>
                </div>
                <!-- Card End -->

                <!-- Card 2 -->
                <div
                    class="break-inside-avoid bg-[#f8f5e9] border border-[#d4cbb4] rounded-3xl shadow-xl p-4 transition-transform hover:scale-[1.015]">
                    <img src="../assets/img/2.webp"
                        alt="tweet image" class="rounded-xl mb-4 shadow-md w-full" />
                    <p class="text-[#4f4437] text-sm italic mb-2">
                        "🥺❤️"
                    </p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span
                            class="bg-[#e8dfcc] text-[#6d5844] text-xs font-medium px-3 py-1 rounded-full">#emotional</span>
                    </div>
                    <div class="flex justify-between text-xs text-[#998e7b]">
                        <span>@urvashiicodes</span>
                        <a href="https://twitter.com/urvashiicodes/status/1905281543117123750" target="_blank"
                            class="underline">View ↗</a>
                    </div>
                </div>

                <div
                    class="break-inside-avoid bg-[#f8f5e9] border border-[#d4cbb4] rounded-3xl shadow-xl p-4 transition-transform hover:scale-[1.015]">
                    <img src="../assets/img/3.webp"
                        alt="tweet image" class="rounded-xl mb-4 shadow-md w-full" />
                    <p class="text-[#4f4437] text-sm italic mb-2">
                        "🥺❤️"
                    </p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span
                            class="bg-[#e8dfcc] text-[#6d5844] text-xs font-medium px-3 py-1 rounded-full">#emotional</span>
                    </div>
                    <div class="flex justify-between text-xs text-[#998e7b]">
                        <span>@urvashiicodes</span>
                        <a href="https://twitter.com/urvashiicodes/status/1905281543117123750" target="_blank"
                            class="underline">View ↗</a>
                    </div>
                </div>

                <div
                    class="break-inside-avoid bg-[#f8f5e9] border border-[#d4cbb4] rounded-3xl shadow-xl p-4 transition-transform hover:scale-[1.015]">
                    <img src="../assets/img/2.webp"
                        alt="tweet image" class="rounded-xl mb-4 shadow-md w-full" />
                    <p class="text-[#4f4437] text-sm italic mb-2">
                        "🥺❤️"
                    </p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span
                            class="bg-[#e8dfcc] text-[#6d5844] text-xs font-medium px-3 py-1 rounded-full">#emotional</span>
                    </div>
                    <div class="flex justify-between text-xs text-[#998e7b]">
                        <span>@urvashiicodes</span>
                        <a href="https://twitter.com/urvashiicodes/status/1905281543117123750" target="_blank"
                            class="underline">View ↗</a>
                    </div>
                </div>

                <!-- Add more cards as needed -->
            </div>
        </div>
    </section>

    
 
    <footer class="bg-[#d9e1dc] text-[#3d4b49] py-10  shadow-inner rounded-b-2xl">
        <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">

            <!-- 左邊 Logo 或標題 -->
            <div class="text-xl font-semibold tracking-tight">
                Dreamy Portraits 🌿
            </div>

            <!-- 社群連結 -->
            <div class="flex gap-5 text-2xl">
                <a href="https://twitter.com/yourhandle" target="_blank" class="hover:text-[#1d9bf0] transition">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/yourhandle" target="_blank" class="hover:text-pink-500 transition">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="mailto:your@email.com" class="hover:text-green-600 transition">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>

            <!-- Footer 字 -->
            <p class="text-sm text-gray-600 text-center sm:text-right">
                © 2025 Dreamy Portraits. All rights reserved.
            </p>
        </div>
    </footer>


</template>

<style lang="scss">
#memes {
    background-image: url(../assets/img/memes.webp);
    /* 你可以換成自己的背景圖 */
    background-size: cover;
    background-position: center;
    height: 100vh;

    @media (max-width: 767px) {
        height: 80vh;
    }

}
</style>