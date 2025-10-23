const trigger = ref(false)

export const useTrigger = () => {
  function activate() {
    trigger.value = true
    setTimeout(() => {
      trigger.value = false
    }, 0)
  }

  return { trigger, activate }
}
