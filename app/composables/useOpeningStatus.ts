/** Accès libre réel : 5h00 → 23h00, tous les jours */
export function useOpeningStatus() {
  const isOpen = ref(true)
  const status = ref('Accès libre 5h00 → 23h00')
  let timer: ReturnType<typeof setInterval> | null = null

  const update = () => {
    const h = new Date().getHours()
    isOpen.value = h >= 5 && h < 23
    status.value = isOpen.value
      ? "Ouvert · accès libre jusqu'à 23h00"
      : 'Fermé · réouverture à 5h00'
  }

  onMounted(() => {
    update()
    timer = setInterval(update, 60_000)
  })
  onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
  })

  return { isOpen, status }
}
