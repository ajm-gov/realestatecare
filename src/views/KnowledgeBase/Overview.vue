
<template>
    <Layout>
        <ExitComponent label="Back to Homescreen" routerLink="/home" />
        <KnowledgeArticleGrid />
    </Layout>
</template>

<script setup lang="ts">
    import KnowledgeArticleGrid from "@/components/knowledgebase/KnowledgeArticleGrid.vue";
    import Layout from "@/components/Layout.vue";
    import ExitComponent from "@/components/ExitComponent.vue";
</script>