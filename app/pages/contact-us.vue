<template>
    <div>
        <Trademarkform ref="trademarkformFunctions" />
        <!-- Hero section contact us -->
        <section class=" bg-[url('@/assets/images/inner-banner.png')] pb-10 pt-20 ">
            <Container>
                <div class="md:w-1/2 text-white">
                    <UiTypographyP color="white">
                        <span class=" font-bold">Have questions or need help?</span>
                    </UiTypographyP>
                    <div class=" py-2">
                        <UiTypographyH1 color="white">
                            <span class="  font-bold">Contact Us</span>
                        </UiTypographyH1>
                    </div>
                    <UiTypographyP color="white">
                        Reach out to our expert team — we're here to guide you through every step, answer your
                        questions, and ensure a smooth experience from start to finish.
                    </UiTypographyP>
                    <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                        <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                        <UiButtonsSecondary @click="" color="white"><span>Live Chat</span></UiButtonsSecondary>
                    </div>

                </div>
            </Container>
        </section>

        <!-- List all the contact details here -->
        <section class="">
            <Container>
                <div class="flex md:flex-row flex-col  items-center justify-center md:space-y-0 space-y-4   md:space-x-10">
                    <div class="md:w-[300px] sm:w-[250px] space-y-4">
                        <!-- phone number list -->
                        <div>
                            <div class=" group border sm:p-8 p-4 flex flex-col space-y-4 w-full  justify-center items-center">
                                <!-- contact card -->
                                <div
                                    class=" rounded-full sm:p-6 p-3  bg-accent-100 group-hover:bg-white flex w-fit items-center">
                                    <img src="@/assets/images/phone-icon.png" class=" w-7" alt="phone Icon">
                                </div>

                                <!-- list of contact details -->
                                <div class=" text-center">
                                    <UiTypographyH3>
                                        <span class=" font-bold">Contact Number</span>
                                    </UiTypographyH3>
                                    <UiTypographyP>
                                        <span class="  text-center font-bold">
                                            +1 (415) 579 1344 <br>
                                            +1 (415) 831 7599
                                        </span>
                                    </UiTypographyP>
                                </div>

                            </div>
                        </div>
                        <!-- email details -->
                        <div>
                            <div class=" border p-8 flex flex-col space-y-4 w-full  justify-center items-center">
                                <!-- contact card -->
                                <div
                                    class=" rounded-full p-6  bg-accent-100 group-hover:bg-white  flex w-fit items-center">
                                    <img src="@/assets/images/mail-icon.png" class=" w-7" alt="phone Icon">
                                </div>

                                <!-- list of contact details -->
                                <div class=" text-center">
                                    <UiTypographyH3>
                                        <span class=" font-bold">Email</span>
                                    </UiTypographyH3>
                                    <UiTypographyP>
                                        <span class="  text-center font-bold">
                                            info@trademarklegalshield.com
                                        </span>
                                    </UiTypographyP>
                                </div>

                            </div>
                        </div>
                        <!-- Address number list -->
                        <div>
                            <div class=" border p-8 flex  flex-col space-y-4 w-full  justify-center items-center">
                                <!-- contact card -->
                                <div
                                    class=" rounded-full p-6  bg-accent-100 group-hover:bg-white   flex w-fit items-center">
                                    <img src="@/assets/images/location.png" class=" w-7" alt="location Icon">
                                </div>

                                <!-- list of contact details -->
                                <div class=" text-center">
                                    <UiTypographyH3>
                                        <span class=" font-bold">Address</span>
                                    </UiTypographyH3>
                                    <UiTypographyP>
                                        <span class="  text-center font-bold">
                                            1423 Broadway, Oakland, CA 94612
                                        </span>
                                    </UiTypographyP>
                                </div>

                            </div>
                        </div>




                    </div>

                    <div class="  w-full shadow-xl  border p-2 md:p-7">
                        <div class=" space-y-3">
                            <div class=" md:px-4 px-2 md:py-2 py-1  w-fit bg-accent-300">
                                <UiTypographyP><span class=" font-semibold text-white">Contact Us</span></UiTypographyP>
                            </div>

                            <UiTypographyH2> <span class=" font-bold">Protect Your Brand’s Identity Trademark
                                    Registration</span></UiTypographyH2>

                            <form action="" class=" md:px-4 px-2 md:pt-4 pt-2 space-y-7">
                                <FormInput v-model:inputValue="form.fullname" label="Full Name" type="text" :required="true" name="fullname" />

                                <FormInput v-model:inputValue="form.email" label="Email Address" :required="true" name="email" />

                                <FormInput v-model:inputValue="form.phone" label="Phone Number" :required="true" type="tel" name="phone" />

                                <FormTextarea v-model:inputValue="form.message" label="Message" :required="true" name="message" />
                                <UiButtonsPrimary @click="submit" :loading="false"  type="submit"><span>Susbmit</span></UiButtonsPrimary>
                            </form>

                        </div>
                    </div>
                </div>
            </Container>
        </section>

        <section>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52985044.58842398!2d-161.9138848282545!3d35.85021790022551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1763288173138!5m2!1sen!2sng" width="100%" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </section>

        

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFormStore } from '@/stores/formStore'
const formStore = useFormStore()
const form = formStore.form  
const isLoading = ref(false)


import { useRouter } from 'vue-router'

const router = useRouter()

const trademarkformFunctions = ref(null)


// LOAD SAVED DATA WHEN PAGE OPENS




// SAVE FORM ON SUBMIT
const submit = async (e) => {
 
     await sendEmail()
e.preventDefault()
setTimeout(()=>{
  
   router.push('/forms')
 isLoading.value = false

}, 500)


} 



// OPEN FORM FUNCTION
const openform = () => {
  trademarkformFunctions.value.openForm()
}
</script>
