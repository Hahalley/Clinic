<template>
  <div class="information">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-10">
      <span class="tw-text-primary-400">以下為您的預約</span>
      <img
        class="tw-opacity-40 tw-w-6 tw-h-6 tw-mb-2"
        src="../assets/icon/triangle.png"
        alt=""
      />
      <div
        class="tw-text-primary-400 tw-border-primary-200 tw-border tw-tracking-wider tw-flex tw-flex-col tw-mx-12 tw-mb-10 tw-p-2 tw-rounded-md"
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
      <span class="tw-text-primary-400">新增您的看診資訊</span>
      <img
        class="tw-opacity-40 tw-w-6 tw-h-6 tw-mb-2"
        src="../assets/icon/triangle.png"
        alt=""
      />
      <div>
        <form action="" class="tw-flex tw-flex-col tw-items-start tw-w-full">
          <label class="tw-text-primary-400 tw-text-sm tw-mb-1" for="name"
            >看診人姓名(真實全名)</label
          >
          <input
            class="tw-border tw-border-primary-200 tw-rounded-md tw-mb-2 tw-pr-28"
            id="name"
            type="text"
          />
          <label class="tw-text-primary-400 tw-text-sm tw-mb-1" for="birth"
            >出生年月日(民國)</label
          >
          <input
            class="tw-border tw-border-primary-200 tw-rounded-md tw-mb-2 tw-pr-28"
            id="birth"
            type="text"
          />
          <label class="tw-text-primary-400 tw-text-sm tw-mb-1" for="phone"
            >聯絡電話</label
          >
          <input
            class="tw-border tw-border-primary-200 tw-rounded-md tw-mb-2 tw-pr-28"
            id="phone"
            type="number"
          />
          <label class="tw-text-primary-400 tw-text-sm tw-mb-1" for="phone"
            >備註(若看診人數超過一人，請填寫看診人數)
          </label>
          <textarea
            class="tw-border tw-border-primary-200 tw-rounded-md tw-mb-2 tw-pr-1"
            cols="33"
            rows="5"
            name="content"
            id="content"
          ></textarea>
          <div class="tw-flex tw-items-center tw-mb-7">
            <input
              class="w-border tw-border-primary-200 tw-rounded-md tw-mr-2"
              type="checkbox"
              name=""
              value=""
            />
            <span class="tw-text-sm tw-text-red-400"
              >我要在預約當日接收Line訊息提醒通知</span
            >
          </div>
        </form>
      </div>

      <div class="tw-flex">
        <button
          class="tw-text-white tw-text-sm tw-bg-primary-200 tw-border tw-border-primary-200 tw-rounded-md tw-mx-3 tw-py-3 tw-px-10"
        >
          上一步
        </button>
        <button
          class="tw-text-white tw-text-sm tw-bg-primary-100 tw-border tw-border-primary-100 tw-rounded-md tw-mx-3 tw-py-3 tw-px-8"
        >
          確認預約
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
