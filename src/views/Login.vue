<template>
  <div class="login">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-14 fade opacity-100">
      <!-- <div class="logo tw-mb-3"></div> -->
      <img class="tw-w-1/3 tw-mb-7" src="../assets/icon/logo.png" alt="" />
      <span
        class="tw-text-primary-100 tw-tracking-widest tw-font-weight-500 tw-mb-10"
        >活悅診所線上預約</span
      >
      <div class="tw-relative">
        <img
          class="tw-absolute tw-top-2 tw-left-1 tw-w-14 tw-opacity-50"
          src="https://img.icons8.com/ios/250/000000/info.png"
          alt=""
        />
        <input
          type="text"
          placeholder="輸入身分證字號"
          class="tw-border tw-border-gray-400 tw-rounded-md tw-py-3 tw-px-11 tw-mb-7"
        />
      </div>
      <div class="tw-relative">
        <input
          type="text"
          placeholder="輸入密碼"
          class="tw-border tw-border-gray-400 tw-rounded-md tw-py-3 tw-px-11 tw-mb-7"
        />
        <img
          class="tw-absolute tw-top-2 tw-left-1 tw-w-14 tw-opacity-50"
          src="https://img.icons8.com/ios/250/000000/info.png"
          alt=""
        />
      </div>
      <div
        class="tw-flex tw-text-sm tw-font-weight-500 tw-tracking-widest tw-mb-5"
      >
        <span class="tw-text-primary-200">首次使用本服務嗎？</span>
        <span class="tw-text-primary-100 tw-underline tw-cursor-pointer"
          >請點此註冊</span
        >
      </div>
      <div
        class="tw-flex tw-items-center tw-text-sm tw-font-weight-500 tw-tracking-wides tw-mb-5"
      >
        <div class="line"></div>
        <span class="tw-text-primary-200 tw-mx-2">或者</span>
        <div class="line"></div>
      </div>
      <div class="tw-relative">
        <img
          class="tw-absolute tw-left-2 tw-w-1/6"
          src="../assets/icon/LINE_logo.png"
          alt=""
        />
        <button
          @click="login()"
          class="tw-text-white tw-text-sm tw-bg-primary-300 tw-border tw-border-primary-300 tw-rounded-md tw-px-20 tw-py-3"
        >
          使用LINE帳號登入
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      window.location.href =
        'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656969032&redirect_uri=http://localhost:8080/home&state=clinic&scope=openid%20profile'
    },
  },
}
</script>

<style lang="scss" scoped>
.line {
  background-color: #989898;
  height: 1px;
  width: 100px;
}
input::-webkit-input-placeholder {
  color: #989898;
  font-size: 14px;
  padding-left: 7px;
}
input::-moz-input-placeholder {
  color: #989898;
  font-size: 14px;
  padding-left: 7px;
}
input::-ms-input-placeholder {
  color: #989898;
  font-size: 14px;
  padding-left: 7px;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade {
  animation: fadein 3s;
}
</style>
