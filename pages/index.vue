<template>
    <div class="row contact">
        <div class="col-12 col-md-6">
            <div class="contact-header mt-5">
                <h1 class="contact-header__title text-uppercase">
                    Thanks for VIsItIng
                </h1>
                <p class="contact-header__description  text-uppercase">
                    Become a companIon wIth us
                </p>
            </div>
            <div class="contact-content">
                <h2 class="contact-content__title">Contact Us</h2>
                <div>
                    <p class="contact-content__item">
                        <span class="fw-bold d-block">Address:</span>
                        1234 Main St, Springfield, IL 62701
                    </p>
                    <div class="d-flex flex-wrap justify-content-between">
                        <p class="contact-content__item col-12 col-md-6 col-lg-4">
                            <span class="fw-bold d-block">Hotline:</span>
                            (217) 555-5555
                        </p>
                        <p class="contact-content__item col-12 col-md-6 col-lg-4">
                            <span class="fw-bold d-block">Email:</span>
                            <a href="mailto:123">123@gmail.com</a>
                        </p>
                        <p class="contact-content__item col-12  col-md-6 col-lg-4">
                            <span class="fw-bold d-block">Social network</span> Monday - Friday: 9:00 AM to 5:00 PM
                        </p>
                    </div>

                </div>
            </div>
            <div class="contact-form">
                <h2 class="contact-form__title">BusIness Partner</h2>
                <form class="gap-4 d-flex flex-column">
                    <div class="row">
                        <div class="col">
                            <div class="form-floating">
                                <input type="text" class="form-control bg-transparent" id="floatingInput2"
                                    placeholder="name@example.com" />
                                <label for="floatingInput2">Full name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating">
                                <input type="email" class="form-control bg-transparent" id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating">
                                <input type="text" class="form-control bg-transparent" id="floatingPassword"
                                    placeholder="Password" />
                                <label for="floatingPassword">Your company</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating">
                                <select class="form-select bg-transparent" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option value="">selec</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect" class="bg-transparent">Enquiry purpose</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control bg-transparent" placeholder="Leave a comment here"
                            id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Message</label>
                    </div>
                    <div>
                        <button type="submit" class="btn contact-form__btn">SEND</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="position-relative">
                <Mascot class="position-absolute top-0 d-none d-lg-inline-block" />
                <img class="mw-100" src="~/assets/images/product.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
@mixin title-style() {
    font-family: 'iCielBCPortico-Regular';
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: #CCCCCC;
}

@mixin reset-input() {
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #525252;
    color: #CCCCCC;
    outline: none;
    box-shadow: none;
}

@mixin button-primary($padding: 10px 20px) {
    font-family: 'iCielBCPortico-Regular';
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #8A724A;
    padding: $padding;
    border-radius: 56px;
    border: none;
    cursor: pointer;

    &:hover {
        color: #8A724A;
        background: #FFFFFF;
        transform: all .3s ease;
    }
}

.contact {
    margin-top: 70px;

    &-header {
        margin-bottom: 44px;

        &__title {
            font-family: 'iCielBCPortico-Regular';
            color: #E6CC9B;
            font-size: 44px;
            font-weight: 400;
            line-height: 51.28px;
            margin-bottom: 16px;
        }

        &__description {
            color: #CCCCCC;
            font-family: Myriad Pro;
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;

        }
    }

    &-content {
        margin-bottom: 44px;

        &__title {
            @include title-style();
        }

        &__item {
            font-family: Myriad Pro;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            text-align: left;
            color: #E4D3B0;

            >span {
                color: #CCCCCC;
            }
        }
    }

    &-form {
        &__title {
            @include title-style();
        }

        &__btn {
            @include button-primary(8px 32px);
            margin-top: 44px;
        }

        .form-floating {
            >label {
                color: #525252;
            }

            .form-control {
                @include reset-input();
            }

            .form-select {
                @include reset-input();

                option {
                    color: #525252;
                }

                &:focus {
                    @include reset-input();
                }

                &::after {
                    background-color: transparent;
                }
            }
        }
    }
}
</style>