<template>
    <section class="sc-connecting">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-xl-6" data-aos="fade-right">
                    <div class="sc-header">
                        <h2 class="sc-header__title">CONNECTING PARTNERS</h2>
                        <div class="sc-header__sub">Become a companIon wIth us </div>
                        <div class="sc-header__excerpt">
                            Please send us feedback or ask about partnership opportunities. We are excited to explore
                            the possibilities of collaboration. Furthermore, follow our social media to see our latest
                            creative endeavors.
                        </div>
                    </div>
                    <div class="contact-form">
                        <form @submit.prevent="handleSubmit" class="gap-0 gap-md-3 d-flex flex-column">
                            <div class="row gx-3">
                                <div class="col-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-transparent" id="floatingInput2"
                                        v-model="form.email" :class="{ 'is-invalid': v$.email.$error }"
                                            placeholder="name@example.com" />
                                        <label for="floatingInput2">Email</label>
                                    </div>
                                    <span class="error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                                </div>
                                <div class="col-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control bg-transparent" id="floatingInput"
                                        v-model="form.phone" :class="{ 'is-invalid': v$.phone.$error }"
                                            placeholder="name@example.com" />
                                        <label for="floatingInput">Number Phone</label>
                                    </div>
                                    <span class="error" v-if="v$.phone.$error">{{ v$.phone.$errors[0].$message }}</span>
                                </div>
                            </div>

                            <div class="form-floating">
                                <textarea class="form-control bg-transparent" placeholder="Leave a comment here"
                                v-model="form.message" :class="{ 'is-invalid': v$.message.$error }"
                                    id="floatingTextarea2"></textarea>
                                <label for="floatingTextarea2">Message</label>
                            </div>
                            <span class="error" v-if="v$.message.$error">{{ v$.message.$errors[0].$message }}</span>
                            <div class="">
                                <button type="submit" class="btn contact-form__btn mb-0" :disabled="isLoading">
                                    {{ isLoading ? 'SENDING...' : 'SEND' }}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="col-xl-6 d-none d-xl-block" data-aos="fade-left">
                    <img src="/public/assets/pages/home/connecting/banner.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { reactive, computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { not, required, email, sameAs, helpers } from '@vuelidate/validators'

const form = reactive({
    email: '',
    phone: '',
    message: '',
})
const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('Please input email', required),
            email: helpers.withMessage('Please input valid email', email)
        },
        phone: { required: helpers.withMessage('Please input phone', required) },
        message: { required: helpers.withMessage('Please input message', required) },
    }
})
const v$ = useVuelidate(rules, form)
const isLoading = ref(false)

async function handleSubmit() {
    const result = await v$.value.$validate()
    if (result) {
        isLoading.value = true
        try {
            const response = await $fetch('/api/contact', {
                method: 'POST',
                body: form
            })
            console.log('Email sent successfully')
            // Show success alert
            const alertElement = document.createElement('div')
            alertElement.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show', 'position-fixed', 'top-0', 'start-50', 'translate-middle-x', 'mt-3')
            alertElement.setAttribute('role', 'alert')
            alertElement.innerHTML = `
                Email sent successfully!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `
            document.body.appendChild(alertElement)

            // Auto remove after 3 seconds
            setTimeout(() => {
                alertElement.remove()
            }, 3000)
            // Reset form after successful submission
            form.email = ''
            form.phone = ''
            form.message = ''
            v$.value.$reset()
        } catch (error) {
            console.error('Error sending email:', error)
        } finally {
            isLoading.value = false
        }
    }
}

</script>
<style lang="scss" scoped>
.sc-connecting {
    padding-bottom: 72px;

    .sc-header {
        margin-bottom: 28px;
    }

    .contact-form {

        .contact-form__btn {
            margin-top: 28px;
        }
    }

    @media (max-width: 1199px) {
        padding-bottom: 64px;

        .sc-header {
            text-align: center;
            margin-bottom: 24px;

            &__title {
                margin-bottom: 12px;
            }

            &__sub {
                margin-bottom: 20px;
            }
        }
    }
}
</style>