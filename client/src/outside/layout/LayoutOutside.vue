<template>
  <div :class="$options.name">
    <slot name="outside-header" :class="`${$options.name}__header`"> <app-header /> </slot>
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content`">
        <div name="nav" :class="`${$options.name}__nav`"><out-panel-nav /></div>
        <div name="content" :class="`${$options.name}__content`"><slot /></div>
      </div>
    </main>
    <slot name="outside-footer"> <app-footer></app-footer> </slot>
    <ehr-special />
  </div>
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import OutPanelNav from '../components/OutPanelNav.vue'
import EhrSpecial from '../../inside/components/EhrSpecial.vue'

export default {
  name: 'LayoutOutside',
  components: {
    OutPanelNav,
    AppFooter,
    AppHeader,
    EhrSpecial
  },
  computed: {
    path() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';
@import '../../scss/settings/color.scss';

$contentMinHeight: 800px;
$navWidth: 234px;
$pageWidth: 1024px;
body {
  background: $grey10;
}

.LayoutOutside {
  &__main {
    color: $grey60;
    background-color: $white;
    @include wrapper('page');
  }
  &__header {
  }
  &__main_content {
    margin: 0;
  }
  &__nav {
    // @include wrapper('narrow');
    padding: 0;
    margin: 0;
  }
  &__content {
    min-height: $contentMinHeight;
    padding: 0;
    margin: 0;
  }
}
</style>
