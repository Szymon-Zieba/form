<template>
    <label class="VLabel"> {{ i18n.getMessage(label) }} </label>
</template>

<script>
    import * as i18n from "../i18n";
    export default{
        nam: 'VLabel',
        props: {
            label: String
        },
        setup(){
            return{
                i18n
            }
        }
    };
</script>

<style scoped>
    .VLabel{
        margin:10px 0;
        padding-top:10px;
        width:180px;color:#78788c;
    }
</style>
