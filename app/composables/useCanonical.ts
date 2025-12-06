export const useCanonical = () => {
  const route = useRoute()
  useHead({
    link: [
      {
        rel: 'canonical',
        href: `https://TODO.fr${route.path}`
      }
    ]
  })
}