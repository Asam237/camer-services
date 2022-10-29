<template>
  <p style="color: #6c757d" class="submit">
    You are a service in Cameroon, submit your service in 3 minutes here
    <a
      href="https://github.com/Asam237/camer-services/issues/new?assignees=&labels=&template=take-the-service.yaml&title=DO+NOT+EDIT+-+takes+the+service"
      target="_blank"
      style="color: #2f80ed"
      class="underline"
      >here</a
    >
  </p>
</template>
<script>
export default {
  name: 'SubmitSurveyComponent',
}
</script>

<style lang="postcss" scoped>
.submit {
  @apply my-10 md:my-12 text-[20px] leading-[30px] font-normal text-center;
}
</style>
