<template>
    <div>
        <Trademarkform ref="trademarkformFunctions" />
        <!-- Hero section about us -->
        <section class=" hero bg-[url('@/assets/images/inner-banner.png')] pb-10 pt-20 ">
            <Container>
                <div class="md:w-1/2 text-white">
                    <UiTypographyP color="white">
                        <span class=" font-bold">About Us</span>
                    </UiTypographyP>
                    <div class=" py-2">
                        <UiTypographyH1 color="white">
                            <span class="  font-bold">About Trademark Legal Shield</span>
                        </UiTypographyH1>
                    </div>
                    <UiTypographyP color="white">
                        We understand that your brand is more than just a name or logo — it’s the foundation of your
                        business identity and reputation
                    </UiTypographyP>
                    <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                        <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                        <UiButtonsSecondary @click="" color="white"><span>Live Chat</span></UiButtonsSecondary>
                    </div>

                </div>
            </Container>
        </section>

        <!-- reason-choose-us  details here -->
        <section class=" reason-choose-us ">
            <Container>

                <div class=" space-y-5 text-center">
                    <UiTypographyP class=" text-center "> <span class=" bg-accent-200 e px-2 py-1 font-bold">Why Choose
                            Us</span></UiTypographyP>
                    <UiTypographyH2> <span class="  font-extrabold">Reasons to Choose Trademark Legal Shield</span>
                    </UiTypographyH2>
                    <div
                        class=" w-full grid  lg:md:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 justify-betweencpc items-center mt-4">

                        <div v-for="value in reasonChooseUsList" :key="value.id" class="h-full">
                            <div class=" group border sm:p-5 p-4 gap-4 flex flex-col items-center  w-full h-full  ">


                                <div
                                    class=" rounded-full sm:p-4 p-3  bg-accent-100 group-hover:bg-white flex w-fit items-center">
                                    <img :src="`/image/${value.image}`" class=" w-10" :alt="`${value.title} Icon`">
                                </div>


                                <div class=" text-center">
                                    <UiTypographyH3>
                                        <span class=" font-black font-extrold"><strong>{{ value.title }}</strong></span>
                                    </UiTypographyH3>
                                    <UiTypographyP>
                                        <span class="  text-sm text-gray-600 text-center font-bold">
                                            {{ value.description }}
                                        </span>
                                    </UiTypographyP>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </Container>
        </section>

        <!-- Simple Process Steps  details here -->
        <section class=" bg-gray-100/50 reason-choose-us ">
            <Container>
                <div class="  lg:flex gap-5 ">
                    <div class=" hidden lg:flex">
                        <img src="@/assets/images/three-steps-your-brand.png" alt="Simple Process Steps" srcset="">
                    </div>

                    <div class=" lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" bg-accent-200 e px-2 py-1 font-bold">Simple Process
                                Steps</span></UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">Three Steps
                                Your Brand’s
                                Identity Trademark Registration</span>
                        </UiTypographyH2>
                        <UiTypographyP>Getting your trademark registered has never been easier. At Trademark Legal
                            Shield, we’ve developed a seamless and efficient three-step process designed to eliminate
                            confusion, reduce delays, and save you valuable time. Whether you're launching a startup,
                            managing a growing business, or representing an established brand, our experienced trademark
                            professionals ensure every detail of your application is managed with accuracy, compliance,
                            and care</UiTypographyP>
                        <div
                            class="relative mt-4 space-y-6  flex flex-col   before:content-['']  before:block before:absolute before:inset-0   before:-z-10   before:top-0  before:left-5  before:sm:left-7  before:w-1   before:h-4/5   before:bg-gray-600">

                            <div v-for="value in stepToTakeList" :key="value" class="flex  items-start gap-2 sm:gap-5">
                                <div
                                    class="rounded-full bg-white sm:border-8 border-4 flex justify-center items-center border-accent-300 p-4 sm:w-16 w-10 h-10 sm:h-16">
                                    <UiTypographyH3><strong>0{{ value.id }}</strong></UiTypographyH3>
                                </div>

                                <div>
                                    <UiTypographyH3><span class="font-bold">{{ value.title }}</span></UiTypographyH3>
                                    <UiTypographyP>
                                        {{ value.description }}
                                    </UiTypographyP>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </Container>
        </section>

        <!-- Secure Your Brand   section -->
        <section class=" bg-gray-100/50 reason-choose-us ">
            <Container>
                <div class="  lg:flex gap-5 ">


                    <div class=" lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" bg-accent-200 e px-2 py-1 font-bold">Protect Your
                                Brand</span></UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">Secure Your
                                Brand Identity Today</span>
                        </UiTypographyH2>
                        <UiTypographyP>Protecting your brand is essential in today’s competitive market, and trademark
                            registration is the best way to secure your
                            business identity. A registered trademark gives you exclusive legal rights to use your brand
                            name, logo, or slogan, preventing others
                            from copying or misusing your intellectual property. <br> <br>

                            At Trademark Legal Shield, we simplify the complex registration process by handling
                            everything
                            from conducting thorough trademark searches to preparing and filing your application with
                            the
                            United States Patent and Trademark Office (USPTO). <br> <br>

                            Our experienced team ensures your trademark application meets all legal
                            requirements, minimizing delays and increasing your chances of approval.
                            With our transparent pricing and personalized support, you’ll have peace of mind knowing
                            your brand is fully protected nationwide. Whether you’re a startup or an established
                            company, Trademark Legal Shield is your trusted partner in safeguarding the unique identity
                            that sets your business apart.
                            and care</UiTypographyP>
                        <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                            <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                            <UiButtonsSecondary @click=""><span>Live Chat</span></UiButtonsSecondary>
                        </div>



                    </div>
                    <div class=" hidden lg:flex">
                        <img src="@/assets/images/secure-your-brand.png" alt="secure your brands" srcset="">
                    </div>
                </div>
            </Container>
        </section>

        <!--  section click to register your trademark  -->
        <section class=" hero bg-[url('@/assets/images/cta-bg1.png')] pb-10 pt-20  bg-c">
            <Container>
                <div class="md:w-1/2 text-white">

                    <div class=" py-2">
                        <UiTypographyH1 color="white">
                            <span class=" leading-tight  font-bold">Get Your Trademark Registered with Us</span>
                        </UiTypographyH1>
                    </div>
                    <UiTypographyP color="white">
                        Start your trademark application today and gain the peace of mind that comes with knowing your
                        brand is fully protected under U.S. law.
                    </UiTypographyP>
                    <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                        <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                        <UiButtonsSecondary @click="" color="white"><span>Live Chat</span></UiButtonsSecondary>
                    </div>

                </div>
            </Container>
        </section>

        <!-- FAQS Sections -->
        <section class="  reason-choose-us ">
            <Container>
                <div class="  h- lg:flex gap-5 ">
                    <div class=" hidden lg:flex">
                        <img src="@/assets/images/faq-img.png" alt="Simple Process Steps" srcset="">
                    </div>

                    <div class=" lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" bg-accent-200 e px-2 py-1 font-bold">FAQs</span>
                        </UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">Frequently
                                Asked Quetions</span>
                        </UiTypographyH2>
                        <UiTypographyP>Got questions? Find quick answers to common trademark concerns here.
                        </UiTypographyP>
                        <div class="relative mt-4 justify-betwee space-y-6  flex flex-col    ">

                            <div v-for="faq in faqList" :key="faq.id"
                                class="flex justify-between shadow-sm  border bg-white p-4 items-start gap-2 sm:gap-5">


                                <div class=" space-y-2">
                                    <UiTypographyP><span class="font-bold">{{ faq.title }}</span></UiTypographyP>
                                    <div :class="faq.showdescription ? ' md:20 h-24 ' : ' h-0  overflow-hidden '"
                                        class=" duration-500">
                                        <UiTypographyP>
                                            {{ faq.description }}
                                        </UiTypographyP>
                                    </div>
                                </div>
                                <button @click="toggleDescription(faq)" type="button" class=" ">
                                    <UiTypographyH3><span class=" font-bold text-xl"> <strong>{{ faq.showdescription ?
                                                '-' : '+' }}</strong> </span></UiTypographyH3>
                                </button>
                            </div>

                        </div>



                    </div>
                </div>
            </Container>
        </section>

        <!-- Testimonials  section -->
        <section class="  reason-choose-us ">
            <Container>
                <div class=" h-fit  overflow-hidden  lg:flex gap-5 ">


                    <div class="  lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" 0 e px-2 py-1 font-bold">Testimonials</span></UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">What Our Client Says</span>
                        </UiTypographyH2>
                        <UiTypographyP>Trusted by businesses nationwide for reliable trademark protection.</UiTypographyP>
                        <div class="pt-4 bg-gray-100 0  sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                            <Carousel />
                        </div>



                    </div>
                    <div class=" hidden lg:flex">
                        <img src="@/assets/images/testimonials-img.png" alt="secure your brands" srcset="">
                    </div>
                </div>
            </Container>
        </section>






    </div>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from '~/components/Carousel.vue'

//Refs
const trademarkformFunctions = ref(null)


//Data lists
const reasonChooseUsList = ref([
    {
        id: 1,
        title: 'Expert Guidance',
        description: 'Our team of trademark specialists brings years of experience to every application, ensuring your trademark',
        image: 'expert-icon.png'
    },
    {
        id: 2,
        title: 'Comprehensive Services',
        description: 'We provide end-to-end support including detailed trademark searches, application preparation, monitoring, and renewal management to protect your brand long-term.',
        image: 'comprise-icon.png'
    },
    {
        id: 3,
        title: 'Affordable Pricing',
        description: 'Our transparent pricing plans are designed to fit budgets of startups and established businesses alike, with no hidden fees, so you get premium service at a fair cost.',
        image: 'affordable-icon.png'
    },
    {
        id: 4,
        title: 'Dedicated Support',
        description: 'Our transparent pricing plans are designed to fit budgets of startups and established businesses alike, with no hidden fees, so you get premium service at a fair cost.',
        image: 'dedicated-icon.png'
    }
])

const stepToTakeList = ref([
    {
        id: 1,
        title: 'Submit Your Details',
        description: 'Provide us with your brand name, logo, and basic business information through our secure online form.',
    },
    {
        id: 2,
        title: 'We Handle the Filing',
        description: 'Our experts conduct a trademark search, prepare your application, and file it with the USPTO — accurately and efficiently.',
    },
    {
        id: 3,
        title: 'Get Official Protection',
        description: 'Once approved, your trademark is officially registered, giving you exclusive legal rights and nationwide brand protection.',
        image: 'ongoing-icon.png'
    }
])

const faqList = ref([
    {
        id: 1,
        title: 'Q1: What is a trademark and why do I need one?',
        description: 'A trademark protects your brand’s name, logo, or slogan from being used by others. It helps secure your business identity and builds trust with your customers.',
        showdescription: false
    },
    {
        id: 2,
        title: 'Q2: Can I register a trademark for multiple classes?',
        description: 'Yes, trademarks can be registered for multiple classes. Our Standard, Deluxe, and Platinum plans accommodate multiple classes with added services.',
        showdescription: false
    },
    {
        id: 3,
        title: ' Q3: Do you handle the entire trademark registration process?',
        description: 'Yes! We manage everything from conducting a trademark search to filing the application and responding to USPTO communications.',
        showdescription: false
    },
    {
        id: 4,
        title: '  Q4: What are USPTO fees, and are they included in your prices?',
        description: 'USPTO filing fees are government fees charged by the United States Patent and Trademark Office and vary by trademark class. Our service prices exclude these fees, which you pay directly to the USPTO.',
        showdescription: false
    }
])




//Functions 
const openform = () => {
    trademarkformFunctions.value.openForm()
}



const toggleDescription = (item) => {
    faqList.value.forEach(faq => {
        if (faq.id !== item.id) {
            faq.showdescription = false     // close all others
        }
    })
    item.showdescription = !item.showdescription
}
</script>