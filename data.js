// Shared project data for the four layout options. Captions come from ../index.html.
window.WORK = [
  { img: 'work-saku', title: 'Saku', type: 'App UI/UX', client: 'Saku', desc: 'A youth investing app a child owns and a parent trusts.' },
  { vid: 'reel-siis-cartel', title: 'SIIS Cartel Reel', type: 'Motion · Typography', client: 'Soltec Salud', desc: '52s of bold typography-as-hero across the SIIS product line.' },
  { img: 'work-potus', title: 'Potus', type: 'Brand System', client: 'Potus Studio', desc: 'A botanical mark and a terracotta-and-olive system, from moodboard to logo.' },
  { img: 'work-4dmedical', title: '4Dmedical', type: 'Brand Identity', client: '4Dmedical', desc: 'An identity held from packaging to building signage.' },
  { img: 'work-tctots', title: 'TC TOTs', type: 'Web Design', client: 'TC TOTs Airway Center', desc: 'Making a clinical pediatric specialty approachable to anxious parents.' },
  { img: 'work-8m-mujeres', title: '8M — Women in Tech', type: 'Paid Social', client: 'EasySystem', desc: 'Values-led campaign creative with 3D illustration.' },
  { img: 'work-cafeam', title: 'Café a.m.', type: 'Brand & Packaging', client: 'Café a.m. Roasters', desc: 'Specialty-grade shelf presence, without the rustic cliché.' },
  { img: 'work-soltec-corporate', title: 'Soltec Salud', type: 'Web Design', client: 'Soltec Salud', desc: 'Splitting hospitals from private practices at the door, in two languages.' },
  { vid: 'reel-soltec-highlights', title: 'Webinar Highlights', type: 'Motion · Data', client: 'Soltec Salud × Telepatía', desc: '54s of kinetic typography and animated stat counters.' },
  { img: 'work-barrajl', title: 'Barra y Licores JL', type: 'Brand Identity', client: 'Barra y Licores JL', desc: 'A vintage saloon identity, carried into collage-style content.' },
  { img: 'work-platero-ai', title: 'Platero', type: 'AI Image Direction', client: 'Platero', desc: 'AI-generated luxury jewelry concept, art-directed rather than shot.' },
  { img: 'work-fall-smiles', title: 'Fall Smiles Start Here', type: 'Paid Social', client: 'Stuart Pediatric Dentistry', desc: 'Bold rounded type and bright seasonal creative for a US client.' },
  { img: 'work-hospitalsiis', title: 'HospitalSIIS', type: 'Print · Brochure', client: 'Soltec Salud', desc: 'Module breakdown, AI-narrative messaging, real client logos.' },
  { img: 'work-tachyon', title: 'Tachyon IT', type: 'Sub-brand Identity', client: 'Tachyon IT × Soltec', desc: 'A software division that reads as its own brand.' },
  { img: 'work-earthshealing', title: "Earth's Healing", type: 'Investor Editorial', client: "Earth's Healing Colombia", desc: 'Making a licensed cultivator legible to investors.' },
  { img: 'work-ingenieria', title: 'Ingeniería y Equipos', type: 'Web Design', client: 'Ingeniería y Equipos', desc: 'A 24-hour-delivery funnel for heavy-equipment rental.' }
];
window.media = function (w, cls) {
  if (w.vid) {
    var poster = w.vid.replace('reel-', 'poster-');
    return '<video class="' + (cls || '') + '" src="assets/videos/' + w.vid + '.mp4" poster="assets/images/' + poster + '.jpg" muted loop playsinline autoplay preload="metadata"></video>';
  }
  return '<img class="' + (cls || '') + '" src="assets/images/' + w.img + '.jpg" alt="' + w.title + ' — ' + w.type + '" loading="lazy">';
};
