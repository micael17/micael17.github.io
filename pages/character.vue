<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col">
        <container-calculator-character />
      </div>
    </div>
    <hr>
    <div class="row q-ma-lg">
      <container-desc-character />
    </div>
  </q-page>
</template>
<script setup lang="ts">
useHead({
  title: '글자수 계산기 - 갓 계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '글자수, 글자수 계산, 글자수 체크, 글자수 계산기, 글자수 세기, 이력서 글자수, 자소서 글자수, 글자수 바이트, 글자 바이트 수, 글자 바이트 계산, 글자수 카운트, 글자수 체크, 이력서, 자소서'},
    {name: 'description', content: '이력서, 자소서 및 각 종 문서 작업에 필요한 글자수를 세어주는 편리한 글자수 계산기입니다. 공백 포함 미포함 글자수와 바이트를 계산해줍니다.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '글자수 계산기 - 갓 계산기'},
    {name: 'og:description', content: '이력서, 자소서 및 각 종 문서 작업에 필요한 글자수를 세어주는 편리한 글자수 계산기입니다. 공백 포함 미포함 글자수와 바이트를 계산해줍니다.'},
    {name: 'og:url', content: 'https://god-caclulator.com/character'},
    {name: 'og:site_name', content: '갓 계산기'},
  ],
})
</script>