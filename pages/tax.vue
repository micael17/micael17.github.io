<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col-shrink">
        <container-calculator-tax-total/>
      </div>
      <div class="col-shrink">
        <container-calculator-tax-supply />
      </div>
    </div>
    <hr>
    <div class="row q-ma-lg">
      <container-desc-tax />
    </div>
  </q-page>
</template>
<script setup lang="ts">
useHead({
  title: '부가세 계산기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '계산기, 부가세, 부가세계산, 부가가치세, 부가세계산법, 부가세계산기, 부가가치세 계산기, 세금, 부가가치세 계산, vat, vat계산, 10%'},
    {name: 'description', content: '부가세, 부가가치세를 쉽계 계산하세요. 공급가액과 합계금액으로도 계산할 수 있습니다.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '부가세 계산기 - 갓 계산기'},
    {name: 'og:description', content: '부가세, 부가가치세를 쉽계 계산하세요. 공급가액과 합계금액으로도 계산할 수 있습니다.'},
    {name: 'og:url', content: 'https://god-caclulator.com/tax'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>
