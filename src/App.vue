<template>
    <router-view/>
</template>

<style lang="scss">
    @font-face {
        font-family: 'Anaheim';
        src: url('assets/fonts/Anaheim-Regular.woff2') format('woff2'),
            url('assets/fonts/Anaheim-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Rubik';
        src: url('assets/fonts/Rubik-Medium.woff2') format('woff2'),
            url('assets/fonts/Rubik-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --anaheim: 'Anaheim', sans-serif;
        --rubik: 'Rubik', sans-serif;
        --akcent: #497CF9;
        --akcent2: #4EC8D3;
        --pink: #FEF9FC;
    }

    body {
        font: 16px/1.5 var(--anaheim);
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h2.title {
        font-size: 36px;
        line-height: 1.1;
        font-weight: 400;
        margin-bottom: 20px;
        letter-spacing: 2.1px;
        color: #343434;
    }
    .subtitle {
        color: #999999;
        letter-spacing: 0.5px;
    }

    .btn-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .btn {
        min-width: 116px;
        height: 46px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: var(--akcent);
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
        border-radius: 4px;
        font-family: var(--anaheim);
        font-size: 12px;
        transition: all 0.3s;
        color: #fff;
        border: 1px solid transparent;
        cursor: pointer;

        &.empty {
            background: transparent;
            border-color: var(--akcent);
            color: var(--akcent);
        }
        &:hover {
            border-color: #000;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            color: #fff;
            background: var(--akcent);
        }
    }

    .center {
        max-width: 1230px;
        min-width: 300px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .wrapper {overflow: hidden;}
    .d-none {display: none;}
    .tx-c {text-align: center;}

    .social {
        a {
            text-decoration: none;
            font-size: 17px;
            color: #010101;
            display: inline-flex;
            align-items: center;
            transition: all 0.3s;
            line-height: 1;

            &:hover {opacity: 0.5;}
            & span {margin-left: 10px;}
            & + a {margin-left: 15px;}

            &.tel svg {
                width: 20px;
                height: 20px;
            }
            &.fb svg {
                width: 11px;
                height: 20px;
            }
            &.you svg {
                width: 22px;
                height: 16px;
            }
            &.in svg {
                width: 20px;
                height: 20px;
            }
            &.ins svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    .splide__pagination {
        position: static !important;
        padding: 0 !important;

        li {
            margin: 0 9px !important;
            button {
                width: 8px;
                height: 8px;
                background: #CCCCCC;
                margin: 0;
                opacity: 1;
                display: block;
            }
            button.is-active {
                width: 13px;
                height: 13px;
                transform: none;
                background: var(--akcent);
            }
        }
    } 

    /* ANIMATION
    -------------------------------------- */
    .animated {
        opacity: 0;
        transition: opacity 500ms;

        &.show {
            animation: fade-bottom 0.6s ease-in-out both;
        }
    }

    @keyframes fade-bottom {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fade {
        100% {opacity: 1;}
    }

    @media screen and (max-width: 1300px) {
        .center {max-width: 1000px;}
    }

    @media screen and (max-width: 991px) {
        .h-991 {display: none !important;}
        .s-991 {display: block !important;}
    }

    @media screen and (max-width: 750px) {
        .subtitle br {display: none;}
        h2.title {font-size: 30px;}
    }
</style>
