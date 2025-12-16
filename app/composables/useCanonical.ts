export const useCanonical = () => {
  const route = useRoute()
  useHead({
    link: [
      {
        rel: 'canonical',
        href: `https://aux-murmures-des-songes.fr${route.path}`
      }
    ]
  })
}