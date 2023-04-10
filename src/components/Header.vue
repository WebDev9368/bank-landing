<template>
    <header class="header">
        <div class="center">
            <a href="/" class="logo">
                <img src="../assets/img/logo.svg" alt="">
            </a>

            <Nav ref="menu"/>

            <div class="head-right">
                <form action="#" class="form-search">
                    <input type="search" placeholder="Search">
                    <button type="submit">
                        <svg><use xlink:href="#ic-search"></use></svg>
                    </button>
                </form>

                <a href="#" class="btn">Dashboard</a>

                <button class="burger d-none" @click="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    import Nav from '@/components/Nav';

    export default {
        components: {Nav},
        methods: {
            burger() {
                document.body.classList.toggle('menu-active');
            }
        }
    }
</script>

<style lang="scss">
    .header {
        padding: 35px 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 15;

        .center {
            display: flex;
            align-items: flex-start;
            padding: 0 15px;
        }

        .logo {
            display: inline-block;
            line-height: 0;
            margin-top: -10px;
            margin-left: -30px;
            margin-right: 105px;
        }

        .head-right {
            display: flex;
            align-items: center;
            margin-top: -5px;
            margin-left: auto;
        }
        
        .btn {
            min-width: 120px;
            height: 36px;
            font: 500 12px/1 var(--rubik);
            text-transform: capitalize;
            letter-spacing: 2px;
        }

        @media screen and (max-width: 1300px) {
            .logo {
                max-width: 80px;
                margin-right: 40px;
            }
        }
    }

    .form-search {
        position: relative;
        line-height: 0;
        margin-right: 22px;

        input {
            position: absolute;
            top: 100%;
            right: 0;
            background: #fff;
            border: none;
            font-family: var(--anaheim);
            padding: 5px 10px;
            outline: none;
            transition: all 0.3s;
            opacity: 0;
        }
        button {
            background: none;
            border: none;
            cursor: pointer;
            line-height: 0;
        }
        button svg {
            width: 24px;
            height: 24px;
            fill: var(--akcent);
            transition: all 0.3s;
        }
        button:hover svg {fill: #000;}
    }

    @media screen and (max-width: 991px) {
        /* HEADER */
        .menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            z-index: 99;
            align-items: center;
            justify-content: center;
            display: none;
            opacity: 0;
        }
        .menu ul {
            flex-direction: column;
        }
        .menu ul li + li {
            margin-left: 0;
            margin-top: 15px;
        }
        .menu ul a {
            display: block;
            font-size: 25px;
            text-align: center;
        }

        .menu-active .menu {
            display: flex;
            animation: fade 0.3s linear forwards;
        }

        .burger {
            display: block;
            width: 30px;
            height: 30px;
            background: none;
            outline: none;
            border: none;
            margin-left: 20px;
            cursor: pointer;
            position: relative;
            z-index: 992;
        }
        .burger span {
            width: 30px;
            height: 1px;
            background: #fff;
            display: block;
            transition: all 0.3s;
        }
        .burger:hover span {background: #010101;}
        .burger span + span {margin-top: 5px;}
        .menu-active .burger span {
            position: absolute;
            top: 50%;
            transform-origin: center;
            margin-top: -0.5px;
            background: #010101;
        }
        .menu-active .burger span:first-child {transform: rotate(45deg);}
        .menu-active .burger span:last-child {transform: rotate(-45deg);}
        .menu-active .burger span:nth-child(2) {display: none;}

        .header {padding: 20px 0;}
        .head-right {margin-top: 0;}
        .header .logo {margin-left: -13px;}
    }

    @media screen and (max-width: 750px) {
        .header .logo {max-width: 55px;}
    }
</style>
