export const Photo = ({ photo }) => {
  const photoText = `[${photo.id}] ${photo.title}`
  return <li key={photo.id}>{photoText}</li>
}
