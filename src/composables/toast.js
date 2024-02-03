import { ref, onUnmounted } from 'vue';
export const useToast = () => {
    const showToast = ref(false);
    const toastMessage = ref('');
    const toastAlertType = ref('');
    const timeout = ref(null);
    const triggerToast = (message, type = 'success') => {
        toastMessage.value = message;
        toastAlertType.value = type;
        showToast.value = true;

        timeout.value = setTimeout(() => {
            showToast.value = false;
            toastMessage.value = '';
            toastAlertType.value = '';
        }, 3000)
    }

    onUnmounted(() => {
        clearTimeout(timeout.value)
    })

    return {
        showToast,
        toastMessage,
        toastAlertType,
        triggerToast
    }
}
