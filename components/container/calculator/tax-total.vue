<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'

const totalModel = ref("")
const supplyModel = ref("0")
const vatModel = ref("0")

const addCommas = (value: string) => CalculationService.addCommas(value)

const onSubmit = () => {
  // 입력에서 콤마(,) 제거
  const stringWithoutCommas = totalModel.value.replace(/,/g, '');
  const { supplyValue, vatValue } = CalculationService.getSupplyVatFromTotal(Number(stringWithoutCommas))

  supplyModel.value = addCommas(String(supplyValue))
  vatModel.value = addCommas(String(vatValue))
}

const onReset = () => {
  totalModel.value = ""
  supplyModel.value = "0"
  vatModel.value = "0"
}
</script>

<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
    >
      <h4>합계금액으로 계산</h4>
      <hr>

      <ui-input
          title="합계금액"
          postfix="원"
          v-model="totalModel"
          @input="totalModel = addCommas(totalModel)"
      />

      <div class="q-pa-md q-gutter-sm row justify-evenly">
        <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
        <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
      </div>

      <ui-input
          title="공급가액"
          postfix="원"
          v-model="supplyModel"
          hint="입력하신 합계 금액에서 부가세액을 뺀 금액"
          readonly
      />

      <ui-input
          title="부가세액"
          postfix="원"
          v-model="vatModel"
          hint="입력하신 합계 금액에 포함된 부가세액"
          readonly
      />

    </q-form>
  </div>
</template>
