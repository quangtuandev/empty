<template>
    <div class="row contact">
        <div class="col-12 col-md-6">
            <div class="contact-header mt-0 mt-md-5">
                <h1 class="contact-header__title text-uppercase">
                    Thanks for VIsItIng
                </h1>
                <p class="contact-header__description text-uppercase">
                    Become a companIon wIth us
                </p>
            </div>
            <div class="col-12 col-md-6  d-md-none d-block">
                <div class="position-relative">
                    <Mascot class="position-absolute top-0 d-lg-inline-block" />
                    <img class="mw-100" src="~/assets/images/product.png" alt="" srcset="">
                </div>
            </div>
            <div class="contact-content d-none d-md-block">
                <h2 class="contact-content__title">Contact Us</h2>
                <Contact />
            </div>
            <div class="contact-form">
                <h2 class="contact-form__title">BusIness Partner</h2>
                <form class="gap-0 gap-md-4 d-flex flex-column">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control bg-transparent" id="floatingInput2"
                                    placeholder="name@example.com" />
                                <label for="floatingInput2">Full name</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-floating">
                                <input type="email" class="form-control bg-transparent" id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control bg-transparent" id="floatingPassword"
                                    placeholder="Password" />
                                <label for="floatingPassword">Your company</label>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <CustomSelect :options="['whole sale', 'distribution', 'others']" :default="''"
                                class="select" @input="checkInput($event)" />
                        </div>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control bg-transparent" placeholder="Leave a comment here"
                            id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Message</label>
                    </div>
                    <div class="text-center text-md-start mb-0 mb-md-5">
                        <button type="submit" class="btn contact-form__btn">SEND</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-12 d-md-none text-center">
            <a href="#">
                <img class="mascot-border" src="~/assets/images/logo.svg" alt="" srcset="" />
            </a>
            <p class="d-block d-md-none copyright">A product by Viet Uc Food & Co</p>
        </div>
        <div class="col-12 col-md-6">
            <div class="position-relative d-none d-md-block">
                <Mascot class="position-absolute top-0" />
                <img class="mw-100" src="~/assets/images/product.png" alt="" srcset="">
            </div>
        </div>
        <contact-mobile />
    </div>
</template>
<script setup>
const checkInput = ($event) => {
    console.log("Check input", $event);
}
</script>
<style lang="scss">
@mixin title-style() {
    font-family: iCielSupaMegaFantastic-Caps;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
    color: #8A724A;
}

@mixin reset-input() {
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #525252;
    color: #CCCCCC;
    outline: none;
    box-shadow: none;
    font-family: "Averia Serif Libre", serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
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
        color: #E4D3B0;
        background: #801619;
        transform: all .3s ease;
    }
}

.contact {
    .copyright {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }

    margin-top: 70px;

    @media screen and (max-width: 768px) {
        margin-top: 24px;
    }

    &-header {
        margin-bottom: 44px;

        &__title {
            font-family: 'iCielBCPortico-Regular';
            color: #E6CC9B;
            font-size: 44px;
            font-weight: 400;
            line-height: 51.28px;
            margin-bottom: 16px;

            @media screen and (max-width: 768px) {
                font-size: 36px;
                font-weight: 400;
                line-height: 44px;
                letter-spacing: 0.06em;
                text-align: center;
            }
        }

        &__description {
            color: #8A724A;
            font-family: iCielSupaMegaFantastic-Caps;
            font-size: 44px;
            font-weight: 700;
            line-height: 30px;

            @media screen and (max-width: 768px) {
                text-align: center;

            }
        }
    }

    &-content {
        margin-bottom: 44px;

        &__title {
            @include title-style();
        }

        &__item {
            font-family: "Averia Serif Libre", serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            text-align: left;
            color: #E4D3B0;

        }
    }

    &-form {
        &__title {
            @include title-style();

            @media screen and (max-width: 768px) {
                text-align: center;

            }
        }

        &__btn {
            @include button-primary(8px 32px);
            margin-top: 44px;

            @media screen and (max-width: 768px) {
                text-align: center;
                margin-top: 24px;
                margin-bottom: 24px;

            }
        }


        .form-floating>.form-control-plaintext~label,
        .form-floating>.form-control:focus~label,
        .form-floating>.form-control:not(:placeholder-shown)~label,
        .form-floating>.form-select~label {
            color: #525252;
            --bs-body-bg: transparent;
            font-family: "Averia Serif Libre", serif;
        }

        .form-floating {
            >label {
                color: #525252;
                --bs-body-bg: transparent;
                font-family: "Averia Serif Libre", serif;
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