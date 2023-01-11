export default async function getShows() {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
}
