<template>
  <div class="home">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-10 fade opacity-100">
      <span class="tw-text-primary-400">您已預約的門診</span>
      <img
        class="tw-opacity-40 tw-w-6 tw-h-6 tw-mb-2"
        src="../assets/icon/triangle.png"
        alt=""
      />
      <div
        class="tw-bg-primary-500 tw-text-primary-400 tw-tracking-wider tw-flex tw-flex-col tw-mx-12 tw-mb-10 tw-p-2 shadow-yellow tw-rounded-md"
      >
        <span class="tw-text-lg tw-mb-2">一般門診預約</span>
        <span class="tw-text-xs tw-mb-5"
          >請提早於預約時間前10分鐘報到，若超過預約時間5分
          鐘以上將自動取消，則重新以現場掛號方式安排...</span
        >
        <span class="tw-mb-1">2022年01月27日15:30</span>
        <span class="tw-mb-1">BBB醫師 </span>
        <span class="tw-mb-1">活悅診所</span>
        <span>桃園市中壢區民權路四段281號1樓</span>
      </div>
      <div class="tw-relative tw-mb-10">
        <img
          class="tw-absolute tw-left-2 tw-top-1 tw-w-12"
          src="https://img.icons8.com/ios/250/FFFFFF/notepad.png"
          alt=""
        />
        <button
          class="tw-text-white tw-text-sm tw-bg-primary-100 tw-border tw-border-primary-100 tw-rounded-md tw-px-28 tw-py-3"
        >
          我要預約看診
        </button>
      </div>
      <div class="tw-relative">
        <img
          class="tw-absolute tw-left-2 tw-top-1 tw-w-12"
          src="https://img.icons8.com/ios/250/FFFFFF/notepad.png"
          alt=""
        />
        <button
          class="tw-text-white tw-text-sm tw-bg-primary-200 tw-border tw-border-primary-200 tw-rounded-md tw-px-28 tw-py-3"
        >
          查看歷史紀錄
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserIDToken } from '../api/line'
import queryString from 'query-string'
import axios from 'axios'
export default {
  created() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has('state') && urlParams.has('code')) {
        const state = urlParams.get('state')
        const code = urlParams.get('code')
        if (state === 'clinic') {
          const URL = 'https://api.line.me/oauth2/v2.1/token?'
          const getTokenUrl = `${URL}`
          const getTokenBody = queryString.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.VUE_APP_REDIRECT_URL,
            client_id: process.env.VUE_APP_LINE_CHANNEL_ID,
            client_secret: process.env.VUE_APP_CHANNEL_SECRET,
          })
          axios
            .post(getTokenUrl, getTokenBody)
            .then(e1 => {
              const token = e1.data.access_token
              const idToken = e1.data.id_token
              console.log(e1)
              const getProfileApiUrl = 'https://api.line.me/v2/profile'
              axios({
                method: 'GET',
                url: getProfileApiUrl,
                responseType: 'json', // responseType 也可以寫在 header 裡面
                headers: {
                  Authorization: `Bearer ${token}`, // Bearer 跟 token 中間有一個空格
                },
              })
                .then(e2 => {
                  alert(
                    `line user id: ${e2.data.userId}, display name:${e2.data.displayName}`
                  )
                  console.log(JSON.stringify(e2))

                  const getVerifyApiUrl =
                    'https://api.line.me/oauth2/v2.1/verify'
                  const getVerifyBody = queryString.stringify({
                    client_id: process.env.VUE_APP_LINE_CHANNEL_ID,
                    id_token: idToken,
                  })
                  axios
                    .post(getVerifyApiUrl, getVerifyBody)
                    .then(e3 => {
                      alert(`line email: ${e3.data.email}`)
                      // console.log(JSON.stringify(e3))
                    })
                    .catch(error => {
                      console.log(`錯誤: ${error}`)
                    })
                })
                .catch(error => {
                  console.log(`錯誤: ${error}`)
                })
            })
            .catch(error => {
              console.log(error)
              alert(error)
            })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.shadow-yellow {
  box-shadow: 1px 1px 9px 5px #ffe980;
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
