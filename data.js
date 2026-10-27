// Incursion Red River — weapon stat data.
// Every numeric field here is single-sourced from one Japanese fan wiki
// (wikiwiki.jp/incursionrr) unless realWorldReference is present, and that
// field is a DIFFERENT fact (the real firearm's spec, not a confirmation of
// the in-game tuned number). No damage/recoil values exist anywhere on the
// source wiki, so none are shipped here — see README.md and DONE_REPORT.md.
//
// sourceLevel:
//   "weapon-page"   — fetched the weapon's own wiki page directly.
//   "category-page" — only the category summary table had this weapon; no
//                      individual page exists yet on the source wiki, so
//                      magazine size and muzzle velocity are unavailable.
//
// magRounds is the total rounds fireable before reload (magazine + chambered
// round, e.g. "30+1" on the wiki becomes 31 here) — null when unknown.

const WEAPONS = [
  // ---- Rifle ----
  {
    id: "ak74m", name: "AK-74M", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.45x39mm",
    magDisplay: "30+1", magRounds: 31, rpm: 700, effectiveRangeM: 300,
    muzzleVelocityMs: 910, muzzleVelocityNote: "wiki prints the unit as \"m/h\"; treated here as m/s",
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/AK-74M",
    realWorldReference: { gun: "AK-74 / AK-74M", velocityMs: "880–900", source: "Wikipedia (AK-74 article, via web search)" },
  },
  {
    id: "aks74u", name: "AKS-74U", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.45x39mm",
    magDisplay: null, magRounds: null, rpm: 700, effectiveRangeM: 300,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/ライフル",
    realWorldReference: null,
  },
  {
    id: "m4a1", name: "Colt M4A1", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.56x45mm",
    magDisplay: "30+1", magRounds: 31, rpm: 800, effectiveRangeM: 500,
    muzzleVelocityMs: 862.5, muzzleVelocityNote: "wiki prints the unit as \"m/h\"; treated here as m/s",
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/Colt%20M4A1",
    realWorldReference: { gun: "M4A1 carbine", velocityMs: "880–910", source: "secondary M4A1 spec pages, via web search (varies by round: M855/M193/M855A1)" },
  },
  {
    id: "scarl", name: "FN SCAR-L", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.56x45mm",
    magDisplay: "30+1", magRounds: 31, rpm: 650, effectiveRangeM: 500,
    muzzleVelocityMs: 880.5, muzzleVelocityNote: "wiki prints the unit as \"m/h\"; treated here as m/s",
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/FN%20SCAR-L",
    realWorldReference: null,
  },
  {
    id: "mcxrattler", name: "Sig Sauer MCX Rattler", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.56x45mm",
    magDisplay: null, magRounds: null, rpm: 800, effectiveRangeM: 500,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/ライフル",
    realWorldReference: null,
  },
  {
    id: "mcxvirtus", name: "Sig Sauer MCX Virtus", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.56x45mm",
    magDisplay: null, magRounds: null, rpm: 800, effectiveRangeM: 500,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/ライフル",
    realWorldReference: null,
  },
  {
    id: "auga3", name: "Steyr AUG A3", category: "Rifle",
    fireModes: ["Semi", "Full"], ammo: "5.56x45mm",
    magDisplay: "30+1", magRounds: 31, rpm: 715, effectiveRangeM: 200,
    muzzleVelocityMs: 931.25, muzzleVelocityNote: "wiki prints the unit as \"m/h\"; treated here as m/s",
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/Steyr%20AUG%20A3",
    realWorldReference: null,
  },

  // ---- DMR ----
  {
    id: "scarh", name: "FN SCAR-H", category: "DMR",
    fireModes: ["Semi", "Full"], ammo: "7.62x51mm",
    magDisplay: "20+1", magRounds: 21, rpm: 600, effectiveRangeM: 500,
    muzzleVelocityMs: 786.5, muzzleVelocityNote: "wiki prints the unit as \"m/h\"; treated here as m/s",
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/FN%20SCAR-H",
    realWorldReference: null,
  },

  // ---- Pistol ----
  {
    id: "fiveseven", name: "FN Five-Seven", category: "Pistol",
    fireModes: ["Semi"], ammo: "9x19mm",
    magDisplay: null, magRounds: null, rpm: null, effectiveRangeM: null,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/ピストル",
    realWorldReference: null,
    ammoDivergenceNote: "the real FN Five-Seven is chambered in 5.7x28mm; the source wiki lists this in-game weapon's ammo as 9x19mm — shown as published, not corrected",
  },
  {
    id: "glock19", name: "Glock 19", category: "Pistol",
    fireModes: ["Semi"], ammo: "9x19mm",
    magDisplay: "15+1", magRounds: 16, rpm: 30, effectiveRangeM: 50,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/Glock%2019",
    realWorldReference: null,
    rpmNote: "the source wiki's own weapon page labels this field \"rate of fire\" and prints 30rpm for a semi-auto pistol — far below a real Glock 19's mechanical cyclic rate; shown as published, not adjusted",
  },
  {
    id: "p320", name: "Sig Sauer P320", category: "Pistol",
    fireModes: ["Semi"], ammo: "9x19mm",
    magDisplay: "17+1", magRounds: 18, rpm: 30, effectiveRangeM: 50,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "weapon-page", sourceUrl: "https://wikiwiki.jp/incursionrr/Sig%20Sauer%20P320",
    realWorldReference: null,
    rpmNote: "the source wiki's own weapon page labels this field \"rate of fire\" and prints 30rpm for a semi-auto pistol — far below a real P320's mechanical cyclic rate; shown as published, not adjusted",
  },

  // ---- Shotgun ----
  {
    id: "benellim2", name: "Benelli M2", category: "Shotgun",
    fireModes: ["Semi"], ammo: "12ga x70mm",
    magDisplay: null, magRounds: null, rpm: 30, effectiveRangeM: 170,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/ショットガン",
    realWorldReference: null,
  },
  {
    id: "riavr80", name: "RIA VR80", category: "Shotgun",
    fireModes: ["Semi"], ammo: "12ga x70mm",
    magDisplay: null, magRounds: null, rpm: 30, effectiveRangeM: null,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/ショットガン",
    realWorldReference: null,
  },

  // ---- SMG ----
  {
    id: "p90", name: "FN P90", category: "SMG",
    fireModes: ["Semi", "Full"], ammo: "9x19mm",
    magDisplay: null, magRounds: null, rpm: 900, effectiveRangeM: null,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/サブマシンガン",
    realWorldReference: null,
    ammoDivergenceNote: "the real FN P90 is chambered in its own proprietary 5.7x28mm round; the source wiki lists this in-game weapon's ammo as 9x19mm — shown as published, not corrected",
  },
  {
    id: "mp5", name: "HK MP5", category: "SMG",
    fireModes: ["Semi", "3-round burst", "Full"], ammo: "9x19mm",
    magDisplay: null, magRounds: null, rpm: 950, effectiveRangeM: 200,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/サブマシンガン",
    realWorldReference: null,
  },
  {
    id: "mp5k", name: "HK MP5K", category: "SMG",
    fireModes: ["Semi", "3-round burst", "Full"], ammo: "9x19mm",
    magDisplay: null, magRounds: null, rpm: 950, effectiveRangeM: 200,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/サブマシンガン",
    realWorldReference: null,
  },
  {
    id: "mp5sd", name: "HK MP5SD", category: "SMG",
    fireModes: ["Semi", "3-round burst", "Full"], ammo: "9x19mm",
    magDisplay: null, magRounds: null, rpm: 950, effectiveRangeM: 200,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/サブマシンガン",
    realWorldReference: null,
  },
  {
    id: "krissvector", name: "Kriss Vector .45ACP", category: "SMG",
    fireModes: ["Semi", "3-round burst", "Full"], ammo: ".45ACP",
    magDisplay: null, magRounds: null, rpm: 950, effectiveRangeM: null,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/サブマシンガン",
    realWorldReference: null,
  },
  {
    id: "pp19", name: "PP-19 Vitayz", category: "SMG",
    fireModes: ["Semi", "Full"], ammo: "9x19mm",
    magDisplay: null, magRounds: null, rpm: 700, effectiveRangeM: 200,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/サブマシンガン",
    realWorldReference: null,
  },

  // ---- Sniper Rifle ----
  {
    id: "srsa2", name: "Desert Tech SRS A2", category: "Sniper Rifle",
    fireModes: ["Semi"], ammo: ".338",
    magDisplay: null, magRounds: null, rpm: 30, effectiveRangeM: 1700,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/スナイパーライフル",
    realWorldReference: null,
  },
  {
    id: "m700", name: "Remington M700", category: "Sniper Rifle",
    fireModes: ["Semi"], ammo: ".338",
    magDisplay: null, magRounds: null, rpm: null, effectiveRangeM: null,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/スナイパーライフル",
    realWorldReference: null,
  },
  {
    id: "sks", name: "Simonov SKS", category: "Sniper Rifle",
    fireModes: ["Semi"], ammo: "7.62x39mm",
    magDisplay: null, magRounds: null, rpm: 40, effectiveRangeM: 400,
    muzzleVelocityMs: null, muzzleVelocityNote: null,
    sourceLevel: "category-page", sourceUrl: "https://wikiwiki.jp/incursionrr/スナイパーライフル",
    realWorldReference: null,
  },
];

// time to empty magazine, in seconds — null when magRounds or rpm is unknown.
function timeToEmptySeconds(weapon) {
  if (!weapon.magRounds || !weapon.rpm) return null;
  return (weapon.magRounds / weapon.rpm) * 60;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { WEAPONS, timeToEmptySeconds };
}
