<script setup lang="ts">
const props = defineProps({
    context: Object,
})
function handleBlur(e: any) {
    props?.context?.handlers.blur(e.value)
}
function handleInput(e: any) {
    props.context?.node.input(e.value)
}
</script>

<template>
    <div>
        <Dropdown
                class="w-full"
                v-model="props.context._value"
                :input-id="props.context?.id"
                :disabled="props.context?.attrs?._disabled ?? false"
                :readonly="props.context?.attrs?._readonly ?? false"
                :input-style="props.context?.attrs?.style"
                :input-class="props.context?.attrs?.class"
                :tabindex="props.context?.attrs?.tabindex"
                :aria-label="props.context?.attrs?.ariaLabel"
                :aria-labelledby="props.context?.attrs?.ariaLabelledby"
                :options="props.context?.attrs?.options"
                :option-label="props.context?.attrs?.optionLabel ?? 'label'"
                :option-value="props.context?.attrs?.optionValue ?? 'value'"
                :placeholder="props.context?.attrs?.placeholder"
                :filter="props.context?.attrs?.filter ?? false"
                :show-clear="props.context?.attrs?.showClear ?? false"
                @change="handleInput"
                @blur="handleBlur"
        />
    </div>
</template>