// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    h1(slot="ehrPageTitle") Respirator
    div(class="region")
      p component name: Respirator
      p title: Respirator
      p redirect: 
      p route name: respirator
      p full path: /ehr/current/assessments/respirator
      p another line now using spaces
    div(class="region")
      div(class="columns")
        div(class="column is-one-third")
          label(for="sampleTA") Sample Textarea
          textarea(class="textarea" id="sampleTA", name="Sample TS")
        div(class="column is-one-third")
          label column two
          input(class="input is-info" readonly value="read only text" type="text" placeholder="Text input")
        div(class="column is-one-third")
          label column three
          input(class="input is-info" readonly value="read only text" type="text" placeholder="Text input")
      div(class="columns")
        div(class="column is-one-third")
          label another
          input(class="input", type="text")
        div(class="column is-one-third")
          label another
          input(class="input", type="text")
        div(class="column is-one-third")
          label pick one
          div(class="select")
            select
              option one
              option two
              option three
</template>

<script>
export default {
  name: 'Respirator'
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';

.select {
  display: block;
}
select {
  width: 100%;
}
.region {
  /* border: 1px dashed $black; */
}
.Respirator {
  padding: 1rem;

  &__main {
    font-size: 0.8rem;
  }
}
</style>
