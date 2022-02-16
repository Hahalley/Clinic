<template>
  <div class="home">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-10">
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
          class="tw-border tw-border-primary-400 tw-rounded-md tw-text-primary-400 tw-py-1 tw-px-20"
        >
          <option>不指定醫師</option>
          <option>ＡＡＡ醫師</option>
          <option>ＢＢＢ醫師</option>
          <option>ＣＣＣ醫師</option>
        </select>
      </div>

      <!-- <div>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <b-form-select
          v-model="selected"
          :options="options"
          size="sm"
          class="mt-3"
        ></b-form-select>
        <div class="mt-3">
          Selected: <strong>{{ selected }}</strong>
        </div>
      </div> -->
      <!-- <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select> -->
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
</style>
