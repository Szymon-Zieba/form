<template>
    <textarea rows="10" cols="21" class="VTextArea"> </textarea>
</template>

<script>
    export default{
        nam: 'VTextArea',
    };
</script>

<style scoped>
    .VTextArea{
        width:100%;
        margin-bottom: 10px;
        box-sizing:border-box;
        background:none;
        outline:none;
        resize:none;
        border:0;
        font-family:'Montserrat',sans-serif;
        transition:all .3s;
        border-right:2px solid #bebed2;
        border-bottom:2px solid #bebed2;
    }
</style>
