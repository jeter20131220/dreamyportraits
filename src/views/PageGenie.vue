<script setup>
import { ref, reactive } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, PhotoIcon } from '@heroicons/vue/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
import axios from "axios";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Templates', href: '#' },
]



const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const mobileMenuOpen = ref(false)




const selectedFile = ref(null);
const fileName = ref('');

const geminiResponse = ref('');


// 處理檔案選擇
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name;  // 顯示檔名
    selectedFile.value = file;   // 儲存檔案
  }
};

const activeTab = ref('preview');

const codeContent = ref(``);

const previewContent = ref({
  html: ``,
  css: ``
});

const isGenerate = ref(false);

const isLoading = ref(false);


const serviceDescription = ref('saas web ladingpage section '); // 新增服務描述欄位

const layout = ref('saas landing page section ');
const theme = ref('light');
const description = ref('');





const uploadimg = async () => {
  // if (!selectedFile.value.files[0]) {
  //   alert("請選擇檔案");
  //   return;
  // }

  isLoading.value = true; // 開始請求時設定為 true

  const formData = new FormData();
  if (selectedFile.value) {
    formData.append('file', selectedFile.value);
  } else {
    console.log("No file selected.");
  }
  formData.append('service_description', serviceDescription.value);
  formData.append('layout', layout.value);
  formData.append('theme', theme.value);
  formData.append('description', description.value);


  try {
    const { data } = await axios.post("http://0.0.0.0:8000/upload2", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("上傳成功", data);
    geminiResponse.value = data.gemini_response;
    const cleanedHtml = geminiResponse.value.replace(/^```(?:html)?[\s\n]*|```[\s\n]*$/g, "").trim();
    console.log(cleanedHtml);
    previewContent.value = {
      html: cleanedHtml, // 來自 API 的 HTML 內容
      css: '' // 你可以在這裡插入 CSS
    };
    codeContent.value = cleanedHtml;
    isLoading.value = false;
    isGenerate.value = true
  } catch (error) {
    console.error("上傳失敗", error);
  }
};




// // 上傳檔案文章檔案
// const uploadimg = async () => {
//   isLoading.value = true; // 開始請求時設定為 true

//   isGenerate.value=false;



//   let url = `http://0.0.0.0:8000/upload`

//   console.log(url,formData);
//   try {
//     isGenerate.value=true;
//     const response = await axios.post(url, formData, {

//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log(response.data); // 打印返回的結果
//     geminiResponse.value = response.data.gemini_response;
//     const cleanedHtml = geminiResponse.value.replace(/^```(?:html)?[\s\n]*|```[\s\n]*$/g, "").trim();
//     previewContent.value = {
//             html: cleanedHtml, // 來自 API 的 HTML 內容
//             css: '' // 你可以在這裡插入 CSS
//         };
//         codeContent.value = cleanedHtml;


//     // 處理上傳成功的邏輯
//   } catch (error) {
//     console.error('Error uploading file:', error);
//   } finally {
//     isLoading.value = false;
//   }
// };



// 切換 tab
const setActiveTab = (tab) => {
  activeTab.value = tab;
  // 當切換到預覽 tab 時，使用 setTimeout 延遲更新預覽
  if (tab === 'preview') {
    setTimeout(updatePreview, 0); // 延遲執行 updatePreview
  }
};

// 更新預覽內容
const updatePreview = () => {
  // 從編輯區塊的程式碼中分離 HTML 和 CSS
  const htmlContent = codeContent.value.replace(/<style[\s\S]*?<\/style>/, '').trim();
  const cssContent = (codeContent.value.match(/<style[\s\S]*?<\/style>/) || [])[0] || '';

  previewContent.value = {
    html: htmlContent,
    css: cssContent,
  };

  // 如果有 CSS，動態插入到頁面中
  if (cssContent) {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = cssContent;
    document.head.appendChild(styleTag);
  }
};

</script>

<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="" /> -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm/6 font-semibold text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{
                    item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-1 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>

      <div class="mx-auto max-w-2xl pt-32 pb-20 sm:pt-48 lg:pt-40">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Sectify – AI-Powered
            Page Section Generator</h1>
          <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Create beautiful, responsive web
            sections in seconds with our AI-powered generator. No design skills required.</p>
          <!-- <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div> -->

        </div>
      </div>
      <div class="mx-auto max-w-4xl">
        <div class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div class="flex flex-col h-full">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Template Img</label>
            <div class="mt-2 flex justify-center flex-1 rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true"></PhotoIcon>
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input @change="handleFileChange" id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <!-- <div id="geminiResponse">{{ geminiResponse }}</div>  -->

          </div>

          <div class="flex flex-col h-full">
            <label class="block text-sm font-medium text-gray-700 font-semibold">Service Description</label>
            <textarea id="message" v-model="description"
              class="mt-3 w-full min-h-[200px] max-h-[600px] flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none bg-transparent">
</textarea>
            <button @click="uploadimg"
              class="w-full mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
              generate
            </button>
          </div>


          <div class="p-4 bg-gray-100 rounded-xl shadow-lg w-full max-w-xl">
            <!-- Input Field -->
            <div class="flex items-center border border-gray-300 rounded-lg p-3 bg-white">
              <input type="text" placeholder="How can Grok help?" class="w-full outline-none text-gray-700" />
              <!-- Upload Icon -->
              <label class="cursor-pointer ml-3">
                <input type="file" class="hidden" @change="handleFileUpload" accept="image/*" />
                📎
              </label>
            </div>

            <!-- Image Preview -->
            <div v-if="imageUrl" class="mt-3 relative w-20 h-20">
              <img :src="imageUrl" alt="Preview" class="w-full h-full object-cover rounded-lg shadow" />
              <button class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs"
                @click="removeImage">
                ✕
              </button>
            </div>
          </div>
          <!-- <div >
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Cover photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mt-4 font-semibold">Description</label>
                <textarea id="message" 
                    class="mt-3 w-full  p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none">
                </textarea>
          </div> -->

        </div>

      </div>

      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
  <div class="overflow-hidden bg-white py-24 sm:py-32 hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
              workflow</p>
            <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 size-5 text-indigo-600"
                    aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
          alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432" height="1442" />
      </div>
    </div>
  </div>

  <div v-if="isGenerate" class="px-4 mt-44 pb-32">
    <div class="flex space-x-4 border-b justify-self-end mb-3">
      <button :class="['py-2 px-4', { 'border-b-2 border-blue-500': activeTab === 'preview' }]"
        @click="setActiveTab('preview')">
        preview
      </button>
      <button :class="['py-2 px-4', { 'border-b-2 border-blue-500': activeTab === 'code' }]"
        @click="setActiveTab('code')">
        <> code
      </button>
    </div>

    <!-- Content based on active tab -->
    <div v-if="activeTab === 'preview'" class="p-4 border rounded-lg">
      <div v-html="previewContent.html" class="editable-preview overflow-hidden relative"></div>
    </div>

    <div v-if="activeTab === 'code'" class="p-4 bg-gray-100 rounded-lg">
      <textarea v-model="codeContent" class="w-full h-screen p-2 border rounded-lg bg-gray-900 text-white font-mono"
        spellcheck="false"></textarea>
    </div>
  </div>

  <div v-if="isLoading" class="fixed inset-0 bg-slate-600 opacity-50 flex items-center justify-center z-50">
    <div class="flex items-center space-x-4">
      <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path fill="currentColor" d="M4 12c0-1.1.9-2 2-2s2 .9 2 2-1.1 2-2 2-2-.9-2-2z"></path>
      </svg>
      <span class="text-white">Loading...</span>
    </div>
  </div>


</template>



<style scss scoped></style>