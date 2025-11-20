<template>
  <div>
    <section class="my-10">
      <Container class=" flex justify-center items-center">
        <!-- fist form -->
        <div v-if="first_form" class="  lg:w-2/3 md:w-[90%]  duration-500 du ease-in-out">
          <div :class="first_animation ? '   -translate-x-[200rem] ' : 'translate-x-0'"
            class=" duration-500 ease-in-out space-y-4 md:space-x-10">
            <div class="text-center">
              <div class="py-2">
                <UiTypographyH2>
                  <span class="font-bold">Step 2</span>
                </UiTypographyH2>
              </div>
              <UiTypographyH3>Trademark Details</UiTypographyH3>
            </div>

            <div class="w-full shadow-xl py-5 border">
              <div class="space-y-3">
                <UiTypographyH3 class="text-center">
                  <span class="font-bold">Fill out this brief form. It takes less than 60 seconds!</span>
                </UiTypographyH3>

                <div class="bg-gray-100 border-l-4 py-4 px-4 border-l-accent-600">
                  <UiTypographyP>
                    <span class="font-bold">Trademark Details</span>
                  </UiTypographyP>
                </div>

                <form @submit.prevent="first_submit" ref="formRef" class="md:px-4 px-2 md:pt-4 pt-2 space-y-7">

                  <!-- Trademark Type -->
                  <div>
                    <label>What are you trying to Trademark?</label>
                    <div class="pt-3 flex gap-6">
                      <FormCheckbox v-model="form.name" label="Name" />
                      <FormCheckbox v-model="form.logo" label="Logo" />
                      <FormCheckbox v-model="form.slogan" label="Slogan" />
                    </div>
                  </div>


                  <!-- for logo and name -->
                  <div class=" flex  gap-6 justify-center items-center">




                    <!-- Logo Upload -->
                    <div v-if="form.logo" :required="form.logo" class="flex justify-center  items-center gap-2 py-3">





                      <div
                        class="  w-40 h-40 rounded-full border  flex flex-col items-center justify-center bg-accent-400 duration-500 ease-in-out hover:bg-slate-800 cursor-pointer overflow-hidden"
                        @click="triggerFileInput">
                        <!-- BEFORE UPLOAD = SHOW CAMERA ICON -->
                        <div v-if="!logoPreview" class="text-white   flex flex-col items-center">
                          <!-- Camera Icon SVG -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-1 opacity-70" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 7h4l2-3h6l2 3h4v12H3V7zm9 3a4 4 0 110 8 4 4 0 010-8z" />
                          </svg>
                          <span class="text-xs text-center">Tap to Upload <br> Logo Mark</span>
                        </div>

                        <!-- AFTER UPLOAD = SHOW IMAGE PREVIEW -->
                        <img v-else :src="logoPreview" class="w-full h-full object-cover" />
                      </div>

                      <!-- HIDDEN FILE INPUT -->
                      <input ref="hiddenFile" type="file" class="hidden" accept="image/*" @change="handleLogoUpload" />



                    </div>

                    <!-- Mark Name -->
                    <div v-if="form.name" class=" w-full">
                      <FormInput :required="form.markname" v-model:inputValue="form.relname" label="Enter Mark Here"
                        type="text" name="markName" />
                    </div>


                  </div>

                  <!-- Slogan -->
                  <div class="" v-if="form.slogan">
                    <FormInput v-model:inputValue="form.slogan_name" :required="form.slogan" label="Enter Slogan Here"
                      type="text" name="slogan" />

                  </div>

                  <!-- Trademark Category -->
                  <FormSelect v-model:selectedOption="form.trademarkCategory" :required="true"
                    label="Please select the entity type that is applying for the trademark:" :options="[
                      { value: 'Individual', text: 'Individual' },
                      { value: 'Corporation', text: 'Corporation' },
                      { value: 'Partnership', text: 'Partnership' },
                      { value: 'Sole Proprietorship', text: 'Sole Proprietorship' },
                      { value: 'Multiple Individuals', text: 'Multiple Individuals' },
                      { value: 'Unincorporated Association', text: 'Unincorporated Association' },
                      { value: 'Charitable Corporation', text: 'Charitable Corporation' },
                      { value: 'Charitable Non-Profit Corporation', text: 'Charitable Non-Profit Corporation' },
                      { value: 'Foundation', text: 'Foundation' },
                      { value: 'Non-Profit Corporation', text: 'Non-Profit Corporation' },
                      { value: 'Non-Profit Organization', text: 'Non-Profit Organization' },
                      { value: 'Other Business', text: 'Other Business Type' }
                    ]" />

                  <!-- Business Details -->
                  <FormInput v-model:inputValue="form.business_name" :required="true" label="Business Name:" type="text"
                    name="businessName" />
                  <FormInput v-model:inputValue="form.business_industry" :required="true" label="Business Industry:"
                    type="text" name="businessIndustry" />
                  <FormTextarea v-model:inputValue="form.business_description" :required="true"
                    label="Business Description:" name="businessDescription" />

                  <!-- Submit Button -->
                  <UiButtonsPrimary :loading="isLoading" type="submit"><span>CONTINUE</span></UiButtonsPrimary>
                </form>

              </div>
            </div>
          </div>
        </div>

        <!-- second form -->
        <div v-if="second_form" class="lg:w-2/3  md:w-[90%] ">
          <div :class="first_animation ? '  translate-x-0 ' : '-translate-x-[200rem]'"
            class=" w-full duration-500 ease-in-out space-y-4 md:space-x-10">

            <div class=" pb-10">
              <div class="py-2">
                <UiTypographyH2>
                  Secure Payment Globally!
                </UiTypographyH2>
              </div>

            </div>

            <div class="w-full shadow-xl py-4 border ">
              <div class="">
                <UiTypographyH3 class="text-center">
                  <span class="font-bold">Total Payable $45</span>
                </UiTypographyH3>

                <div class=" bg-accent-200 border-l-4 py-4 px-4 border-l-accent-600">
                  <UiTypographyH3 class=" font-bold">Pay with your credit card </UiTypographyH3>
                </div>

                <form @submit.prevent="submitForm" class="md:px-4 px-2 md:pt-4 pt-7 sm:space-y-7   space-y-4">

                  <!-- Trademark Type -->
                  <div>

                    <div class="pt-1 flex gap-6">
                      <img src="@/assets/images/credit_icons.png" alt="">
                    </div>
                  </div>

                  <div class=" gap-2 block space-y-4 sm:space-y-0 sm:flex">
                    <FormInput class=" w-1/3" :required="true" v-model:inputValue="form.full_name" type="text"
                      :placeholder="true" placeholderLabel="Full Name" />
                    <FormInput type="text" :required="true" :placeholder="true" v-model:inputValue="form.last_name"
                      placeholderLabel="Last Name" />

                  </div>

                  <div class=" gap-2 block space-y-4 sm:space-y-0 sm:flex">
                    <div class=" md:w-1/2 w-full">
                      <FormInput v-model:inputValue="cardNumber" :required="true" placeholderLabel="4111 1111 1111 1111"
                        :placeholder="true" type="tex" @input="formatCardNumber" name="businessName" />
                    </div>
                    <div class=" block space-y-4 sm:space-y-0 sm:flex gap-4 md:w-1/2 w-full">
                      <FormInput v-model:inputValue="expiry" :required="true" placeholderLabel="MM / YY"
                        :placeholder="true" type="text" @input="formatExpiry" name="businessName" />
                      <FormInput v-model:inputValue="cvv" @input="formatCVV" :required="true" placeholderLabel="cvv"
                        :placeholder="true" type="text" name="expireddate" />
                    </div>
                  </div>


                  <!-- Business Details -->

                  <FormInput placeholderLabel="Address" :required="true" v-model:inputValue="form.address"
                    :placeholder="true" type="text" name="address" />
                  <div class=" block space-y-4 sm:space-y-0 sm:flex gap-2">
                    <FormInput placeholderLabel="Country" :required="true" v-model:inputValue="form.country"
                      :placeholder="true" type="text" name="Country" />
                    <FormInput placeholderLabel="State" :required="true" v-model:inputValue="form.state"
                      :placeholder="true" type="text" name="State" />
                    <FormInput placeholderLabel="City" :required="true" v-model:inputValue="form.city"
                      :placeholder="true" type="text" name="City" />
                    <FormInput placeholderLabel="Zip" :required="true" v-model:inputValue="form.zip" :placeholder="true"
                      type="text" name="Zip" />

                  </div>

                  <!-- Submit Button -->
                  <UiButtonsPrimary :loading="secondLoading" type="submit"><span>Pay Now !</span></UiButtonsPrimary>
                </form>

              </div>
            </div>
          </div>
        </div>


        <!-- thanks Template  -->
        <div v-if="thank_page" class=" md:w-[90%] w-full space-y-4 md:space-x-10">


          <div class="w-ful rounded-xl  overflow-hidden l shadow-xl  border ">
            <div class="">


              <div class="  bg-primary  text-center py-4 px-4 ">
                <UiTypographyH3 class=" text-white font-bold">Thank You </UiTypographyH3>
              </div>
              <div class=" px-4">
                <UiTypographyP class="text-center text-gray-300 p-6">
                  You have successfully submitted application for your trademark registration!
                </UiTypographyP>

                <UiTypographyP class=" text-center te">
                  We have received all your details and our case filing experts are currently reviewing your trademark
                  application. Please note that we have not yet charged your application fee. You will recieve
                  confirmation call by the assigned case filing officer within 12 hours, after which we will charge the
                  trademark application fee and initiate your trademark registration process.
                </UiTypographyP>

                <UiTypographyP class="text-center text-gray-300 p-6">
                  Should you have any query, please feel free to reach us at +1 (415) 579 1344 or
                  info@trademarklegalshield.com.
                </UiTypographyP>
              </div>


            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import { useFormStore } from "@/stores/formStore";
import { useRouter } from 'vue-router'
const router = useRouter()
const formRef = ref(null);
import emailjs from "@emailjs/browser";
// Pinia store
const formStore = useFormStore();
const personal_details = formStore.form;
const secondLoading = ref(false)
// Form states
const first_animation = ref(false);
const first_form = ref(true);
const second_form = ref(false);
const thank_page = ref(false);
const isLoading = ref(false);

// Main form object
const form = ref({
  name: false,
  markname: '',
  phone_number: "",
  email: "",
  message: "",
  logo: true,
  logofil: null,
  slogan: false,
  slogan_name: "",
  relname: "",
  business_type: "",
  business_name: "",
  business_industry: "",
  business_description: "",
  trademarkCategory: "",
  full_name: "",
  last_name: "",
  address: "",
  country: "",
  state: "",
  city: "",
  zip: "",
});


// Auth
if (!personal_details.email || !personal_details.phone) {
  console.log('get back');

  router.push('./contact-us')
}
form.value.email = personal_details.email;
form.value.phone_number = personal_details.phone;
form.value.message = personal_details.message


// File input refs
const hiddenFile = ref(null);
const logoPreview = ref(null);

// Trigger hidden file input
const triggerFileInput = () => {
  hiddenFile.value.click();
};

// Handle logo upload
const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.logofil = file;
    logoPreview.value = URL.createObjectURL(file);
  }
};

// WATCH LOGO CHECKBOX → CLEAR FILE WHEN UNCHECKED
watch(
  () => form.value.logo,
  (newVal) => {
    if (!newVal) {
      form.value.logofil = null;
    }
  }
);

// FIRST FORM SUBMIT
const first_submit = () => {
  isLoading.value = true;

  setTimeout(() => {
    if (!form.value.name && !form.value.logo && !form.value.slogan) {
      alert("Please select at least one: Name, Logo or Slogan.");
      isLoading.value = false;
      return;
    }

    if (form.value.logo && form.value.logofil === null) {
      alert("Please upload a logo file.");
      isLoading.value = false;
      return;
    }

    if (!form.value.trademarkCategory) {
      alert("Please select a trademark category.");
      isLoading.value = false;
      return;
    }

    first_animation.value = true;

    setTimeout(() => {
      first_form.value = false;
      second_form.value = true;
      isLoading.value = false;
    }, 100);
  }, 400);
};



// SEND MESSAGGE TO EMAIL
const sendEmail = () => {
  // Construct data object for EmailJS
  const data = {
    fullname: personal_details.fullname,
    email: form.value.email,
    markname: form.value.markname,
    phone_number: form.value.phone_number,
    business_name: form.value.business_name,
    business_description: form.value.business_description,
    slogan_name: form.value.slogan_name,
    business_type: form.value.business_type,
    message: form.value.message,
    trademarkCategory: form.value.trademarkCategory,
    full_name: form.value.full_name,
    address: form.value.address,
    country: form.value.country,
    state: form.value.state,
    city: form.value.city,

  };

  emailjs
    .send("service_t82t6hd", "template_7pr5mtt", data, {
      publicKey: "xEftJyIuvEr9QtFsD",
    })
    .then(() => {
      second_form.value = false;
      thank_page.value = true;
      secondLoading.value = false
    })
    .catch((err) => {
      console.log("FAILED...", err);

    });
};

// SECOND FORM SUBMIT (PAYMENT)
const submitForm = () => {
  secondLoading.value = true
  sendEmail()

};

// CREDIT CARD FORMATTING
const cardNumber = ref("");
const expiry = ref("");
const cvv = ref("");

const formatCardNumber = () => {
  let digits = cardNumber.value.replace(/\D/g, "").substring(0, 16);
  cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim();
};

const formatCVV = () => {
  cvv.value = cvv.value.replace(/\D/g, "").substring(0, 4);
};

const formatExpiry = () => {
  let digits = expiry.value.replace(/\D/g, "").substring(0, 4);
  if (digits.length >= 3) {
    expiry.value = digits.replace(/(\d{2})(\d{1,2})/, "$1/$2");
  } else {
    expiry.value = digits;
  }
};


// ON MOUNT → Set email and phone from store
onMounted(() => {

});
</script>
