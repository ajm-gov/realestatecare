
<template>
    <Layout>
        <KnowledgeSearchBar />
        <KnowledgeArticleGrid />
    </Layout>
</template>

<script setup lang="ts">
import KnowledgeSearchBar from "@/components/knowledgebase/KnowledgeSearchBar.vue"
import KnowledgeArticleGrid from "@/components/knowledgebase/KnowledgeArticleGrid.vue";
import Layout from "@/components/Layout.vue";
</script>