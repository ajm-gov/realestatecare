
<template>
    <Layout>
        <ExitComponent label="Back to Homescreen" routerLink="/home" />
        <KnowledgeSearchBar />
        <KnowledgeArticleGrid />
    </Layout>
</template>

<script setup lang="ts">
    import KnowledgeSearchBar from "@/components/knowledgebase/KnowledgeSearchBar.vue"
    import KnowledgeArticleGrid from "@/components/knowledgebase/KnowledgeArticleGrid.vue";
    import Layout from "@/components/Layout.vue";
    import ExitComponent from "@/components/ExitComponent.vue";
</script>