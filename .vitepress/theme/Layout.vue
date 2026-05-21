<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Feedback from './components/Feedback.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <Feedback v-if="frontmatter.layout !== 'home'" />
    </template>
  </Layout>
</template>
