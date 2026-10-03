<template>
  <div class="content column">
    <!-- ::: components -->
    <mn-title id="button" tag="h2" tabindex="-1">Button</mn-title>
    <div class="row">
      <mn-button label="test" />
      <mn-button label="test" variant="secondary" />
      <mn-button label="test" variant="danger" />
      <mn-button label="test" variant="outline" />
      <mn-button label="test" variant="text" />
      <mn-button label="test" variant="inline" />
    </div>
    <div class="row">
      <mn-button label="test" icon="moon" labelless />
      <mn-button label="test" icon="moon" />
      <mn-button label="test" icon="moon" pending />
      <mn-button label="test" icon="moon" disabled />
    </div>
    <div class="row">
      <mn-button label="test" variant="text">
        <mn-icon icon="moon" color="primary" />
        <span>slotted content</span>
        <mn-icon icon="moon" color="primary" />
      </mn-button>
    </div>
    <mn-button label="test" wide />
    <mn-title id="container" tag="h2" tabindex="-1">Container</mn-title>
    <div class="column">
      <mn-container size="small" surface>
        <mn-text>How to use</mn-text>
        <mn-text>The container element</mn-text>
      </mn-container>
      <mn-container size="medium" surface>
        <mn-text>How to use</mn-text>
        <mn-text>The container element</mn-text>
      </mn-container>
      <mn-container size="large" surface>
        <mn-text>How to use</mn-text>
        <mn-text>The container element</mn-text>
      </mn-container>
      <mn-container size="wide" surface>
        <mn-text>How to use</mn-text>
        <mn-text>The container element</mn-text>
      </mn-container>
    </div>
    <mn-title id="icon" tag="h2" tabindex="-1">Icon</mn-title>
    <div class="row">
      <mn-icon icon="moon" label="test" />
      <mn-icon icon="moon -rtl" />
      <mn-icon icon="moon" color="primary" />
      <mn-icon icon="moon" color="secondary" />
      <mn-icon icon="moon" color="success" />
      <mn-icon icon="moon" color="warning" />
      <mn-icon icon="moon" color="danger" />
    </div>
    <div class="row">
      <mn-icon icon="moon" spin />
    </div>
    <mn-title id="link" tag="h2" tabindex="-1">Link</mn-title>
    <div class="row">
      <mn-link label="test" to="/" />
      <mn-link label="test" variant="secondary" to="/" />
      <mn-link label="test" variant="danger" to="/" />
      <mn-link label="test" variant="outline" to="/" />
      <mn-link label="test" variant="text" to="/" />
      <mn-link label="test" variant="inline" to="/" />
      <mn-link label="test" variant="inline" to="https://test.com" />
    </div>
    <div class="row">
      <mn-link label="test" icon="moon" to="/" labelless />
      <mn-link label="test" icon="moon" to="/" />
      <mn-link label="test" icon="moon" to="https://test.com" />
    </div>
    <div class="row">
      <mn-link label="test" variant="text" to="/">
        <mn-icon icon="moon" color="primary" />
        <span>slotted content</span>
        <mn-icon icon="moon" color="primary" />
      </mn-link>
    </div>
    <mn-link label="test" wide to="/" />
    <mn-title id="text" tag="h2" tabindex="-1">Text</mn-title>
    <div class="column">
      <mn-text align="start">How to use the text element</mn-text>
      <mn-text align="center">How to use the text element</mn-text>
      <mn-text align="end">How to use the text element</mn-text>
      <mn-text small>How to use the text element</mn-text>
      <mn-text large>How to use the text element</mn-text>
      <mn-text muted>How to use the text element</mn-text>
      <mn-text bold>How to use the text element</mn-text>
      <mn-text italic>How to use the text element</mn-text>
      <mn-text balanced
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam
        nihil adipisci optio possimus, voluptates quibusdam impedit est esse id dolores blanditiis, quidem illo
        inventore explicabo?</mn-text
      >
      <mn-text tag="h2" :lines="2"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam
        nihil adipisci optio possimus, voluptates quibusdam impedit est esse id dolores blanditiis, quidem illo
        inventore explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatem velit dignissimos
        animi exercitationem earum amet atque omnis sit quaerat ducimus asperiores, alias soluta consectetur non eaque a
        laudantium nulla!</mn-text
      >
    </div>
    <mn-title id="title" tag="h2" tabindex="-1">Title</mn-title>
    <div class="column">
      <mn-title tag="h1">How to use the title element</mn-title>
      <mn-title tag="h2">How to use the title element</mn-title>
      <mn-title tag="h3">How to use the title element</mn-title>
      <mn-title tag="h4">How to use the title element</mn-title>
      <mn-title tag="h5">How to use the title element</mn-title>
      <mn-title tag="h6">How to use the title element</mn-title>
    </div>
    <div class="column">
      <mn-title tag="h2" align="start">How to use the title element</mn-title>
      <mn-title tag="h2" align="center">How to use the title element</mn-title>
      <mn-title tag="h2" align="end">How to use the title element</mn-title>
    </div>
    <div class="column">
      <mn-title tag="h2" :lines="1"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt consequatur exercitationem, adipisci debitis
        commodi suscipit eligendi nulla? Saepe magnam excepturi ratione tenetur quibusdam repudiandae consequatur quidem
        officiis ipsum dolor.</mn-title
      >
    </div>
    <!-- ::: examples -->
    <!-- <section id="signin" class="example" tabindex="-1"></section> -->
  </div>
</template>

<script setup>
  import { MnButton, MnContainer, MnIcon, MnLink, MnText, MnTitle } from "../../index.ts";

  defineOptions({ name: "mn-dev-components" });
</script>

<style scoped>
  .column {
    display: grid;
    align-content: start;
    gap: 0.5rem;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }

  .row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .content {
    padding: 1rem;
  }

  .content .example {
    min-block-size: 100dvh;
  }

  .mn-title[tabindex] {
    margin-block: var(--size-8) var(--size-4);
  }
</style>
