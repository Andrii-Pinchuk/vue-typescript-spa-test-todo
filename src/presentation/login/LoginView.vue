<template>
  <div class="login-page">
    <header class="page-header">
      <div class="page-header__top-line"></div>
      <div class="page-header__logo-block">
        <img src="../../assets/images/logos/logo.svg" alt="Citi company logo"
             class="page-header__logo">
      </div>
    </header>
    <main class="login-page__main-content">
      <section class="login-page__main-title-container">
        <h1 class="login-page__main-title">Welcome to Business Analytics Online</h1>
      </section>
      <section class="product-description login-page__product-description">
        <div>
          <p class="product-description__main-description">
          <span class="product-description__main-description_bold-text">Business Analytics</span>
          — a new, convenient tool for managing and forecasting your business performance, which
          will help analyze your own finances and cash flows, visualize your reporting, business
          processes, KPI's</p>
          <ul class="article-list">
            <li>
              <article>
                <h2>Interactive Reporting</h2>
                <p>In just a few clicks, you can connect your data from 1C,CRM (Bitrix24, AmoCRM,
                  ZohoCRM), E&#8209;commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta),
                  Google Analytics and many more systems that reflect different aspects of
                  business activities.</p>
              </article>
            </li>
            <li>
              <article>
                <h2>Automated data updates</h2>
                <p>The application automatically updates and structures the data in just 60 seconds,
                  saving you time and money.</p>
              </article>
            </li>
            <li>
              <article>
                <h2>Data Security</h2>
                <p>The Bank guarantees the safety of your personal data, ensuring their
                  integrity and confidentiality.</p>
              </article>
            </li>
          </ul>
        </div>
        <div class="login-page__login-form-container">
          <form class="login-form" v-on:submit="validateCredential($event)">
            <div class="login-form__login-information">
              <div class="login-form__login-input-container">
                <label for="login">Name</label>
                <input type="text" id="login" v-model="login" v-on:keydown="clearLoginInputErrors">
                <div class="error-information login-form__error-information"
                     v-show="isLoginEmpty && !isWrongUserCredentials">
                  <img src="../../assets/images/errors/input_error.svg" alt="Input error">
                  <span>Cannot be empty</span>
                </div>
                <div class="error-information login-form__error-information"
                     v-show="isWrongUserCredentials && !isLoginEmpty">
                  <img src="../../assets/images/errors/input_error.svg" alt="Input error">
                  <span>Enter valid user credentials</span>
                </div>
              </div>
              <div class="login-form__password-input-container">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password"
                       v-on:keydown="clearPasswordInputErrors">
                <div class="error-information login-form__error-information"
                     v-show="isPasswordEmpty && !isWrongUserCredentials">
                  <img src="../../assets/images/errors/input_error.svg" alt="Input error">
                  <span>Cannot be empty</span>
                </div>
              </div>
              <button type="submit" class="button login-form__submit-button">
                Login
              </button>
              <button type="button" class="button login-form__reset-password-button">
                Forgot password
              </button>
            </div>
            <button type="button" class="button login-form__register-button">Register now</button>
          </form>
        </div>
      </section>
    </main>
    <footer class="page-footer">
      <div class="page-footer__main-content">
        <img src="../../assets/images/logos/logo.svg" alt="Citi company logo"
             class="page-footer__logo">
        <ul>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Notice at Collection</a></li>
          <li><a href="#">CA Privacy Hub</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
      <span class="page-footer__company-information">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
      </span>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Pages } from "@/router/Pages";

@Component
export default class LoginView extends Vue {
  private login = "";
  private password = "";
  private isLoginEmpty = false;
  private isPasswordEmpty = false;
  private isWrongUserCredentials = false;

  private validateCredential(event: Event) {
    event.preventDefault();

    this.clearLoginInputErrors();
    this.clearPasswordInputErrors();

    if (this.login.length === 0) {
      this.isLoginEmpty = true;
    }

    if (this.password.length === 0) {
      this.isPasswordEmpty = true;
    }

    if (this.login === "Admin" && this.password === "12345") {
      localStorage.setItem("isUserAuthorized", "true");
      localStorage.setItem("userName", this.login);
      this.$router.push({
        path: Pages.TODO
      });
    } else if (this.login.length !== 0 && this.password.length !== 0) {
      this.isLoginEmpty = false;
      this.isWrongUserCredentials = true;
    }
  }

  private clearLoginInputErrors() {
    this.isLoginEmpty = false;
    this.isWrongUserCredentials = false;
  }

  private clearPasswordInputErrors() {
    this.isPasswordEmpty = false;
  }
}
</script>
