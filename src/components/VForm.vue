<template>
    <div class="VForm">
        <VLabel :label="type.label" />
        <VInput :type="type.variable" v-if="type.variable === 'text' || type.variable === 'email' "/>
        <VTextArea v-else-if="type.variable === 'textarea' "/>
    </div>
</template>

<script>
import VLabel from './VLabel.vue';
import VInput from './VInput.vue';
import VTextArea from './VTextArea.vue';
    export default{
        nam: 'VForm',
        props: {
            type: Object
        },
        components: {
            VLabel,
            VInput,
            VTextArea
        },
    };
    
</script>

<style scoped>
    .VForm{
        padding: 0.5rem;
    }
</style>



