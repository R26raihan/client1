export const virtualTours = [
  { id: "lebombo", title: "Ruang hunian", asset: "Lebombo", description: "Cahaya alami dan lantai kayu", author: "Greg Zaal", preview: "/images/vr-lebombo.jpg" },
  { id: "hotel_room", title: "Kamar hotel", asset: "Hotel Room", description: "Interior kamar dengan lampu hangat", author: "Greg Zaal", preview: "/images/vr-hotel_room.jpg" },
  { id: "artist_workshop", title: "Studio seniman", asset: "Artist Workshop", description: "Ruang kreatif dengan bukaan lebar", author: "Oliksiy Yakovlyev", preview: "/images/vr-artist_workshop.jpg" },
  { id: "photo_studio_01", title: "Studio foto", asset: "Photo Studio 01", description: "Ruang studio dengan pencahayaan buatan", author: "Sergej Majboroda", preview: "/images/vr-photo_studio_01.jpg" },
] as const;

export type VirtualTourExample = (typeof virtualTours)[number];

export function virtualTourUrl(tour: VirtualTourExample) {
  const parameters = new URLSearchParams({
    panorama: `https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/${tour.id}.jpg`,
    autoLoad: "true",
    hfov: "100",
    title: tour.title,
    author: `${tour.author} / Poly Haven`,
  });
  return `https://cdn.pannellum.org/2.5/pannellum.htm#${parameters.toString().replace(/\+/g, "%20")}`;
}
