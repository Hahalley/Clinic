<template>
  <div class="home">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-10 fade opacity-100">
      <span class="tw-text-primary-400">選擇預約類別</span>
      <img
        class="tw-opacity-40 tw-w-6 tw-h-6 tw-mb-2"
        src="../assets/icon/triangle.png"
        alt=""
      />

      <!-- scroll -->
      <div class="tw-flex tw-mb-5 scroll">
        <div
          class="tw-flex tw-flex-col tw-items-center tw-border tw-border-primary-200 tw-rounded-md tw-text-primary-400 tw-w-2/3 tw-px-8 tw-py-2 tw-mx-4"
        >
          <img
            class="tw-w-3/5"
            src="https://img.icons8.com/ios/250/000000/picture.png"
            alt=""
          />
          <span class="tw-my-1">一般門診</span>
          <span class="tw-text-xs"
            >請提早於預約時間前10分鐘報到， <br />
            若超過預約時間5分鐘以上將自動取<br />
            消，則重新以現場掛號方式安排...</span
          >
        </div>
        <div
          class="tw-flex tw-flex-col tw-items-center tw-border tw-border-primary-200 tw-rounded-md tw-text-primary-400 tw-w-2/3 tw-px-8 tw-py-2 tw-mx-4"
        >
          <img
            class="tw-w-3/5"
            src="https://img.icons8.com/ios/250/000000/picture.png"
            alt=""
          />
          <span class="tw-my-1">一般門診</span>
          <span class="tw-text-xs"
            >請提早於預約時間前10分鐘報到，
            <br />若超過預約時間5分鐘以上將自動取 <br />
            消，則重新以現場掛號方式安排...</span
          >
        </div>
      </div>
      <span class="tw-text-primary-400">選擇看診醫師</span>
      <img
        class="tw-opacity-40 tw-w-6 tw-h-6 tw-mb-2"
        src="../assets/icon/triangle.png"
        alt=""
      />
      <div>
        <select
          class="tw-border tw-border-primary-400 tw-rounded-md tw-text-primary-400 tw-py-1 tw-px-24 tw-mb-5"
        >
          <option>不指定醫師</option>
          <option>ＡＡＡ醫師</option>
          <option>ＢＢＢ醫師</option>
          <option>ＣＣＣ醫師</option>
        </select>
      </div>
      <!-- calendar -->
      <div><h1>calendar</h1></div>

      <span class="tw-text-primary-400">選擇看診時間</span>
      <img
        class="tw-opacity-40 tw-w-6 tw-h-6 tw-mb-2"
        src="../assets/icon/triangle.png"
        alt=""
      />
      <div>
        <select
          class="tw-border tw-border-primary-400 tw-rounded-md tw-text-primary-400 tw-py-1 tw-px-29 tw-mb-5"
        >
          <option>15:30</option>
          <option>16:00</option>
          <option>16:30</option>
          <option>17:00</option>
        </select>
      </div>
      <button
        class="tw-text-white tw-text-sm tw-bg-primary-100 tw-border tw-border-primary-100 tw-rounded-md tw-px-32 tw-py-3 tw-mt-5"
      >
        下一步
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  width: 84vw;
  height: 50vw;
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
// calendar
</style>
