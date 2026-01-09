/**
 * WebTrion Dynamic Components
 * Reusable Header, Footer, and Mobile Menu Components
 */

// ============================================
// HEADER COMPONENT
// ============================================
function renderHeader() {
    const headerHTML = `
        <header class="tf-header-landing">
            <div class="container-6">
                <div class="row align-items-center" style="justify-content: space-between;">
                    <div class="" style="width: fit-content;">
                        <div class="logo-site">
                            <a href="index.html">
                                <img loading="lazy" width="150" height="45"
                                    src="assets/images/landing/logo/webtrionBlack.svg" alt="WebTrion Logo">
                            </a>
                        </div>
                    </div>
                    <div class="d-none d-lg-block" style="width: fit-content">
                        <nav class="box-navigation">
                            <ul class="box-nav-menu">
                                <li class="menu-item">
                                    <a href="index.html" class="item-link text-body-2">
                                        Home
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="index.html#about" class="item-link text-body-2">
                                        About Us
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="index.html#advantages" class="item-link text-body-2">
                                        What We Do
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="index.html#demo" class="item-link text-body-2">
                                        Our Works
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="Contact-us.html" class="item-link text-body-2">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="" style="width: fit-content;">
                        <div class="header-right">
                            <a href="Contact-us.html" class="tf-btn-2 has-icon d-none d-ssm-inline-flex">
                                <div class="wrap-text text-body-2 fw-medium text-white">
                                    <div class="ic-wrap">
                                        <div class="icon icon-cart-bag"></div>
                                    </div>
                                    <span class="text text-linear">
                                        Let's Talk
                                    </span>
                                </div>
                            </a>
                            <a href="#mobileMenu" data-bs-toggle="offcanvas"
                                class="btn-mobile-menu-2 style-primary d-lg-none">
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="header-landing-fixed-block"></div>
    `;
    return headerHTML;
}

// ============================================
// MOBILE MENU COMPONENT
// ============================================
function renderMobileMenu() {
    const mobileMenuHTML = `
        <div class="offcanvas offcanvas-start canvas-mb" id="mobileMenu" tabindex="-1">
            <div class="canvas-header">
                <a href="index.html" class="logo-site">
                    <img loading="lazy" width="102" height="32" src="assets/images/landing/logo/webtrionBlack.svg" alt="WebTrion Logo">
                </a>
                <span class="icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i class="icon-close"></i>
                </span>
                <span class="br-line"></span>
            </div>
            <div class="canvas-body">
                <div class="mb-content-top">
                    <ul class="nav-ul-mb" id="wrapper-menu-navigation">
                        <li class="menu-item">
                            <a href="index.html" class="item-link text-body-2">
                                Home
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="index.html#about" class="item-link text-body-2">
                                About Us
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="index.html#advantages" class="item-link text-body-2">
                                What We Do
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="index.html#demo" class="item-link text-body-2">
                                Our Works
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="Contact-us.html" class="item-link text-body-2">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flow-us-wrap">
                    <h6 class="title text-black">Follow us on</h6>
                    <ul class="tf-social-icon style-small">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" class="social-facebook" rel="noopener noreferrer">
                                <span class="icon"><i class="icon-facebook"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" class="social-instagram" rel="noopener noreferrer">
                                <span class="icon"><i class="icon-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank" class="social-x" rel="noopener noreferrer">
                                <span class="icon"><i class="icon-twitter-x"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/" target="_blank" class="social-github" rel="noopener noreferrer">
                                <span class="icon"><i class="icon-github"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    return mobileMenuHTML;
}

// ============================================
// FOOTER COMPONENT
// ============================================
function renderFooter() {
    const footerHTML = `
        <footer class="tf-landing-footer">
            <div class="container-full">
                <div class="content text-center flat-spacing-12">
                    <div class="bg-img">
                        <video autoplay loop muted playsinline>
                            <source src="assets/images/video/Smartphone.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="FtrLogo">
                        <img loading="lazy" width="300" height="100"
                            src="assets/images/landing/logo/webtrionWhite.svg" alt="WebTrion Logo">
                    </div>
                    <h2 class="title text-80-84 text-white letter-space--3 wow fadeZoom">
                        Let's Build a High‑Impact <br>
                        Digital Presence
                    </h2>
                    <p class="desc text-white text-body-2 wow fadeInUp">
                        One‑time project pricing with scalable, future‑ready web solutions
                        tailored to your business needs.
                    </p>
                    <div class="wow fadeInUp">
                        <a href="Contact-us.html" class="tf-btn-2 has-icon has-ic-large">
                            <div class="wrap-text text-body-2 fw-medium text-white">
                                <div class="ic-wrap">
                                    <div class="icon icon-cart-bag"></div>
                                </div>
                                <span class="text text-linear">
                                    Start Your Project
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `;
    return footerHTML;
}

// ============================================
// INJECT COMPONENTS INTO DOM
// ============================================
function initializeComponents() {
    // Inject header at the beginning of body
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = renderHeader();
    document.body.insertBefore(headerContainer.firstElementChild, document.body.firstChild);

    // Inject mobile menu at the end of body (before scripts)
    const mobileMenuContainer = document.createElement('div');
    mobileMenuContainer.innerHTML = renderMobileMenu();
    document.body.insertBefore(mobileMenuContainer.firstElementChild, document.querySelector('script'));

    // Inject footer before closing main tag or at the end
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = renderFooter();
    const mainTag = document.querySelector('main');
    if (mainTag) {
        mainTag.parentNode.insertBefore(footerContainer.firstElementChild, mainTag.nextSibling);
    } else {
        document.body.appendChild(footerContainer.firstElementChild);
    }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}
