<template>
<tiny-form ref="form" :model="form" labtiny-width="80px">
  <tiny-form-item label="活动名称">
    <tiny-input v-model="form.name"></tiny-input>
  </tiny-form-item>
  <tiny-form-item label="活动区域">
    <tiny-select v-model="form.region" placeholder="请选择活动区域">
      <tiny-option label="区域一" value="shanghai"></tiny-option>
      <tiny-option label="区域二" value="beijing"></tiny-option>
    </tiny-select>
  </tiny-form-item>
  <tiny-form-item label="活动时间">
    <tiny-col :span="11">
      <tiny-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></tiny-date-picker>
    </tiny-col>
    <tiny-col class="line" :span="2">-</tiny-col>
    <tiny-col :span="11">
      <tiny-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></tiny-time-picker>
    </tiny-col>
  </tiny-form-item>
  <tiny-form-item label="即时配送">
    <tiny-switch v-model="form.delivery"></tiny-switch>
  </tiny-form-item>
  <tiny-form-item label="活动性质">
    <tiny-checkbox-group v-model="form.type">
      <tiny-checkbox label="美食/餐厅线上活动" name="type"></tiny-checkbox>
      <tiny-checkbox label="地推活动" name="type"></tiny-checkbox>
      <tiny-checkbox label="线下主题活动" name="type"></tiny-checkbox>
      <tiny-checkbox label="单纯品牌曝光" name="type"></tiny-checkbox>
    </tiny-checkbox-group>
  </tiny-form-item>
  <tiny-form-item label="特殊资源">
    <tiny-radio-group v-model="form.resource">
      <tiny-radio label="线上品牌商赞助"></tiny-radio>
      <tiny-radio label="线下场地免费"></tiny-radio>
    </tiny-radio-group>
  </tiny-form-item>
  <tiny-form-item label="活动形式">
    <tiny-input type="textarea" v-model="form.desc"></tiny-input>
  </tiny-form-item>
  <tiny-form-item>
    <tiny-button type="primary" @click="onSubmit">立即创建</tiny-button>
    <tiny-button>取消</tiny-button>
  </tiny-form-item>
</tiny-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>