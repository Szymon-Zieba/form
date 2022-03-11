<template>
    <button class="VButton"> {{ buttons }} </button>
</template>

<script>

    export default{
        nam: 'VButton',
        props: {
            buttons: Object
        },
    };
</script>

<style scoped>
    .VButton{
        padding: 0.5rem;
    }
</style>
