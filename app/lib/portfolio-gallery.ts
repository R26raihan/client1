import { projects } from "./projects";

export const portfolioStyles = ["Modern", "Tropis", "Villa", "Interior", "Klasik", "Industrial", "Mediteran", "American"];
export const portfolioCities = [...new Set(projects.map(project => project.city))].sort((a, b) => a.localeCompare(b, "id"));
export const portfolioPageSize = 6;

export function filterPortfolio(params: URLSearchParams) {
  const requestedStyle = params.get("kategori") ?? "";
  const style = portfolioStyles.includes(requestedStyle) ? requestedStyle : "";
  const city = params.get("kota") ?? "";
  const query = (params.get("q") ?? "").trim().toLocaleLowerCase("id");
  const minimum = Math.max(0, Number(params.get("min")) || 0);
  const maximum = params.get("max") ? Math.max(0, Number(params.get("max")) || 0) : Infinity;
  const results = projects.filter(project => (!style || project.category === style) && (!city || project.city === city) && Number(project.area) >= minimum && Number(project.area) <= maximum && `${project.title} ${project.city} ${project.category}`.toLocaleLowerCase("id").includes(query));
  switch (params.get("urut")) {
    case "nama": results.sort((a, b) => a.title.localeCompare(b.title, "id")); break;
    case "luas-naik": results.sort((a, b) => Number(a.area) - Number(b.area)); break;
    case "luas-turun": results.sort((a, b) => Number(b.area) - Number(a.area)); break;
  }
  const pageCount = Math.max(1, Math.ceil(results.length / portfolioPageSize));
  const page = Math.min(pageCount, Math.max(1, Math.floor(Number(params.get("halaman")) || 1)));
  return { style, results, page, pageCount, visible: results.slice((page - 1) * portfolioPageSize, page * portfolioPageSize) };
}
