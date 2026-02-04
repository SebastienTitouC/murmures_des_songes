export const useCanonical = (title:string, description:string) => {
  const route = useRoute()
  useHead({
    link: [
      {
        rel: 'canonical',
        href: `https://aux-murmures-des-songes.fr${route.path}`,
      }
    ]
  })

  useSeoMeta({
    title: title,
    description: description
    
  })
}