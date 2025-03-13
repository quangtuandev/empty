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
                        <form class="gap-0 gap-md-3 d-flex flex-column">
                            <div class="row gx-3">
                                <div class="col-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-transparent" id="floatingInput2"
                                            placeholder="name@example.com" />
                                        <label for="floatingInput2">Email</label>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-transparent" id="floatingInput"
                                            placeholder="name@example.com" />
                                        <label for="floatingInput">Number Phone</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating">
                                <textarea class="form-control bg-transparent" placeholder="Leave a comment here"
                                    id="floatingTextarea2"></textarea>
                                <label for="floatingTextarea2">Message</label>
                            </div>
                            <div class="">
                                <button type="submit" class="btn contact-form__btn mb-0">SEND</button>
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