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
