<template>
    <label class="VLabel"> {{ label }} </label>
</template>

<script>

    export default{
        nam: 'VLabel',
        props: {
            label: String
        },
    };
</script>

<style scoped>
    .VLabel{
        padding: 0.5rem;
    }
</style>
