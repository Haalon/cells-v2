import amoebas_and_cancer from "../glsl/rules/amoebas_and_cancer.frag";
import bacteria from "../glsl/rules/bacteria.frag";
import borders from "../glsl/rules/borders.frag";
import borders_2 from "../glsl/rules/borders_2.frag";
import cancer_growth from "../glsl/rules/cancer_growth.frag";
import cells_and_worms from "../glsl/rules/cells_and_worms.frag";
import cells_and_worms_2 from "../glsl/rules/cells_and_worms_2.frag";
import chained_cells from "../glsl/rules/chained_cells.frag";
import crystals from "../glsl/rules/crystals.frag";
import day_and_night from "../glsl/rules/day_and_night.frag";
import dividing_dots from "../glsl/rules/dividing_dots.frag";
import dotted_amoebas from "../glsl/rules/dotted_amoebas.frag";
import expanding_worms from "../glsl/rules/expanding_worms.frag";
import expanding_worms_2 from "../glsl/rules/expanding_worms_2.frag";
import expanding_worms_3 from "../glsl/rules/expanding_worms_3.frag";

import flame from "../glsl/rules/flame.frag";
import flammable_gas from "../glsl/rules/flammable_gas.frag";
import game_of_life from "../glsl/rules/game_of_life.frag";
import gears from "../glsl/rules/gears.frag";
import growing_mold from "../glsl/rules/growing_mold.frag";
import guts from "../glsl/rules/guts.frag";
import hungry_cells from "../glsl/rules/hungry_cells.frag";
import kaleidoscope from "../glsl/rules/kaleidoscope.frag";
import lazy_builder from "../glsl/rules/lazy_builder.frag";
import medusa_gliders from "../glsl/rules/medusa_gliders.frag";
import medusa_gliders_2 from "../glsl/rules/medusa_gliders_2.frag";
import mitosis from "../glsl/rules/mitosis.frag";
import mold from "../glsl/rules/mold.frag";
import multicore_primordial_soup from "../glsl/rules/multicore_primordial_soup.frag";
import noisy_cells from "../glsl/rules/noisy_cells.frag";
import patches from "../glsl/rules/patches.frag";
import petri_dish from "../glsl/rules/petri_dish.frag";
import primordial_soup from "../glsl/rules/primordial_soup.frag";
import primordial_soup_2 from "../glsl/rules/primordial_soup_2.frag";
import quicksand from "../glsl/rules/quicksand.frag";
import random_walkers from "../glsl/rules/random_walkers.frag";
import region_maker from "../glsl/rules/region_maker.frag";
import smoke_walls from "../glsl/rules/smoke_walls.frag";
import square_worms from "../glsl/rules/square_worms.frag";
import tentacles from "../glsl/rules/tentacles.frag";
import trypophobic from "../glsl/rules/trypophobic.frag";
import walking_cells from "../glsl/rules/walking_cells.frag";
import worms_and_cells from "../glsl/rules/worms_and_cells.frag";
import zebra from "../glsl/rules/zebra.frag";
import zones_and_cells from "../glsl/rules/zones_and_cells.frag";

export const rules = [
  {
    name: "hungry cells",
    r: 0.53,
    src: hungry_cells,
  },
  {
    name: "walking cells",
    r: 0.33,
    src: walking_cells,
  },
  {
    name: "flame",
    r: 0.3,
    src: flame,
  },
  {
    name: "mold",
    r: 0.3,
    src: mold,
  },
  {
    name: "growing mold",
    r: 0.22,
    src: growing_mold,
  },
  {
    name: "zebra",
    r: 0.45,
    src: zebra,
  },
  {
    name: "petri dish",
    r: 0.05,
    src: petri_dish,
  },
  {
    name: "square worms",
    r: 0.51,
    src: square_worms,
  },
  {
    name: "bacteria",
    r: 0.5,
    src: bacteria,
  },
  {
    name: "mitosis",
    r: 0.37,
    src: mitosis,
  },
  {
    name: "patches",
    r: 0.4,
    src: patches,
  },
  {
    name: "gears",
    r: 0.38,
    src: gears,
  },
  {
    name: "chained cells",
    r: 0.45,
    src: chained_cells,
  },
  {
    name: "primordial soup",
    r: 0.25,
    src: primordial_soup,
  },
  {
    name: "primordial soup 2",
    r: 0.03,
    src: primordial_soup_2,
  },
  {
    name: "cancer growth",
    r: 0.58,
    src: cancer_growth,
  },
  {
    name: "quicksand",
    r: 0.5,
    src: quicksand,
  },
  {
    name: "flammable gas",
    r: 0.75,
    src: flammable_gas,
  },
  {
    name: "tentacles",
    r: 0.3,
    src: tentacles,
  },
  {
    name: "random walkers",
    r: 0.5,
    src: random_walkers,
  },
  {
    name: "game of life",
    r: 0.4,
    src: game_of_life,
  },
  {
    name: "guts",
    r: 0.5,
    src: guts,
  },
  {
    name: "crystals",
    r: 0.42,
    src: crystals,
  },
  {
    name: "cells and worms",
    r: 0.4,
    src: cells_and_worms,
  },
  {
    name: "cells and worms 2",
    r: 0.35,
    src: cells_and_worms_2,
  },
  {
    name: "worms and cells",
    r: 0.38,
    src: worms_and_cells,
  },
  {
    name: "amoebas and cancer",
    r: 0.35,
    src: amoebas_and_cancer,
  },
  {
    name: "expanding worms",
    r: 0.45,
    src: expanding_worms,
  },
  {
    name: "expanding worms 2",
    r: 0.3,
    src: expanding_worms_2,
  },
  {
    name: "expanding worms 3",
    r: 0.42,
    src: expanding_worms_3,
  },
  {
    name: "kaleidoscope",
    r: 0.93,
    src: kaleidoscope,
  },
  {
    name: "region maker",
    r: 0.5,
    src: region_maker,
  },
  {
    name: "noisy cells",
    r: 0.45,
    src: noisy_cells,
  },
  {
    name: "multicore primordial soup",
    r: 0.4,
    src: multicore_primordial_soup,
  },
  {
    name: "dividing dots",
    r: 0.5,
    src: dividing_dots,
  },
  {
    name: "medusa gliders",
    r: 0.5,
    src: medusa_gliders,
  },
  {
    name: "medusa gliders 2",
    r: 0.35,
    src: medusa_gliders_2,
  },
  {
    name: "borders",
    r: 0.5,
    src: borders,
  },
  {
    name: "borders 2",
    r: 0.09,
    src: borders_2,
  },
  {
    name: "zones and cells",
    r: 0.3,
    src: zones_and_cells,
  },
  {
    name: "trypophobic",
    r: 0.3,
    src: trypophobic,
  },
  {
    name: "smoke walls",
    r: 0.3,
    src: smoke_walls,
  },
  {
    name: "dotted amoebas",
    r: 0.5,
    src: dotted_amoebas,
  },
  {
    name: "lazy builder",
    r: 0.3,
    src: lazy_builder,
  },
  {
    name: "day and night",
    r: 0.5,
    src: day_and_night,
  },
] as const;
