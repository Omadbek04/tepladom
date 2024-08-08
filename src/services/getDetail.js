export async function getDetailProduct(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed getting list");
  }
  const data = await response.json();
  return { data };
}