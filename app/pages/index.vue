<template>
  <UiTypographyH1 color="secondary" class="text-center mt-28 mb-1">United States</UiTypographyH1>
  <header class="text-center mt-0 pb-10 pt-1">
    <Container :addTopBottomPadding="false">
      <UiTypographyH1 color="white">Trademark Registration</UiTypographyH1>
      <UiTypographyP color="white" class="max-w-2xl mx-auto">Secure your name, logo, or slogan with fast, affordable trademark registration backed by expert legal guidance.</UiTypographyP>

      <div class="grid gap-2 my-8">
        <UiTypographyP color="white"  class="flex items-center justify-center gap-4">
          <UiIconsCheck  class="text-secondary w-6"/>
          Maximise your chances for successful TM registration
        </UiTypographyP>
        <UiTypographyP color="white"  class="flex items-center justify-center gap-4">
          <UiIconsCheck  class="text-secondary w-6"/>
          Flat-fee pricing with no hidden costs
        </UiTypographyP>
        <UiTypographyP color="white"  class="flex items-center justify-center gap-4">
          <UiIconsCheck  class="text-secondary w-6"/>
          Experienced legal team in your corner, just 1-click away
        </UiTypographyP>
      </div>

      <UiIconsArrow class="w-20 text-secondary mx-auto mt-32 animate-bounce" />
    </Container>
  </header>

  <Container class="grid lg:grid-cols-2 gap-12 lg:gap-28 items-start">
    <div>
      <UiTypographyP small_text class="flex items-center gap-2 mb-2 uppercase">
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        What we do
      </UiTypographyP> 
      <UiTypographyH2 class="" color="primary">
        Expert Trademark Protection Backed by Trusted Legal Professionals
      </UiTypographyH2>
      <UiTypographyP class="mt-4">
        From comprehensive searches to strategic filing and rigorous defense, {{ projectName }} provides the full spectrum of trademark services designed to secure and strengthen your brand across the U.S.
      </UiTypographyP>
    </div>

    <div class=" grid md:grid-cols-2 gap-12">
      <div>
        <img src="/images/doc_search.svg" class="w-14" />
        <UiTypographyH3 class="mt-2">Trademark Search & Clearance</UiTypographyH3>
      </div>
      <div>
        <img src="/images/doc_stamp.svg" class="w-14" />
        <UiTypographyH3 class="mt-2">USPTO Trademark Filing</UiTypographyH3>
      </div>
      <div>
        <img src="/images/response.svg" class="w-14" />
        <UiTypographyH3 class="mt-2">Office Action Responses</UiTypographyH3>
      </div>
      <div>
        <img src="/images/renewal.svg" class="w-14" />
        <UiTypographyH3 class="mt-2">Trademark Renewals</UiTypographyH3>
      </div>
    </div>
  </Container>

  <Container class="text-center">
      <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        How it Works
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
      </UiTypographyP>    
      <UiTypographyH2 class="max-w-2xl mx-auto">
        A Streamlined, Attorney-Managed Trademark Process
      </UiTypographyH2>
      <UiTypographyP>Professional oversight, clear communication, and fast turnaround — trademark registration made effortless.</UiTypographyP>

      <div class="grid lg:grid-cols-3 gap-8 mt-16">
        <div class="border border-secondary p-6">
          <img src="/images/form-upload.svg" class="w-14 mb-6 mx-auto" alt="Form Submit">
          <UiTypographyH3>Submit Your Details</UiTypographyH3>
          <UiTypographyP>Share your brand name, logo, and essential business information using our secure online form.
          Clear, simple, and guided from the start.</UiTypographyP>
        </div>
        <div class="border border-secondary p-6">
          <img src="/images/form-filing.svg" class="w-14 mb-6 mx-auto" alt="Form filing">
          <UiTypographyH3>We Handle the Filing</UiTypographyH3>
          <UiTypographyP>SOur legal team conducts a professional trademark search, prepares your application, and files it with the USPTO on your behalf — with precision and compliance built in.
          Nothing for you to figure out. We manage everything.</UiTypographyP>
        </div>
        <div class="border border-secondary p-6">
          <img src="/images/protection.svg" class="w-14 mb-6 mx-auto" alt="Shield / Protection">
          <UiTypographyH3>Get Official Protection</UiTypographyH3>
          <UiTypographyP>Once approved by the USPTO, your trademark is officially registered, giving you exclusive nationwide rights and long-term brand protection.Your identity secured — professionally and efficiently.</UiTypographyP>
        </div>
      </div>

      <UiButtonsPrimary class="mx-auto mt-16">Register My Trademark</UiButtonsPrimary>
  </Container>

  <section class="bg-accent-100 bg-opacity-40" id="pricing">
    <Container>
      <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        Our Pricing
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
      </UiTypographyP>   
      <UiTypographyH2 class="text-center mx-auto">Simple, Transparent Pricing</UiTypographyH2> 

      <div class="grid md:grid-cols-2 xl:grid-cols-4 mt-16 gap-4">

        <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
          <UiTypographyP class="uppercase font-bold"><strong>Basic</strong></UiTypographyP>
          <UiTypographyP small_text class="">Best for startups needing protection in one trademark class with simple requirements.</UiTypographyP>
          <UiTypographyH2 color="secondary" class="mt-4">$45</UiTypographyH2>
          <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

          <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
            <li>Case Review</li>
            <li>Case Filing</li>
            <li>Basic Search</li>
            <li>State E-Filing</li>
            <li>Trademark Secured</li>
            <li>*(Govt. filing fee not included)</li>
          </ul>

          <UiButtonsPrimary flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
        </div>

        <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
          <UiTypographyP class="uppercase font-bold"><strong>Standard</strong></UiTypographyP>
          <UiTypographyP small_text class="">Great for small businesses covering multiple product or service classes.</UiTypographyP>
          <UiTypographyH2 color="secondary" class="mt-4">$149</UiTypographyH2>
          <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

          <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
            <li>Case Review</li>
            <li>Case Filing</li>
            <li>Direct Hit Search</li>
            <li>Trademark Alerts</li>
            <li>Trademark Secured</li>
            <li>High Satisfaction Rate</li>
            <li>Refusal Risk Meter</li>
            <li>*(Govt. filing fee not included)</li>
          </ul>

          <UiButtonsPrimary flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
        </div>

        <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
          <UiTypographyP class="uppercase font-bold"><strong>Deluxe</strong></UiTypographyP>
          <UiTypographyP small_text class="">For brands needing extra support, including help with USPTO office actions.</UiTypographyP>
          <UiTypographyH2 color="secondary" class="mt-4">$299</UiTypographyH2>
          <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

          <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
            <li>Case Review</li>
            <li>Case Filing</li>
            <li>Direct Hit Search</li>
            <li>Trademark Alerts</li>
            <li>Trademark Secured</li>
            <li>High Satisfaction Rate</li>
            <li>Refusal Risk Meter</li>
            <li>Trademark Monitoring</li>
            <li>Complete Documentation</li>
            <li>Digital File</li>
            <li>Dedicated Case Manager</li>
            <li>*(Govt. filing fee not included)</li>
          </ul>

          <UiButtonsPrimary flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
        </div>

        <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
          <UiTypographyP class="uppercase font-bold"><strong>Platinum</strong></UiTypographyP>
          <UiTypographyP small_text class="">All-inclusive plan with monitoring, renewals, and full legal assistance.</UiTypographyP>
          <UiTypographyH2 color="secondary" class="mt-4">$299</UiTypographyH2>
          <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

          <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
            <li>Case Review</li>
            <li>Case Filing</li>
            <li>Direct Hit Search</li>
            <li>Trademark Alerts</li>
            <li>Trademark Secured</li>
            <li>High Satisfaction Rate</li>
            <li>Refusal Risk Meter</li>
            <li>Trademark Monitoring</li>
            <li>Complete Documentation</li>
            <li>Digital File</li>
            <li>Dedicated Case Manager</li>
            <li>High Approval Rate</li>
            <li>Comprehensive Trademark Search Report (Federal & State)</li>
            <li>High Priority Service</li>
            <li>cease & desist letter</li>
            <li>*(Govt. filing fee not included)</li>
          </ul>

          <UiButtonsPrimary flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
        </div>

      </div>
    </Container>
  </section>

  <Container>
      <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        Testimonials
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
      </UiTypographyP> 
      <UiTypographyH2 class="text-center mx-auto">
        Happy Users Say About Us
      </UiTypographyH2>

      <div class="mt-16 flex-col lg:flex-row flex items-center justify-between">
        <img src="/images/quote-left.svg" class="w-40 opacity-10" alt="">
          <Testimonials class="lg:max-w-2xl"></Testimonials>
        <img src="/images/quote-right.svg" class="w-40 opacity-10" alt="">
      </div>
  </Container>

  <section class="bg-neutral-100" id="faqs">
    <Container>
        <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
          <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
          FAQs & A
          <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        </UiTypographyP> 
        <UiTypographyH2 class="text-center">Get every answer</UiTypographyH2>

        <Accordion class="mt-16 max-w-2xl mx-auto">
          <AccordionItem>
            <template #accordion-trigger>
              How long does the trademark registration process take?
            </template>
            <template #accordion-content>
              <li>The full process typically takes several months, depending on USPTO review times. We monitor your application closely and keep you updated at each stage.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              What information do I need to start a trademark application?
            </template>
            <template #accordion-content>
              <li>You’ll need your business name, logo or slogan, a description of your goods or services, and proof of use if applicable. We’ll guide you through each required detail.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              What happens if the USPTO issues an Office Action?
            </template>
            <template #accordion-content>
              <li>If the USPTO raises questions or objections, we prepare and file the appropriate response on your behalf. This helps keep your application on track.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Do I need to have a registered business before filing a trademark?
            </template>
            <template #accordion-content>
              <li>No, you can apply as an individual or entity. Many clients secure their trademarks before finalizing their business registrations.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Can I trademark a name that is already in use?
            </template>
            <template #accordion-content>
              <li>It depends on the similarity of the goods or services and the likelihood of confusion. Our trademark search helps determine whether your mark is available.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              What is the difference between ™ and ® symbols?
            </template>
            <template #accordion-content>
              <li>The ™ symbol can be used without registration, while the ® symbol is reserved for trademarks officially registered with the USPTO.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Will my trademark protect me internationally?
            </template>
            <template #accordion-content>
              <li>A U.S. trademark protects your mark only within the United States. However, we can assist with international filings through additional processes.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Can I make changes to my trademark after it’s filed?
            </template>
            <template #accordion-content>
              <li>Minor adjustments may be allowed, but material changes generally require a new application. We review any updates to ensure compliance.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              How do I maintain my trademark once it’s registered?
            </template>
            <template #accordion-content>
              <li>Trademarks require periodic renewals and ongoing use. We remind you of upcoming deadlines and offer maintenance support to keep your mark active.</li>
            </template>
          </AccordionItem>

        </Accordion>
    </Container>
  </section>

  <section class="cta">
    <Container class="text-center">
      <UiTypographyH2 color="white">Don't Risk Your Brand's Future!</UiTypographyH2>
      <UiTypographyP color="white" class="max-w-2xl mx-auto">Unregistered trademarks can lead to costly legal battles. Protect your brand with {{projectName}}'s expert services—fast, reliable, and hassle-free. Secure your exclusive rights now before it's too late!</UiTypographyP>

      <div class="mt-16 flex gap-8 justify-center">
        <UiButtonsPrimary class="hover:bg-white hover:text-secondary">Register My Trademark</UiButtonsPrimary>
        <UiButtonsSecondary class="hover:text-white hover:border-white">Get in touch</UiButtonsSecondary>
      </div>
    </Container>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const projectName = config.public.projectName
</script>

<style>
header {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/law.jpg');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cta {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/statue-of-liberty.jpg');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
</style>