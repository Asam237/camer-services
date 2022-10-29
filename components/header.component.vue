<template>
  <header class="header">
    <h1 style="color: #2f80ed" class="header__title">Camer services</h1>
    <div class="header__link">
      <a href="https://opencollective.com/osscameroon/donate" target="_blank">
        <img class="h-auto w-[200px]" :src="donate" alt="" />
      </a>
    </div>
    <SubmitSurveyComponent />
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      donate: require('../assets/donate.png'),
    }
  },
}
</script>

<style lang="postcss" scoped>
.header {
  @apply my-10 text-center md:my-16;
}
.header__title {
  @apply my-5 text-[40px] leading-[50px] font-bold;
}
.header__link {
  @apply flex items-center justify-center;
}
</style>
